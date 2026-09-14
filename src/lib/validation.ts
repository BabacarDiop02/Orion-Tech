import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(120),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Email invalide"),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  projectType: z.string().trim().max(60).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message trop court").max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;
