import {test, expect, selectors} from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';

test.describe('Tests de partie', () => {
  test('should display the popup and then play the easy questions', async ({ page }) => {
    await page.goto(testUrl);
    await page.getByRole('button', { name: 'Jouer' }).click();
    await page.locator('app-user').filter({ hasText: 'ArnaudDumanois' }).getByRole('button', { name: 'Sélectionner' }).click();
    await page.locator('app-quiz').filter({ hasText: 'Quiz de Arnaud' }).getByRole('button', { name: 'Choisir' }).click();



  
  

  
    for(let i = 0; i < 12; i++){
      await page.getByRole('button', { name: 'Passer la question' }).click();
      await page.waitForTimeout(2500);
    }
    await expect(page.getByText('Voulez-vous continuer le Quiz')).not.toBeVisible();//la popup a du ne pas s'afficher


    await page.waitForTimeout(6000);//on reset l'agressivité
    for(let i = 0; i < 12; i++){
      await page.getByRole('button', { name: 'Passer la question' }).click();
    }

    await expect(page.getByText('Voulez-vous continuer le Quiz')).toBeVisible();//la popup a du s'afficher
    await page.getByRole('button',{name:'Continuer'}).click();
    await expect(page.getByText('est le plus')).toBeVisible();// on revient sur la question
    //await page.waitForTimeout(250);
    await page.getByRole('button',{name:"Arnaud"}).click();//bonne réponse

    await expect(page.getByText('Combien font')).toBeVisible();//la question suivante est la facile
    //attendre que le boutton continuer soit visible
    await page.waitForTimeout(15000);
    await expect(page.getByText('Voulez-vous continuer le Quiz')).toBeVisible();//la popup a du s'afficher
    await page.getByRole('button',{name:'Arrêter'}).click();
    await expect(page.getByText('Liste Quiz')).toBeVisible();//on est revenu sur la page des quiz

  });

  test('should wait more display popup', async ({ page }) => {//on teste la popup avec un profil moins aggressif
    await page.goto(testUrl);
    await page.getByRole('button', { name: 'Jouer' }).click();
    await page.locator('app-user').filter({ hasText: 'TimothéeJuillet' }).getByRole('button', { name: 'Sélectionner' }).click();
    await page.locator('app-quiz').filter({ hasText: 'Quiz de Arnaud' }).getByRole('button', { name: 'Choisir' }).click();


  
    for(let i = 0; i < 12; i++){
      await page.getByRole('button', { name: 'Passer la question' }).click();
    }

    await expect(page.getByText('Voulez-vous continuer le Quiz')).toBeVisible();//la popup a du s'afficher parce que agressivité différente
    await page.getByRole('button',{name:'Continuer'}).click();

    await page.waitForTimeout(17000);
    await expect(page.getByText('Voulez-vous continuer le Quiz')).not.toBeVisible();//la popup a du s'afficher

  });






});

