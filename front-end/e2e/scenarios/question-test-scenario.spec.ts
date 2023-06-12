import {test, expect} from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { AppFixture } from 'src/app/app-fixtures';

test.describe('Test de création de question', () => {
  test('should display the home page', async ({ page }) => {
    await page.goto(testUrl);

    const pageTitle = await page.getByRole('heading', { name: 'Welcome to the Angular Tour of Heroes!' });

    expect(pageTitle).not.toBeVisible();
  });
});
