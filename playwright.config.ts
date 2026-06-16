import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }], ['list']],

  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'mobile-chrome',
      use: {
        ...devices['Pixel 5'], // 393 × 851, Chrome
      },
    },
    {
      name: 'mobile-safari',
      use: {
        ...devices['iPhone 12'], // 390 × 844, WebKit — 한국 iOS Safari 대응
      },
    },
    {
      name: 'desktop-chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
