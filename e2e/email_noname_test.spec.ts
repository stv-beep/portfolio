import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://10minutemail.com/
  await page.goto('https://10minutemail.com/');

  // Get email
  const email = await page.locator('input#mail_address').inputValue()

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click [placeholder="Your email"]
  await page.locator('[placeholder="Your email"]').click();

  // Fill [placeholder="Your email"]
  await page.locator('[placeholder="Your email"]').fill(email);

  // Press Tab
  await page.locator('[placeholder="Your email"]').press('Tab');

  const rnd: string = String(Math.floor(Math.random() * 1000))

  // Fill textarea[name="message"]
  await page.locator('textarea[name="message"]').fill('test ' + rnd);

  // Click text=Send
  await page.locator('text=Send').click();

  // Click text=Message sent!
  await expect(page.locator('.Toastify__toast--success')).toBeVisible();

});