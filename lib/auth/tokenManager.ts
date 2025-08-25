import "server-only";
import { decodeJwt } from "jose";
import type { AuthResponse, TokenCache } from "@/types";

let tokenCache: TokenCache | null = null;

async function performLogin(): Promise<{ token: string; autoHouseId: string }> {
  const baseUrl = process.env.API_BASE_URL;
  const email = process.env.AUTH_EMAIL;
  const password = process.env.AUTH_PASSWORD;

  if (!baseUrl || !email || !password) {
    throw new Error(
      "Missing API_BASE_URL, AUTH_EMAIL or AUTH_PASSWORD env vars"
    );
  }

  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Login failed: ${response.status}`);
  }

  const data: AuthResponse = await response.json();
  const autoHouseId = data.user?.autoHouses?.[0]?.id;
  if (!autoHouseId) {
    throw new Error("No autoHouseId available for this user");
  }

  return { token: data.token, autoHouseId };
}

function decodeJWT(token: string): { exp: number } {
  try {
    const decoded = decodeJwt(token);
    return decoded as { exp: number };
  } catch {
    throw new Error("Invalid JWT token");
  }
}

export async function getAuthToken(): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const bufferTime = 60; // 60 seconds buffer

  if (tokenCache && tokenCache.expiresAt > now + bufferTime) {
    return tokenCache.token;
  }

  try {
    const { token, autoHouseId } = await performLogin();
    const decoded = decodeJWT(token);

    tokenCache = {
      token,
      autoHouseId,
      expiresAt: decoded.exp,
    };

    return token;
  } catch (error) {
    console.error("Failed to get auth token:", error);
    throw error;
  }
}

export function getAutoHouseId(): string {
  if (!tokenCache?.autoHouseId) {
    throw new Error("autoHouseId not initialized. Ensure login succeeded.");
  }
  return tokenCache.autoHouseId;
}

export function clearTokenCache(): void {
  tokenCache = null;
}
