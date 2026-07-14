import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  site: 'https://design.aogim.org',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [
    mdx(),
    tailwind(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('fuse.js')) return 'fuse';
          },
        },
      },
    },
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'script',
        includeAssets: ['favicon.svg', 'og-image.svg'],
        manifest: {
          name: 'AOGIM Design System',
          short_name: 'AOGIM Design',
          description: 'Uma Igreja. Uma Família. Um Lugar de Transformação.',
          theme_color: '#d68020',
          background_color: '#0d0d12',
          display: 'standalone',
          icons: [
            {
              src: '/favicon.svg',
              sizes: 'any',
              type: 'image/svg+xml',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,webp,woff2,json}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-css',
                expiration: { maxEntries: 10, maxAgeSeconds: 86400 },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-files',
                expiration: { maxEntries: 20, maxAgeSeconds: 2592000 },
              },
            },
          ],
        },
      }),
    ],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
