import { useRouter, useSearchParams } from "next/navigation";
import { VehicleFilters } from "@/types";
import { FILTER_KEYS } from "@/constants";

type SearchParams = { [key: string]: string | string[] | undefined };

export const extractFilters = (searchParams: SearchParams): VehicleFilters => {
  return {
    make: typeof searchParams.make === "string" ? searchParams.make : undefined,
    model:
      typeof searchParams.model === "string" ? searchParams.model : undefined,
    bodyType:
      typeof searchParams.bodyType === "string"
        ? searchParams.bodyType
        : undefined,
    category:
      typeof searchParams.category === "string"
        ? searchParams.category
        : undefined,
    priceFrom:
      typeof searchParams.priceFrom === "string"
        ? searchParams.priceFrom
        : undefined,
    priceTo:
      typeof searchParams.priceTo === "string"
        ? searchParams.priceTo
        : undefined,
    mileageFrom:
      typeof searchParams.mileageFrom === "string"
        ? searchParams.mileageFrom
        : undefined,
    mileageTo:
      typeof searchParams.mileageTo === "string"
        ? searchParams.mileageTo
        : undefined,
  };
};

export const useVehicleFilters = (searchParams: SearchParams) => {
  const router = useRouter();
  const currentSearchParams = useSearchParams();
  const currentFilters = extractFilters(searchParams);

  const updateFilters = (newFilters: VehicleFilters) => {
    // Create new URLSearchParams with current params
    const params = new URLSearchParams(currentSearchParams.toString());

    // Clear existing filter params
    FILTER_KEYS.forEach((key) => params.delete(key));

    // Add new filter params
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value && value.trim() !== "") {
        params.set(key, value);
      }
    });

    // Reset to page 1 when filters change
    params.set("page", "1");

    // Update URL - use push to add to browser history for proper back navigation
    router.push(`/vehicles?${params.toString()}`);
  };

  const resetFilters = () => {
    const params = new URLSearchParams(currentSearchParams.toString());

    // Clear all filter params
    FILTER_KEYS.forEach((key) => params.delete(key));
    params.set("page", "1");

    router.push(`/vehicles?${params.toString()}`);
  };

  return {
    currentFilters,
    updateFilters,
    resetFilters,
  };
};
