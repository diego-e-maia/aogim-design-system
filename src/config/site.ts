export const siteConfig = {
  name: 'AOGIM Design System',
  description: 'Uma Igreja. Uma Família. Um Lugar de Transformação.',
  url: 'https://design.aogim.org',
  ogImage: '/og-image.png',
  author: 'AOGIM',
  version: '1.0.0',
  languages: {
    default: 'pt',
    available: ['pt', 'en', 'es'],
  },
  theme: {
    default: 'dark',
    toggleable: true,
  },
} as const;

export type SiteConfig = typeof siteConfig;
