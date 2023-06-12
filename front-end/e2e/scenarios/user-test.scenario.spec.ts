import { test, expect, selectors } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { AppFixture } from 'src/app/app-fixtures';

test.describe('Test de création de question', () => {
  test('should create a user and add a quiz to him', async ({ page }) => {
    await page.goto(testUrl);
    const appComponentFixture = new AppFixture(page);

    await appComponentFixture.goToProfilForm();
    await page.locator('#name').fill('UserNameTest');
    await page.locator('#surname').fill('UserSurnameTest');

    await page.getByRole('button', { name: 'Créer' }).click();
    const sliderTrack = await page.locator('form div').filter({ hasText: 'Agressivité de l\'utilisateur' }).getByRole('slider');
    const sliderOffsetWidth = await sliderTrack.evaluate(el => {
      return el.getBoundingClientRect().width
  });

    await sliderTrack.hover({ force: true, position: { x: 0, y: 0 } })
    await page.mouse.down()
    await sliderTrack.hover({ force: true, position: { x: sliderOffsetWidth, y: 0 } })
    await page.mouse.up()

    await page.getByRole('button', { name: 'confirmer les changements' }).click();

    const userTest = await page.getByText('Taux d\'agressivité : 1SupprimerÉditer');
    expect(userTest).toBeVisible();
    await page.getByRole('button', { name: 'Supprimer' }).first().click();
    expect(userTest).not.toBeVisible();

  });

});
