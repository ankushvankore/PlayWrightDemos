import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 6 Plus'],
});

test('test', async ({ page }) => {
  await page.goto('https://automationplayground.com/crm/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('demo');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
});

//14-2.10