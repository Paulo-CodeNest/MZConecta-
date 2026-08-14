import {z} from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  password: z.string().min(8),
  role: z.enum(['COMPANY','CREATOR'])
});

export const campaignSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  objective: z.string(),
  budget: z.coerce.number().positive(),
  startDate: z.string(),
  endDate: z.string(),
  location: z.string().optional(),
  platforms: z.array(z.string()).min(1),
  creatorCount: z.coerce.number().int().positive(),
  briefing: z.string().optional()
});