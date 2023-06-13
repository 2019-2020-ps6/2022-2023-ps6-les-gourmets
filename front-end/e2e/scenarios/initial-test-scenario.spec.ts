import {test, expect} from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';

test.describe('Initial Test Scenario', () => {
  test('should display the home page', async ({ page }) => {
    await page.goto(testUrl);

    const pageTitle = await page.getByRole('heading', { name: 'Welcome to the Angular Tour of Heroes!' });

    expect(pageTitle).not.toBeVisible();
  });
});
