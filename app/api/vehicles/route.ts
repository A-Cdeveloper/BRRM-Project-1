import { NextRequest, NextResponse } from "next/server";
import { getAuthToken, getAutoHouseId } from "@/lib/auth/tokenManager";
import { createErrorResponse, validatePaginationParams } from "@/lib/api-utils";
import { env } from "@/lib/env";

export async function GET(request: NextRequest) {
  const baseUrl = env.API_BASE_URL;

  // Read pagination params from query
  const { searchParams } = new URL(request.url);
  const pageParam = Number(searchParams.get("page") ?? "1");
  const limitParam = Number(searchParams.get("limit") ?? "10");

  // Validate and bound pagination parameters
  const { currentPage, limit } = validatePaginationParams(
    pageParam,
    limitParam
  );

  try {
    const token = await getAuthToken();
    const autoHouseId = getAutoHouseId();

    const upstreamUrl = `${baseUrl}/auto-houses/${autoHouseId}/vehicles`;

    const upstreamRes = await fetch(upstreamUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const body = await upstreamRes.json().catch(() => ({}));
    if (!upstreamRes.ok) {
      console.error("Vehicles upstream error", upstreamRes.status, body);
      return createErrorResponse(upstreamRes.status, "Upstream error", {
        status: upstreamRes.status,
        details: body,
      });
    }

    // Normalize base shape
    const allResults = Array.isArray(body) ? body : body.results ?? [];
    const count = Array.isArray(body)
      ? body.length
      : body.count ?? allResults.length;

    // Server-side slice based on page/limit
    const start = (currentPage - 1) * limit;
    const end = start + limit;
    const pageResults = allResults.slice(start, end);

    const hasNextPage = end < count;
    const nextPage = hasNextPage ? currentPage + 1 : undefined;

    const normalized = {
      count,
      results: pageResults,
      hasNextPage,
      nextPage,
      currentPage,
    };

    return NextResponse.json(normalized, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Vehicles proxy error:", message);
    return createErrorResponse(502, "Upstream error", { message });
  }
}
