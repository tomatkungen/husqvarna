import { test } from '@playwright/test';
import { testId } from '../helper';

test.describe('todo app', () => {
  test('should header is visible', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await page.isVisible(testId('header'));
  });

  test('should add todo item', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await page.isVisible(testId('input-add'));
    await page.keyboard.press('A');
    await page.keyboard.press('Enter');
  });
});
