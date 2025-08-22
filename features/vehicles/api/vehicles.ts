import { VehiclesResponse } from "@/types";

export const getVehicles = async (
  page: number = 1
): Promise<VehiclesResponse> => {
  try {
    const response = await fetch(`/api/vehicles?page=${page}&limit=10`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw new Error("Failed to fetch vehicles");
  }
};
