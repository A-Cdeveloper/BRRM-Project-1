import { VehiclesResponse, Vehicle, VehicleFilters } from "@/types";
import { VEHICLES_PER_PAGE } from "@/constants";

export const getVehicles = async (
  page: number = 1,
  filters: VehicleFilters = {}
): Promise<VehiclesResponse> => {
  try {
    // Build query parameters
    const params = new URLSearchParams({
      page: page.toString(),
      limit: VEHICLES_PER_PAGE.toString(),
    });

    // Add filters to query params
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value.trim() !== "") {
        params.append(key, value);
      }
    });

    const response = await fetch(`/api/vehicles?${params.toString()}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw new Error("Failed to fetch vehicles");
  }
};

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
