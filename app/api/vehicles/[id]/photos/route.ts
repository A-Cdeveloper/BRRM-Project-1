import { NextRequest, NextResponse } from "next/server";
import { getAuthToken, getAutoHouseId } from "@/lib/auth/tokenManager";
import { createErrorResponse } from "@/lib/api-utils";
import { env } from "@/lib/env";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const baseUrl = env.API_BASE_URL;

  try {
    const { id } = await params;
    const token = await getAuthToken();
    const autoHouseId = getAutoHouseId();

    const upstreamUrl = `${baseUrl}/auto-houses/${autoHouseId}/vehicles/${id}/photos`;

    const response = await fetch(upstreamUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const body = await response.json();
    if (!response.ok) {
      console.error("Vehicle photos upstream error", response.status, body);
      return createErrorResponse(response.status, "Upstream error", {
        status: response.status,
        details: body,
      });
    }

    // Return photos array directly
    return NextResponse.json(body, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Vehicle photos proxy error:", message);
    return createErrorResponse(502, "Upstream error", { message });
  }
}
