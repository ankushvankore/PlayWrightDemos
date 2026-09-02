import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationplayground.com/crm/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'New Customer' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('sarjerao');
  await page.getByRole('textbox', { name: 'Enter email' }).press('Tab');
  await page.getByRole('textbox', { name: 'First Name' }).fill('patil');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('sarjerao@gmail.com');
  await page.getByRole('textbox', { name: 'Enter email' }).press('Tab');
  await page.getByRole('textbox', { name: 'First Name' }).fill('sarjerao');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('patil');
  await page.getByRole('textbox', { name: 'Last Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'City' }).fill('kolhapur');
  await page.getByRole('textbox', { name: 'City' }).press('Tab');
  await page.getByLabel('State').selectOption('IN');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
});