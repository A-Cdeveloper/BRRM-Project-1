// Vehicle filter options - static ranges only
export const VEHICLE_FILTERS = {
  priceFrom: [
    { value: "0", label: "€0" },
    { value: "10000", label: "€10,000" },
    { value: "20000", label: "€20,000" },
    { value: "30000", label: "€30,000" },
    { value: "50000", label: "€50,000" },
  ],

  priceTo: [
    { value: "10000", label: "€10,000" },
    { value: "20000", label: "€20,000" },
    { value: "30000", label: "€30,000" },
    { value: "50000", label: "€50,000" },
    { value: "50000+", label: "€50,000+" },
  ],

  mileageFrom: [
    { value: "0", label: "0 km" },
    { value: "50000", label: "50,000 km" },
    { value: "100000", label: "100,000 km" },
    { value: "150000", label: "150,000 km" },
  ],

  mileageTo: [
    { value: "50000", label: "50,000 km" },
    { value: "100000", label: "100,000 km" },
    { value: "150000", label: "150,000 km" },
    { value: "150000+", label: "150,000+ km" },
  ],
};
