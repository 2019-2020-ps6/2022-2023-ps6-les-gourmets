import {test, expect, selectors} from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { AppFixture } from 'src/app/app-fixtures';

test.describe('Test de création de question', () => {
  test('should create a question', async ({ page }) => {
    await page.goto(testUrl);
    const appComponentFixture = new AppFixture(page);

    await appComponentFixture.clickOnCreerButton();
    await appComponentFixture.clickOnQuestionButton();
    await appComponentFixture.clickOnAjouterQuestionButton();
    await appComponentFixture.clickOnAjouterQuestionTestButton();

    selectors.setTestIdAttribute('id');
    await page.getByTestId('label').fill('Question de test');
    await page.getByTestId('theme').fill('Theme test');
    await page.getByRole('button', {name: 'Ajouter'}).click();
    await page.getByTestId('name1').fill('Reponse 1 test');
    await page.getByTestId('name2').fill('Reponse 2 test');
    await page.getByTestId('name3').fill('Reponse 3 test');
    await page.getByTestId('name4').fill('Reponse 4 test');
    await page.getByTestId('Choice1').check();
    await page.getByTestId('estFacile').check();
    await page.getByRole('button', {name: 'Créer'}).click();

    const questionTest = await page.getByText('Question de test(facile)').first();
    expect(questionTest).toBeVisible();
    await page.getByRole('button', {name: 'Supprimer'}).click();
    expect(questionTest).not.toBeVisible();

  });
});
