import {test, expect} from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';

test.describe('Tests de partie', () => {
  test('should display the popup', async ({ page }) => {
    await page.goto(testUrl);

  });
});
