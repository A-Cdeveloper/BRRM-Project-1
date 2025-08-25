import { z } from "zod";

// Schema za environment varijable
const envSchema = z.object({
  API_BASE_URL: z.string().url("API_BASE_URL must be valid URL"),
  AUTH_EMAIL: z.string().email("AUTH_EMAIL must be valid email"),
  AUTH_PASSWORD: z.string().min(1, "AUTH_PASSWORD is required"),
  BASE_URL: z.string().url("BASE_URL must be valid URL"),
});

// Validacija environment varijabli
export const env = envSchema.parse(process.env);
