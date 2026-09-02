import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationplayground.com/crm/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('trial@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('trial');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
});