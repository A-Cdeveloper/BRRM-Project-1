export type AuthResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    permissions: string[];
    autoHouses: Array<{
      id: string;
      fullName: string;
      shortName: string;
    }>;
  };
};

export type TokenCache = {
  token: string;
  expiresAt: number;
  autoHouseId: string;
};
