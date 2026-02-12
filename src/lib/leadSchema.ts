import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(1).max(60),
  objective: z.string().trim().min(1).max(120),
  budget: z.string().trim().max(120).optional().or(z.literal("")),
  timeline: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(6000),
});

export type LeadInput = z.infer<typeof leadSchema>;
