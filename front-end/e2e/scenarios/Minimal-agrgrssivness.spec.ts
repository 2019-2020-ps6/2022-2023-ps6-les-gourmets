import {test, expect} from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { JouerService } from 'src/service/jouer.service';

test.describe('Minimal Aggressivness Personna', () => {
    var initialStats = {
        tpsMoyen:-1,
        sucessRate:-1,
        questionsRate: [-1]
    };

    test('check stats Before', async({page})=>{
        await page.goto(testUrl);
        await page.getByRole('button',{name:'Créer'}).click();
        await page.getByRole('button',{name:'Profil'}).click();
        await page.getByRole('button',{name:'Éditer'}).click();
        await page.getByRole('button',{name:'Stats'}).click();
        // Récupération du texte de la cellule (2ème colonne, 2ème ligne)
        const contents = await page.getByRole('table').allInnerTexts();
        console.log("coucou");
        console.log(contents);
        await page.waitForTimeout(10000);
        if(contents!=null){
            const val1 = Number.parseInt( contents[3]);
            console.log(val1);
            // Récupération du texte de la cellule (2ème colonne, 3ème ligne)
            const val2 = Number.parseInt( contents[5]);
            console.log(val2);
            // Récupération du texte de la cellule (2ème colonne, 4ème ligne)
            const val3 = Number.parseInt( contents[7]);
            console.log(val3);

            initialStats.questionsRate = [val1,val2,val3];
            console.log(initialStats.questionsRate);
            await page.waitForTimeout(10000);
            await expect(true,"Stats Success");
            return;
            
        }
        await expect(false,"Stats failed");
    })

    test('play a quiz', async ({ page }) => {
        await page.goto(testUrl);
        await page.getByRole('button', {name: 'Jouer'}).click();
        await page.locator('app-user').filter({ hasText: 'ArnaudDumanois' }).getByRole('button', { name: 'Sélectionner' }).click();
        await page.locator('app-quiz').filter({ hasText: 'Quiz de Arnaud' }).getByRole('button', { name: 'Choisir' }).click();
        for(let i =0;i<3;i++){
            if(await page.getByText("Combien font 2+2 ?").isVisible()) await page.getByRole('button', {name: '4'}).click();
            else await page.getByRole('button', {name: 'Arnaud'}).click();
        }
        await expect(page.getByRole('button',{name: 'Refaire le Quiz'})).toBeVisible()
        await expect(page.getByRole('button',{name: 'Choisir un autre quiz'})).toBeVisible()
        await expect(page.getByRole('button',{name: 'Afficher les réponses'})).toBeVisible()

    });

    test('disable the music',async ({page}) =>{
        await page.goto(testUrl);
        const PanelButton = await page.locator('[data-test-id="musicPanelButton"]');
        await PanelButton.click();
        await page.waitForTimeout(3000);
        await PanelButton.click();
        await page.waitForTimeout(3000);
        // Accès au service AudioService
        JouerService.

        // Vérification de l'état de lecture de l'audio
        const isPlaying = audioService.isAudioPlaying();

        if (isPlaying) {
        console.log('Un son est en cours de lecture.');
        // Effectuer des actions supplémentaires en fonction de la présence de sons
        }
        /*await page.locator('css=[data-test-id="musicPanelButton"]').click();
        // Sélectionnez le premier input
        const firstInput = await page.waitForSelector('css=#musicPanel input[type="checkbox"]:nth-of-type(1)');
        // Cliquez sur le premier input
        await page.click('button:below-of(getText)');
        await firstInput.click();
        // Sélectionnez le deuxième input
        const secondInput = await page.waitForSelector('css=#musicPanel input[type="checkbox"]:nth-of-type(2)');
        // Cliquez sur le deuxième input
        await secondInput.click();
        // Cliquez à nouveau sur le bouton #musicPanelButton
        await page.click('css=#musicPanelButton');*/

    });
    test('check stats',async ({page}) => {
        if(initialStats.tpsMoyen == -1)
        await page.goto(testUrl);
        await page.getByRole('button',{name:'Créer'}).click();
        await page.getByRole('button',{name:'Profil'}).click();
        await page.getByRole('button',{name:'Éditer'}).click();
        await page.getByRole('button',{name:'Stats'}).click();
        await expect(page.getByText('qui est le plus moche ?')).toBeVisible();
    });


})