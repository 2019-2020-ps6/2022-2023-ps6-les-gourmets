import {test, expect, selectors} from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';

test.describe('Tests de partie', () => {
  test('should display the popup', async ({ page }) => {
    await page.goto(testUrl);
    await page.getByRole('button', { name: 'Jouer' }).click();
    await page.locator('app-user').filter({ hasText: 'ArnaudDumanois' }).getByRole('button', { name: 'Sélectionner' }).click();

  });
});
