import {test, expect, selectors} from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';

test.describe('Tests de partie', () => {
  test('should display the popup', async ({ page }) => {
    await page.goto(testUrl);
    await page.getByRole('button', { name: 'Jouer' }).click();
    await page.locator('app-user').filter({ hasText: 'ArnaudDumanois' }).getByRole('button', { name: 'Sélectionner' }).click();
    await page.locator('app-quiz').filter({ hasText: 'Quiz de Arnaud' }).getByRole('button', { name: 'Choisir' }).click();
    for(let i = 0; i < 100; i++){//activer la detection de l'agressivité
      await page.getByRole('button',{name:"Passer la question"}).click();
    }
    await expect(page.getByText('Voulez-vous continuer le Quiz')).toBeVisible();//la popup a du s'afficher
    await page.getByRole('button',{name:'Continuer'}).click();
    await expect(page.getByText('est le plus')).toBeVisible();// on revient sur la question
    await page.waitForTimeout(250);
    await page.getByRole('button',{name:"Arnaud"}).click();//bonne réponse
    await expect(page.getByText('Combien font')).toBeVisible();//la question suivantes est la facile
    





  });
});
