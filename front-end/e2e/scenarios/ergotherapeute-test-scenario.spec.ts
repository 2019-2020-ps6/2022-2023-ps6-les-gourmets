import {test, expect, selectors} from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { AppFixture } from 'src/app/app-fixtures';

test.describe('Test de création de question', () => {
  test('should create a question', async ({ page }) => {
    await page.goto(testUrl);
    const appComponentFixture = new AppFixture(page);

    await appComponentFixture.goToQuestionTextForm();

    selectors.setTestIdAttribute('id');
    await page.getByTestId('label').fill('Question de test');
    await page.getByTestId('theme').fill('Theme test');
    await page.getByRole('button', {name: 'Ajouter'}).click();
    await page.getByPlaceholder('réponse 1').fill('Reponse 1 test');
    await page.getByPlaceholder('réponse 2').fill('Reponse 2 test');
    await page.getByPlaceholder('réponse 3').fill('Reponse 3 test');
    await page.getByPlaceholder('réponse 4').fill('Reponse 4 test');
    await page.getByTestId('Choice1').check();
    await page.getByTestId('fillForm').locator('span').click();
    await page.getByRole('button', {name: 'Créer'}).click();

    const questionTest = await page.getByText('Question de test').first();
    await expect(questionTest).toBeVisible();
    await page.locator('app-question').filter({ hasText: 'Question de test ModifierSupprimer' }).getByTestId('SupressButton').click();
    await expect(questionTest).not.toBeVisible();

  });



  test('should create a quiz and add a question to it', async ({ page }) => {
    await page.goto(testUrl);
    const appComponentFixture = new AppFixture(page);
    selectors.setTestIdAttribute('id');


    //await page.getByRole('button', {name: 'Supprimer'}).click();
    //expect(questionTest).not.toBeVisible();

    await page.goto(testUrl);
    await appComponentFixture.goToQuizForm();

    await page.getByTestId('name').fill('Quiz de test');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.locator('app-quiz').filter({ hasText: 'Quiz de test ModifierSupprimer' }).getByRole('button', { name: 'Modifier' }).first().click();
    await page.getByRole('button', { name: 'Ajouter' }).click();

    const questionTestSelect = await page.getByText('qui est le plus moche ?').first();
    await expect(questionTestSelect).toBeVisible();
    await page.getByRole('button', { name: 'Ajouter' }).first().click();
    await page.getByRole('button', { name: 'Retour' }).first().click();
    const questionTestSelected = await page.getByText('qui est le plus moche ?').first();
    await expect(questionTestSelected).toBeVisible();
    await page.getByTestId('SupressButton').click();
    await page.getByRole('button', { name: 'Retour' }).first().click();
    await page.locator('app-quiz').filter({ hasText: 'Quiz de test ModifierSupprimer' }).getByRole('button', { name: 'Supprimer' }).first().click();
  });
});



test.describe('Test de création et d\'édition des user', () => {
    test('should create an user and the modify name and aggressiveness', async ({ page }) => {
      await page.goto(testUrl);
      const appComponentFixture = new AppFixture(page);
  
      await appComponentFixture.goToProfilForm();
  
  
      await page.locator('#name').fill('UserNameTest');
      await page.locator('#surname').fill('Marco');
  
      await page.getByRole('button', { name: 'Créer' }).click();
  
  
      await page.getByRole('button', { name: 'confirmer les changements' }).click();
  
      selectors.setTestIdAttribute('id');
  
  
  
  
      await page.locator('app-user').filter({ hasText: 'Nom : UserNameTest Prénom : Marco Taux d\'agressivité : 0.5SupprimerÉdi' }).getByRole('button', { name: 'Éditer' }).first().click();
  
      await page.getByPlaceholder('UserNameTest').fill('Laclavere');
      const sliderTrack = await page.locator('form div').filter({ hasText: 'Agressivité de l\'utilisateur' }).getByRole('slider');
      const sliderBoundingBox = await sliderTrack.boundingBox();
      if(sliderBoundingBox !=null){
        await sliderTrack.dragTo(sliderTrack,{
          force : true,
          targetPosition : {
            x : sliderBoundingBox.width,
            y:0,
          },
  
        });
      }
  
      await page.getByRole('button', { name: 'confirmer les changements' }).click();
      const userTest = await page.getByText('Marco');
      await expect(userTest).toBeVisible();
      const userTest2 = await page.getByText('Taux d\'agressivité : 1SupprimerÉditer');
      await expect(userTest2).toBeVisible();
      await page.locator('app-user').filter({ hasText: 'Nom : Laclavere Prénom : Marco Taux d\'agressivité : 1SupprimerÉdit' }).getByRole('button', { name: 'Supprimer' }).first().click();
  
    });
  
  });
  
  
  
  
  test.describe('Test d\'ajout d\'un quiz à un user', () => {
  
    test('should add a quiz to the user', async ({ page }) => {
      await page.goto(testUrl);
      const appComponentFixture = new AppFixture(page);
  
      await appComponentFixture.goToProfilForm();

  
      await page.getByRole('button', { name: 'Retour' }).click();

  
      
  
  
      const userTest = await page.getByText('Nom : Laclavere Prénom : Marco Taux d\'agressivité : 1SupprimerÉdit');
      await expect(userTest).toBeVisible();
      await page.locator('app-user').filter({ hasText: 'Nom : Lalavere Prénom : Marco Taux d\'agressivité : 1SupprimerÉdite' }).getByRole('button', { name: 'Supprimer' }).first().click();
      await expect(userTest).not.toBeVisible();
  
    });
  });
  