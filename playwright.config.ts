import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4322',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run build && npx http-server dist --port 4322',
    port: 4322,
    reuseExistingServer: !process.env.CI,
  },
});
