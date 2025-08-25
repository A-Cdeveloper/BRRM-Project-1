import { Vehicle } from "@/types";
import { VEHICLE_FILTERS } from "@/constants";

type Option = { value: string; label: string };
export type DynamicVehicleFilterOptions = {
  makes: Option[];
  models: Option[];
  bodyTypes: Option[];
  categories: Option[];
  priceFrom: Option[];
  priceTo: Option[];
  mileageFrom: Option[];
  mileageTo: Option[];
};

function uniqSorted(values: Array<string | null | undefined>): string[] {
  const set = new Set<string>();
  for (const v of values) {
    if (typeof v === "string" && v.trim() !== "") {
      set.add(v.trim());
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

function toOptions(values: string[]): Option[] {
  return values.map((v) => ({ value: v, label: v }));
}

export function buildDynamicVehicleFilterOptions(
  vehicles: Vehicle[]
): DynamicVehicleFilterOptions {
  const makes = uniqSorted(vehicles.map((v) => v.make));
  const models = uniqSorted(vehicles.map((v) => v.model));
  const bodyTypes = uniqSorted(vehicles.map((v) => v.bodyType));
  const categories = uniqSorted(vehicles.map((v) => v.category));

  return {
    makes: toOptions(makes),
    models: toOptions(models),
    bodyTypes: toOptions(bodyTypes),
    categories: toOptions(categories),
    // Static buckets mirrored from constants (option 1)
    priceFrom: VEHICLE_FILTERS.priceFrom,
    priceTo: VEHICLE_FILTERS.priceTo,
    mileageFrom: VEHICLE_FILTERS.mileageFrom,
    mileageTo: VEHICLE_FILTERS.mileageTo,
  };
}
