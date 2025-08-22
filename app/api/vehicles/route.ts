import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const vehiclesData = await import("@/data/vechicles.json");

    const offset = (page - 1) * limit;
    const paginatedVehicles = vehiclesData.default.results.slice(
      offset,
      offset + limit
    );

    const response = {
      count: vehiclesData.default.count,
      results: paginatedVehicles,
      hasNextPage: offset + limit < vehiclesData.default.count,
      nextPage: page + 1,
      currentPage: page,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    return NextResponse.json(
      { error: "Failed to fetch vehicles" },
      { status: 500 }
    );
  }
}
