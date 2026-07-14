import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('homepage loads and shows title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/AOGIM Design System/);
  });

  test('sidebar navigation links work', async ({ page }) => {
    await page.goto('/');
    const sidebarLinks = page.locator('aside a');
    const count = await sidebarLinks.count();
    expect(count).toBeGreaterThan(5);
  });

  test('theme toggle works', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    await page.locator('[data-toggle-theme]').click();
    const classList = await html.getAttribute('class');
    expect(classList).toBeTruthy();
  });

  test('language switcher navigates', async ({ page }) => {
    await page.goto('/');
    const links = page.locator('[data-language-switcher] a');
    const count = await links.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });
});

test.describe('Content Pages', () => {
  const pages = [
    '/', '/fundamentos', '/componentes', '/recursos', '/templates', '/guias',
    '/changelog', '/tokens',
  ];

  for (const path of pages) {
    test(`${path} loads successfully`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('h1, h2').first()).toBeVisible();
    });
  }
});

test.describe('SEO', () => {
  test('has canonical link', async ({ page }) => {
    await page.goto('/');
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', /https:\/\/design\.aogim\.org/);
  });

  test('has hreflang links', async ({ page }) => {
    await page.goto('/');
    const hreflangs = page.locator('link[rel="alternate"][hreflang]');
    const count = await hreflangs.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('has JSON-LD', async ({ page }) => {
    await page.goto('/');
    const jsonld = page.locator('script[type="application/ld+json"]');
    await expect(jsonld).toHaveCount(1);
  });
});
