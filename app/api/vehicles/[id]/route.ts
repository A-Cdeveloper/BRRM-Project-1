import { NextRequest, NextResponse } from "next/server";
import { getAuthToken, getAutoHouseId } from "@/lib/auth/tokenManager";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    return NextResponse.json(
      { error: "Missing API_BASE_URL" },
      { status: 500 }
    );
  }

  try {
    const { id } = params;
    const token = await getAuthToken();
    const autoHouseId = getAutoHouseId();

    const upstreamUrl = `${baseUrl}/auto-houses/${autoHouseId}/vehicles/${id}`;
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
      console.error("Vehicle upstream error", upstreamRes.status, body);
      return NextResponse.json(
        { error: "Upstream error", status: upstreamRes.status, details: body },
        { status: upstreamRes.status }
      );
    }

    return NextResponse.json(body);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Vehicle detail proxy error:", message);
    return NextResponse.json(
      { error: "Upstream error", message },
      { status: 502 }
    );
  }
}
