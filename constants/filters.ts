// Vehicle filter options based on vehicles.json data
export const VEHICLE_FILTERS = {
  makes: [
    { value: "Peugeot", label: "Peugeot" },
    { value: "BMW", label: "BMW" },
    { value: "Mercedes-Benz", label: "Mercedes-Benz" },
    { value: "Volkswagen", label: "Volkswagen" },
    { value: "Tesla", label: "Tesla" },
    { value: "Toyota", label: "Toyota" },
    { value: "Mazda", label: "Mazda" },
  ],

  models: [
    { value: "3008", label: "3008" },
    { value: "2008", label: "2008" },
    { value: "X3", label: "X3" },
    { value: "X5", label: "X5" },
    { value: "C-Class", label: "C-Class" },
    { value: "E-Class", label: "E-Class" },
    { value: "Golf", label: "Golf" },
    { value: "Passat", label: "Passat" },
    { value: "Model 3", label: "Model 3" },
    { value: "CX-5", label: "CX-5" },
    { value: "Corolla", label: "Corolla" },
  ],

  bodyTypes: [
    { value: "off_road", label: "SUV/Off-road" },
    { value: "sedan", label: "Sedan" },
    { value: "vans", label: "Van" },
    { value: "minivan", label: "Minivan" },
    { value: "Wagon", label: "Wagon" },
  ],

  categories: [
    { value: "used", label: "Used" },
    { value: "brand_new", label: "Brand New" },
  ],

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
