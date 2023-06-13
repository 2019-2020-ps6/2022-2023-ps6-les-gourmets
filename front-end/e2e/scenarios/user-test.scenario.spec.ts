import { test, expect, selectors } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { AppFixture } from 'src/app/app-fixtures';


test.describe('Test d\'édition des user', () => {
  test('should modify the user name and aggressiveness', async ({ page }) => {
    await page.goto(testUrl);
    const appComponentFixture = new AppFixture(page);
  
    await appComponentFixture.goToProfilForm();


    await page.locator('#name').fill('UserNameTest');
    await page.locator('#surname').fill('UserSurnameTest');
  
    await page.getByRole('button', { name: 'Créer' }).click();

  
    await page.getByRole('button', { name: 'confirmer les changements' }).click();

    selectors.setTestIdAttribute('id');
  


    
    await page.getByRole('button', { name: 'Éditer' }).first().click();
    
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
    expect(userTest).toBeVisible();
    const userTest2 = await page.getByText('Taux d\'agressivité : 1SupprimerÉditer');
    expect(userTest2).toBeVisible();
    
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

