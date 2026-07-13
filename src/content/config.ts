import { z, defineCollection } from 'astro:content';

const brandSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number().default(99),
  icon: z.string().optional(),
});

const guideSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number().default(99),
});

export const collections = {
  brand: defineCollection({ type: 'content', schema: brandSchema }),
  'brand-en': defineCollection({ type: 'content', schema: brandSchema }),
  'brand-es': defineCollection({ type: 'content', schema: brandSchema }),
  guides: defineCollection({ type: 'content', schema: guideSchema }),
  'guides-en': defineCollection({ type: 'content', schema: guideSchema }),
  'guides-es': defineCollection({ type: 'content', schema: guideSchema }),
};
