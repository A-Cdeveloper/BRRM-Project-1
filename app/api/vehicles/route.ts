import { NextResponse } from "next/server";
import { VehiclesResponse, Vehicle } from "@/types/vehicles";

export async function GET() {
  try {
    const vehiclesData = await import("@/data/vechicles.json");

    const response: VehiclesResponse = {
      count: vehiclesData.default.count,
      results: vehiclesData.default.results as Vehicle[],
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
