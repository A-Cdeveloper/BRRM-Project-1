// API Constants
export const VEHICLES_PER_PAGE = 10;

// Vehicle Filters
export { EQUIPMENT_FEATURES } from "./equiipment";
export { VEHICLE_FILTERS } from "./filters";
export { PARTNERS } from "./partners";
export { SERVICES } from "./services";

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
