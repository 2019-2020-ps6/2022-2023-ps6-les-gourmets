import { test, expect, selectors } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { AppFixture } from 'src/app/app-fixtures';


/*test.describe('Test d\'édition des user', () => {
  test('should modify the user name and aggressiveness', async ({ page }) => {
    await page.goto(testUrl);
    const appComponentFixture = new AppFixture(page);

    await appComponentFixture.goToProfilForm();


    await page.locator('#name').fill('UserNameTest');
    await page.locator('#surname').fill('UserSurnameTest');

    await page.getByRole('button', { name: 'Créer' }).click();


    await page.getByRole('button', { name: 'confirmer les changements' }).click();

    selectors.setTestIdAttribute('id');




    await page.locator('app-user').filter({ hasText: 'Nom : UserNameTest Prénom : UserSurnameTest Taux d\'agressivité : 0.5SupprimerÉdi' }).getByRole('button', { name: 'Éditer' }).first().click();

    await page.getByPlaceholder('UserNameTest').fill('UserNameTest2');
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
    const userTest = await page.getByText('UserNameTest2');
    await expect(userTest).toBeVisible();
    const userTest2 = await page.getByText('Taux d\'agressivité : 1SupprimerÉditer');
    await expect(userTest2).toBeVisible();
    await page.locator('app-user').filter({ hasText: 'Nom : UserNameTest2 Prénom : UserSurnameTest Taux d\'agressivité : 1SupprimerÉdit' }).getByRole('button', { name: 'Supprimer' }).first().click();

  });

});




test.describe('Test de création de question', () => {

  test('should create a user and add a quiz to him', async ({ page }) => {
    await page.goto(testUrl);
    const appComponentFixture = new AppFixture(page);

    await appComponentFixture.goToProfilForm();
    await page.locator('#name').fill('UserNameTest');
    await page.locator('#surname').fill('UserSurnameTest');

    await page.getByRole('button', { name: 'Créer' }).click();
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


    const userTest = await page.getByText('Nom : UserNameTest Prénom : UserSurnameTest Taux d\'agressivité : 1SupprimerÉdit');
    await expect(userTest).toBeVisible();
    await page.locator('app-user').filter({ hasText: 'Nom : UserNameTest Prénom : UserSurnameTest Taux d\'agressivité : 1SupprimerÉdite' }).getByRole('button', { name: 'Supprimer' }).first().click();
    await expect(userTest).not.toBeVisible();

  });
});*/

