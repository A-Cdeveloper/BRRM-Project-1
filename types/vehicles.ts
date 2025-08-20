// types.ts
export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
  fuel: "Dizel" | "Benzin" | "Hibrid" | "Električni";
  transmission: "Automatik" | "Manuelni";
  mileage: number;
  image: string;
};
