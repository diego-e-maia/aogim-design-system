import { test, expect } from '@playwright/test';

test.describe('Component Pages', () => {
  const components = [
    '/componentes/botoes',
    '/componentes/cards',
    '/componentes/callouts',
    '/componentes/badges',
    '/componentes/formularios',
    '/componentes/modais',
    '/componentes/accordion',
    '/componentes/tabs',
    '/componentes/tooltip',
  ];

  for (const path of components) {
    test(`${path} loads and has code blocks`, async ({ page }) => {
      await page.goto(path);
      const pre = page.locator('pre');
      const count = await pre.count();
      expect(count).toBeGreaterThanOrEqual(1);
    });
  }
});

test.describe('PWA', () => {
  test('service worker is registered', async ({ page }) => {
    await page.goto('/');
    const sw = await page.evaluate(() => navigator.serviceWorker?.getRegistration());
    expect(sw).toBeDefined();
  });

  test('web manifest exists', async ({ page }) => {
    await page.goto('/');
    const manifest = page.locator('link[rel="manifest"]');
    await expect(manifest).toHaveAttribute('href', '/manifest.webmanifest');
  });
});

test.describe('EN Pages', () => {
  const pages = ['/en/', '/en/fundamentos', '/en/componentes', '/en/recursos', '/en/templates', '/en/guias'];

  for (const path of pages) {
    test(`${path} loads in English`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    });
  }
});

test.describe('ES Pages', () => {
  const pages = ['/es/', '/es/fundamentos', '/es/componentes', '/es/recursos', '/es/templates', '/es/guias'];

  for (const path of pages) {
    test(`${path} loads in Spanish`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    });
  }
});
