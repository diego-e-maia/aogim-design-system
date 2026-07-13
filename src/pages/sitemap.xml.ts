import { getCollection } from 'astro:content';

interface Route {
  path: string;
  changefreq?: string;
  priority?: string;
}

const pages: Route[] = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/fundamentos', priority: '0.9', changefreq: 'weekly' },
  { path: '/componentes', priority: '0.9', changefreq: 'weekly' },
  { path: '/guias', priority: '0.8', changefreq: 'weekly' },
  { path: '/recursos', priority: '0.8', changefreq: 'weekly' },
  { path: '/recursos/downloads', priority: '0.7', changefreq: 'monthly' },
  { path: '/recursos/biblioteca', priority: '0.7', changefreq: 'monthly' },
  { path: '/recursos/holyrics', priority: '0.7', changefreq: 'monthly' },
  { path: '/recursos/obs', priority: '0.7', changefreq: 'monthly' },
  { path: '/templates', priority: '0.8', changefreq: 'weekly' },
  { path: '/templates/paginas', priority: '0.6', changefreq: 'monthly' },
  { path: '/templates/posts', priority: '0.6', changefreq: 'monthly' },
  { path: '/templates/eventos', priority: '0.6', changefreq: 'monthly' },
];

const componentes = [
  'botoes', 'cards', 'callouts', 'badges', 'formularios', 'modais', 'accordion', 'tabs', 'tooltip',
];

for (const slug of componentes) {
  pages.push({ path: `/componentes/${slug}`, priority: '0.8', changefreq: 'monthly' });
}

const localePaths = [
  '/fundamentos', '/guias', '/componentes', '/recursos',
  '/recursos/downloads', '/recursos/biblioteca', '/recursos/holyrics', '/recursos/obs',
  '/templates', '/templates/paginas', '/templates/posts', '/templates/eventos',
];

for (const p of localePaths) {
  pages.push({ path: `/en${p}`, priority: '0.8', changefreq: 'weekly' });
  pages.push({ path: `/es${p}`, priority: '0.8', changefreq: 'weekly' });
}
pages.push({ path: '/en', priority: '1.0', changefreq: 'weekly' });
pages.push({ path: '/es', priority: '1.0', changefreq: 'weekly' });

const brandCollections = ['brand', 'brand-en', 'brand-es'];
for (const collection of brandCollections) {
  const entries = await getCollection(collection);
  const prefix = collection === 'brand' ? '' : `/${collection.replace('brand-', '')}`;
  for (const entry of entries) {
    pages.push({ path: `${prefix}/fundamentos/${entry.slug}`, priority: '0.8', changefreq: 'monthly' });
  }
}

const guideCollections = ['guides', 'guides-en', 'guides-es'];
for (const collection of guideCollections) {
  const entries = await getCollection(collection);
  const prefix = collection === 'guides' ? '' : `/${collection.replace('guides-', '')}`;
  for (const entry of entries) {
    pages.push({ path: `${prefix}/guias/${entry.slug}`, priority: '0.8', changefreq: 'monthly' });
  }
}

const siteUrl = 'https://design.aogim.org';
const now = new Date().toISOString().split('T')[0];

const urls = pages.map(
  (p) => `  <url>
    <loc>${siteUrl}${p.path}</loc>
    <lastmod>${now}</lastmod>
    ${p.changefreq ? `<changefreq>${p.changefreq}</changefreq>` : ''}
    ${p.priority ? `<priority>${p.priority}</priority>` : ''}
  </url>`
).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

export const GET = () => {
  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
