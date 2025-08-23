// API Constants
export const VEHICLES_PER_PAGE = 10;

// Vehicle Filters
export { VEHICLE_FILTERS } from "./filters";

// Filter Keys
export const FILTER_KEYS = [
  "make",
  "model",
  "bodyType",
  "category",
  "priceFrom",
  "priceTo",
  "mileageFrom",
  "mileageTo",
] as const;
