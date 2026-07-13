import { z, defineCollection } from 'astro:content';

const brandCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(99),
    icon: z.string().optional(),
  }),
});

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = {
  brand: brandCollection,
  guides: guidesCollection,
};
