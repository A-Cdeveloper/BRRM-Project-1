export type CompanyLogo = {
  url: string;
  id: string;
  filename: string;
};

export type AutoHouse = {
  id: string;
  fullName: string;
  shortName: string;
  countryCode: string;
  country: string;
  address: string;
  city: string | null;
  clientGroupId: string;
  email: string | null;
  phone: string | null;
  website: string | null;
  totalCredits: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  logoId: string;
  logo: CompanyLogo;
};

export type AuthResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    phone: string | null;
    lastTimeOnline: string;
    address: string | null;
    permissions: string[];
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    clientGroupId: string | null;
    roles: Array<{
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
      permissions: string[];
    }>;
    autoHouses: AutoHouse[];
  };
};

export type TokenCache = {
  token: string;
  expiresAt: number;
  autoHouseId: string;
};
