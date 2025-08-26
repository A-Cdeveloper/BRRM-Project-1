import { NextResponse } from "next/server";
import { getAuthToken, getAutoHouseId } from "@/lib/auth/tokenManager";

export async function GET() {
  try {
    // Get token and autoHouseId from tokenManager
    const token = await getAuthToken();
    const autoHouseId = getAutoHouseId();

    // Call 3rd party API to get company data
    const response = await fetch(
      `${process.env.API_BASE_URL}/auto-houses/${autoHouseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(
        `Company API error: ${response.status} ${response.statusText}`
      );
      return NextResponse.json(
        { error: "Failed to fetch company data" },
        { status: response.status }
      );
    }

    const companyData = await response.json();

    return NextResponse.json(companyData, { status: 200 });
  } catch (error) {
    console.error("Company API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
