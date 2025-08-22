// Vehicle types based on vehicles.json structure
export type Vehicle = {
  // Basic info
  id: string;
  autoHouseId: string;
  creatorId: string;

  // Vehicle details
  make: string;
  model: string;
  generation: string;
  typeName: string;
  seriesName: string;
  bodyType: string;

  // Technical info
  vin: string | null;
  engineNumber: string | null;
  nationalCode: string | null;
  hsn: string | null;
  tsn: string | null;

  // Registration & status
  category: string;
  status: string;
  licensePlate: string | null;

  // Dates
  arrivedAt: string;
  firstRegistration: string;
  productionDate: string | null;
  deliveryDate: string | null;
  purchaseDate: string | null;
  soldAt: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;

  // Mileage & ownership
  mileage: number;
  previousOwners: number;

  // Pricing
  retailPrice: number | null;
  prices: {
    id: string;
    autoHouseId: string;
    vehicleId: string;
    type: string;
    marginTaxation: boolean;
    value: number;
    negotiable: boolean;
    currency: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  }[];
  profit: number | null;
  profitMargin: number | null;

  // Photos
  previewPhotoId: string;
  previewPhoto: {
    url: string;
    thumbnailUrl: string;
    id: string;
    position: number;
    fileName: string;
    vehicleId: string;
  };

  // Additional info
  customId: number;
  description: string | null;
  internalInfo: string | null;
  commission: boolean;

  // References
  purchasedFromId: string | null;
  purchasedFromType: string | null;
  purchaseCategoryId: string | null;
  soldToId: string | null;
  salesEmployeeId: string | null;
  salesEmployee: null;

  // Arrays
  investments: [];
  investmentsSum: number;

  // UI helpers
  standDays: number;
  sortColumn: string | null;
};

export type VehiclesResponse = {
  count: number;
  results: Vehicle[];
};
