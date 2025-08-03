import {z} from 'zod';
export const mediaSchema = z.object({
  title: z.string().min(1),
  type: z.string().min(1),
  director: z.string().min(1),
  budget: z.number().optional(),
  location: z.string().optional(),
  duration: z.number().optional(),
  year: z.number().optional(),
});
export type Media = z.infer<typeof mediaSchema>;
export const mediaUpdateSchema = mediaSchema.extend({
  id: z.number(),
});
export type MediaUpdate = z.infer<typeof mediaUpdateSchema>;

