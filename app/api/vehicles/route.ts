import { NextRequest, NextResponse } from "next/server";
import { VehicleFilters } from "@/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    // Extract filter parameters
    const filters: VehicleFilters = {
      make: searchParams.get("make") || undefined,
      model: searchParams.get("model") || undefined,
      bodyType: searchParams.get("bodyType") || undefined,
      category: searchParams.get("category") || undefined,
      priceFrom: searchParams.get("priceFrom") || undefined,
      priceTo: searchParams.get("priceTo") || undefined,
      mileageFrom: searchParams.get("mileageFrom") || undefined,
      mileageTo: searchParams.get("mileageTo") || undefined,
    };

    const vehiclesData = await import("@/data/vechicles.json");
    let filteredVehicles = vehiclesData.default.results;

    // Apply filters
    if (filters.make) {
      filteredVehicles = filteredVehicles.filter(
        (vehicle) => vehicle.make.toLowerCase() === filters.make!.toLowerCase()
      );
    }

    if (filters.model) {
      filteredVehicles = filteredVehicles.filter(
        (vehicle) =>
          vehicle.model.toLowerCase() === filters.model!.toLowerCase()
      );
    }

    if (filters.bodyType) {
      filteredVehicles = filteredVehicles.filter(
        (vehicle) => vehicle.bodyType === filters.bodyType
      );
    }

    if (filters.category) {
      filteredVehicles = filteredVehicles.filter(
        (vehicle) => vehicle.category === filters.category
      );
    }

    if (filters.mileageFrom) {
      let mileageFrom: number;
      if (filters.mileageFrom.includes("-")) {
        // Handle "0-50000" format - take the first number
        mileageFrom = parseInt(filters.mileageFrom.split("-")[0]);
      } else {
        mileageFrom = parseInt(filters.mileageFrom);
      }
      console.log("Mileage from filter:", mileageFrom);
      filteredVehicles = filteredVehicles.filter(
        (vehicle) => vehicle.mileage && vehicle.mileage >= mileageFrom
      );
    }

    if (filters.mileageTo) {
      let mileageTo: number;
      if (filters.mileageTo.includes("+")) {
        // Handle "150000+" format - no upper limit, so just continue
      } else if (filters.mileageTo.includes("-")) {
        // Handle "0-50000" format - take the second number
        mileageTo = parseInt(filters.mileageTo.split("-")[1]);
        filteredVehicles = filteredVehicles.filter(
          (vehicle) => vehicle.mileage && vehicle.mileage <= mileageTo
        );
      } else {
        mileageTo = parseInt(filters.mileageTo);
        filteredVehicles = filteredVehicles.filter(
          (vehicle) => vehicle.mileage && vehicle.mileage <= mileageTo
        );
      }
    }

    if (filters.priceFrom || filters.priceTo) {
      console.log("Price filters:", {
        priceFrom: filters.priceFrom,
        priceTo: filters.priceTo,
      });
      filteredVehicles = filteredVehicles.filter((vehicle) => {
        const retailPrice = vehicle.prices.find(
          (p) => p.type === "retail"
        )?.value;
        if (!retailPrice) return false;
        console.log(
          `Vehicle ${vehicle.make} ${vehicle.model}: retailPrice=${retailPrice}`
        );

        // Check priceFrom
        if (filters.priceFrom) {
          let priceFrom: number;
          if (filters.priceFrom.includes("+")) {
            // Handle "50000+" format
            priceFrom = parseInt(filters.priceFrom.replace("+", ""));
          } else if (filters.priceFrom.includes("-")) {
            // Handle "0-10000" format - take the first number
            priceFrom = parseInt(filters.priceFrom.split("-")[0]);
          } else {
            priceFrom = parseInt(filters.priceFrom);
          }
          if (retailPrice < priceFrom) return false;
        }

        // Check priceTo
        if (filters.priceTo) {
          if (filters.priceTo.includes("+")) {
            // Handle "50000+" format - no upper limit, so just continue
          } else if (filters.priceTo.includes("-")) {
            // Handle "0-10000" format - take the second number
            const priceTo = parseInt(filters.priceTo.split("-")[1]);
            if (retailPrice > priceTo) return false;
          } else {
            // Regular number
            const priceTo = parseInt(filters.priceTo);
            if (retailPrice > priceTo) return false;
          }
        }

        return true;
      });
    }

    // Apply pagination to filtered results
    const offset = (page - 1) * limit;
    const paginatedVehicles = filteredVehicles.slice(offset, offset + limit);

    const response = {
      count: filteredVehicles.length,
      results: paginatedVehicles,
      hasNextPage: offset + limit < filteredVehicles.length,
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
