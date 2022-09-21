import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://10minutemail.com/
  await page.goto('https://10minutemail.com/');

  // Get email
  const email = await page.locator('input#mail_address').inputValue()

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click [placeholder="Your name"]
  await page.locator('[placeholder="Your name"]').click();

  const rnd: string = String(Math.floor(Math.random() * 1000))

  // Fill [placeholder="Your name"]
  await page.locator('[placeholder="Your name"]').fill('test ' + rnd);

  // Click [placeholder="Your email"]
  await page.locator('[placeholder="Your email"]').click();

  // Fill [placeholder="Your email"]
  await page.locator('[placeholder="Your email"]').fill(email);

  // Press Tab
  await page.locator('[placeholder="Your email"]').press('Tab');

  // Fill textarea[name="message"]
  await page.locator('textarea[name="message"]').fill('test ' + rnd);

  // Click text=Send
  await page.locator('text=Send').click();

  // Click text=Message sent!
  await expect(page.locator('.Toastify__toast--success')).toBeVisible();

});