import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must have at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .optional()
    .refine(
      (value) => !value || /^[+]?[\d\s\-()]{6,20}$/.test(value),
      "Enter a valid phone number"
    ),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export type FormData = z.infer<typeof contactSchema>;
