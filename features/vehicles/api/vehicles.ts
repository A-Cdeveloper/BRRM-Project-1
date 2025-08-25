import {
  VehiclesResponse,
  Vehicle,
  VehicleFilters,
  VehiclePhoto,
  VehicleEquipmentItem,
} from "@/types";
import { VEHICLES_PER_PAGE } from "@/constants";

export const getVehicles = async (
  page: number = 1,
  filters: VehicleFilters = {}
): Promise<VehiclesResponse> => {
  try {
    // Always fetch a large slice from server to emulate full list retrieval
    const params = new URLSearchParams({
      page: "1",
      limit: String(VEHICLES_PER_PAGE * 1000),
    });

    // Keep passing filters in URL (bookmark/debug), server ignores them
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value.trim() !== "") {
        params.append(key, value);
      }
    });

    const response = await fetch(`/api/vehicles?${params.toString()}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const full = (await response.json()) as {
      count?: number;
      results: Vehicle[];
    };
    const all: Vehicle[] = Array.isArray(full.results) ? full.results : [];

    // Helpers
    const resolvePrice = (v: Vehicle): number | null => {
      if (typeof v.retailPrice === "number") return v.retailPrice;
      const retailItem = v.prices.find((p) => p.type === "retail");
      if (retailItem) return retailItem.value;
      return v.prices[0]?.value ?? null;
    };

    // Apply client-side filtering
    const make = filters.make?.toLowerCase() ?? "";
    const model = filters.model?.toLowerCase() ?? "";
    const bodyType = filters.bodyType?.toLowerCase() ?? "";
    const category = filters.category?.toLowerCase() ?? "";
    const priceFrom = filters.priceFrom ? Number(filters.priceFrom) : undefined;
    const priceTo = filters.priceTo ? Number(filters.priceTo) : undefined;
    const mileageFrom = filters.mileageFrom
      ? Number(filters.mileageFrom)
      : undefined;
    const mileageTo = filters.mileageTo ? Number(filters.mileageTo) : undefined;

    const filtered = all.filter((v) => {
      const vMake = (v.make ?? "").toString().toLowerCase();
      const vModel = (v.model ?? "").toString().toLowerCase();
      const vBody = (v.bodyType ?? "").toString().toLowerCase();
      const vCategory = (v.category ?? "").toString().toLowerCase();

      if (make && !vMake.includes(make)) return false;
      if (model && !vModel.includes(model)) return false;
      if (bodyType && !vBody.includes(bodyType)) return false;
      if (category && vCategory !== category) return false;

      const value = resolvePrice(v);
      if (
        priceFrom !== undefined &&
        priceFrom > 0 &&
        (value == null || value < priceFrom)
      ) {
        return false;
      }
      if (
        priceTo !== undefined &&
        priceTo > 0 &&
        (value == null || value > priceTo)
      ) {
        return false;
      }

      const mileageVal: number | null =
        typeof v.mileage === "number" ? v.mileage : null;
      if (
        mileageFrom !== undefined &&
        mileageFrom > 0 &&
        (mileageVal == null || mileageVal < mileageFrom)
      ) {
        return false;
      }
      if (
        mileageTo !== undefined &&
        mileageTo > 0 &&
        (mileageVal == null || mileageVal > mileageTo)
      ) {
        return false;
      }

      return true;
    });

    // Client-side pagination over filtered list
    const count = filtered.length;
    const currentPage = typeof page === "number" && page > 0 ? page : 1;
    const start = (currentPage - 1) * VEHICLES_PER_PAGE;
    const end = start + VEHICLES_PER_PAGE;
    const pageResults = filtered.slice(start, end);

    const hasNextPage = end < count;
    const nextPage = hasNextPage ? currentPage + 1 : undefined;

    return {
      count,
      results: pageResults,
      hasNextPage,
      nextPage,
      currentPage,
    };
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw new Error("Failed to fetch vehicles");
  }
};

////////////////////////////////////////////////////////////////////////////
export const getVehicleById = async (id: string): Promise<Vehicle> => {
  try {
    console.log("Fetching vehicle with ID:", id);
    const response = await fetch(`/api/vehicles/${id}`);

    console.log("Response status:", response.status);
    console.log("Response ok:", response.ok);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Vehicle not found");
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Vehicle data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching vehicle:", error);
    throw new Error("Failed to fetch vehicle");
  }
};

export const getVehiclePhotos = async (id: string): Promise<VehiclePhoto[]> => {
  try {
    const response = await fetch(`/api/vehicles/${id}/photos`);

    if (!response.ok) {
      if (response.status === 404) {
        return []; // Return empty array if no photos found
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const photos = await response.json();
    return Array.isArray(photos) ? photos : [];
  } catch (error) {
    console.error("Error fetching vehicle photos:", error);
    return []; // Return empty array on error
  }
};

export const getVehicleEquipment = async (
  id: string
): Promise<VehicleEquipmentItem[]> => {
  try {
    const response = await fetch(`/api/vehicles/${id}/equipment`);

    if (!response.ok) {
      if (response.status === 404) {
        return []; // Return empty array if no equipment found
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return Array.isArray(data.items) ? data.items : [];
  } catch (error) {
    console.error("Error fetching vehicle equipment:", error);
    return []; // Return empty array on error
  }
};
