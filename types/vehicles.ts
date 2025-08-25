// Vehicle types based on vehicles.json structure
export type Investment = {
  id: string;
  autoHouseId: string;
  investmentTypeId: string;
  vehicleId: string;
  amount: number;
  note: string | null;
  date: string; // ISO
  createdAt: string; // ISO
  updatedAt: string; // ISO
  deletedAt: string | null;
};

export type LicensePlateEmbeddedVehicle = {
  standDays: number;
  sortColumn: string | null;
  id: string;
  autoHouseId: string;
  creatorId: string;
  vin: string | null;
  bodyType: string | null;
  make: string;
  model: string;
  generation: string;
  typeName: string;
  seriesName: string;
  customId: number;
  previewPhotoId: string | null;
  category: string;
  status: string;
  arrivedAt: string | null;
  firstRegistration: string;
  mileage: number | null;
  retailPrice: number | null;
  description: string | null;
  engineNumber: string | null;
  nationalCode: string | null;
  previousOwners: number | null;
  deliveryDate: string | null;
  purchaseDate: string | null;
  soldAt: string | null;
  salesEmployeeId: string | null;
  commission: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  purchasedFromId: string | null;
  purchasedFromType: string | null;
  purchaseCategoryId: string | null;
  soldToId: string | null;
  productionDate: string | null;
  hsn: string | null;
  tsn: string | null;
  previewPhoto: null;
};

export type LicensePlate = {
  id: string;
  autoHouseId: string;
  vehicleId: string;
  currentDriveId: string | null;
  number: string;
  notes: string | null;
  createdAt: string; // ISO
  updatedAt: string; // ISO
  deletedAt: string | null;
  vehicle?: LicensePlateEmbeddedVehicle | null;
  currentDrive: unknown | null;
};

export type ServiceInfo = {
  lastTechnicalService: string | null;
  newTechnicalService: boolean;
  lastBeltService: string | null;
  generalInspection: string | null;
  warrantyDuration: number | null;
  warrantyMileage: number | null;
  checkbook: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type TechnicalData = {
  engine: string | null;
  engineVolume: number | null;
  horsepower: string | null; // e.g. "200 hp"
  power: number | null;
  powerUnit: string | null;
  torque: string | null;
  fuel: string | null;
  transmission: string | null;
  drivetrain: string | null;
  modelYear: number | null;
  gears: number | null;
  doors: number | null;
  seats: number | null;
  cylinders: number | null;
  driveSide: string | null;
  tires: string | null;
  rimSize: string | null;
  width: number | null;
  height: number | null;
  length: number | null;
  createdAt: string;
  updatedAt: string;
};

export type Consumption = {
  consumption: number | null;
  urban: number | null;
  extraUrban: number | null;
  combined: number | null;
  batteryRange: number | null;
  emissionClass: string | null;
  emissionCo2Liquid: number | null;
  emissionCo2LiquidWltp: number | null;
  emissionNox: number | null;
  batteryOwnership: string | null;
  batteryCertificate: boolean | null;
  batteryChargingDC: number | null;
  batteryChargingAC: number | null;
  batteryChargingACType: string | null;
  hasRangeExtender: boolean | null;
  fuelTankCapacity: number | null;
  createdAt: string;
  updatedAt: string;
};

export type PaintingAndInterior = {
  id: string;
  vehicleId: string;
  color: string | null;
  interiorMaterial: string | null;
  interiorColor: string | null;
  paintType: string | null;
  createdAt: string;
  updatedAt: string;
};

export type EquipmentItemTranslation = {
  id: string;
  equipmentItemId: string;
  name: string;
  language: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type VehicleEquipmentItemLink = {
  vehicleId: string;
  equipmentItemId: string;
  createdAt: string;
  updatedAt: string;
};

export type EquipmentItem = {
  id: string;
  equipmentGroupId: string;
  name: string;
  description: string | null;
  createdAt: string;
  parentId: string | null;
  updatedAt: string;
  deletedAt: string | null;
  vehicleEquipmentItem: VehicleEquipmentItemLink;
  translations: EquipmentItemTranslation[];
};

export type SoldTo = {
  id: string;
  autoHouseId: string;
  companyName: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  city: string | null;
  country: string | null;
  postalCode: string | null;
  vatNumber: string | null;
  mobile: string | null;
  website: string | null;
  notes: string | null;
  bank: string | null;
  iban: string | null;
  bic: string | null;
  birthday: string | null; // "Invalid date" shows up; keep as string
  salutation: string | null;
  number: string | null;
  licenseNumber: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

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
  bodyType: string | null;

  // Technical info
  vin: string | null;
  engineNumber: string | null;
  nationalCode: string | null;
  hsn: string | null;
  tsn: string | null;

  // Registration & status
  category: string;
  status: string;
  licensePlate: LicensePlate | null;

  // Dates
  arrivedAt: string | null;
  firstRegistration: string;
  productionDate: string | null;
  deliveryDate: string | null;
  purchaseDate: string | null;
  soldAt: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;

  // Mileage & ownership
  mileage: number | null;
  previousOwners: number | null;

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
  previewPhotoId: string | null;
  previewPhoto: {
    url: string;
    thumbnailUrl: string;
    id: string;
    position: number;
    fileName: string;
    vehicleId: string;
  } | null;

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
  investments: Investment[];
  investmentsSum: number;

  // UI helpers
  standDays: number;
  sortColumn: string | null;

  // Detail-only sections
  service?: ServiceInfo;
  technicalData?: TechnicalData;
  consumption?: Consumption;
  paintingAndInterior?: PaintingAndInterior;
  equipmentItems?: EquipmentItem[];
  purchasedFrom?: unknown | null;
  soldTo?: SoldTo | null;
  purchaseCategory?: unknown | null;
  exports?: unknown[];
};

export type VehiclesResponse = {
  count: number;
  results: Vehicle[];
  // Pagination fields are client-side in our app; keep optional
  hasNextPage?: boolean;
  nextPage?: number;
  currentPage?: number;
};

export type VehicleItemCard = Pick<
  Vehicle,
  | "id"
  | "make"
  | "model"
  | "seriesName"
  | "previewPhoto"
  | "retailPrice"
  | "prices"
  | "typeName"
  | "generation"
  | "mileage"
  | "firstRegistration"
>;

export type VehicleFilters = {
  make?: string;
  model?: string;
  bodyType?: string;
  category?: string;
  priceFrom?: string;
  priceTo?: string;
  mileageFrom?: string;
  mileageTo?: string;
};

export type VehiclePhoto = {
  url: string;
  thumbnailUrl: string;
  id: string;
  vehicleId: string;
  fileName: string;
  originalName: string;
  size: number;
  position: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type VehiclePhotosResponse = VehiclePhoto[];

export type VehicleEquipmentItem = {
  id: string;
  equipmentGroupId: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type VehicleEquipmentResponse = {
  items: VehicleEquipmentItem[];
};
