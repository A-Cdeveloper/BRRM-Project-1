import { VehiclesResponse, Vehicle } from "@/types";
import { VEHICLES_PER_PAGE } from "@/constants";

export const getVehicles = async (
  page: number = 1
): Promise<VehiclesResponse> => {
  try {
    const response = await fetch(
      `/api/vehicles?page=${page}&limit=${VEHICLES_PER_PAGE}`
    );
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
    const response = await fetch(`/api/vehicles/${id}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Vehicle not found");
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching vehicle:", error);
    throw new Error("Failed to fetch vehicle");
  }
};
