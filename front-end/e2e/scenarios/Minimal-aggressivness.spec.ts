import {test, expect} from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';

test.describe('Minimal Aggressivness Personna', () => {
    var initialStats = {
        tpsMoyen:-1,
        nbFail:-1,
        questionsRate: [-1],
        nbSuccess : -1
    };

    test('check stats Before', async({page})=>{
        console.log("CheckStatsBefore");
        await page.goto(testUrl);
        await page.getByRole('button',{name:'Créer'}).click();
        await page.getByRole('button',{name:'Profil'}).click();
        await page.locator('app-user').filter({ hasText: 'ArnaudDumanois' }).getByRole('button', { name: 'Éditer' }).click();
        await page.getByRole('button',{name:'Stats'}).click();
        // Récupération du texte de la cellule (2ème colonne, 2ème ligne)
        const tableRows = await page.$$('table p');
        const contents = [];

        for (const row of tableRows) {
            const rowContent = await row.textContent();
            contents.push(rowContent??"0");
        }
        if(contents!=null){
            const val1 = Number.parseFloat( contents[0]);
            const val2 = Number.parseFloat( contents[1]);
            const val3 = Number.parseFloat( contents[2]);
            initialStats.questionsRate = [val1,val2,val3];
            initialStats.nbSuccess = Number.parseInt(contents[3]);
            initialStats.nbFail = Number.parseInt(contents[4]);
            initialStats.tpsMoyen = Number.parseFloat(contents[5]);
            
            console.log(initialStats);
            return;
            
        }
        expect(false,"Stats failed");
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

    /*test('disable the music',async ({page}) =>{
        await page.goto(testUrl);
        const PanelButton = await page.locator('[data-test-id="musicPanelButton"]');
        await PanelButton.click();
        await page.waitForTimeout(3000);
        await PanelButton.click();
        await page.waitForTimeout(3000);
        // Accès au service AudioService
        JouerService.isAudioPlaying();

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
        await page.click('css=#musicPanelButton');

    });*/
    test('check stats after',async ({page}) => {
        console.log("CheckStatsAfter");
        if(initialStats.tpsMoyen == -1) expect(false);
        await page.goto(testUrl);
        await page.getByRole('button',{name:'Créer'}).click();
        await page.getByRole('button',{name:'Profil'}).click();
        await page.locator('app-user').filter({ hasText: 'ArnaudDumanois' }).getByRole('button', { name: 'Éditer' }).click();
        await page.getByRole('button',{name:'Stats'}).click();
        await expect(page.getByText('qui est le plus moche ?')).toBeVisible();
        const contents = [];
        const tableRows = await page.$$('table p');

        for (const row of tableRows) {
            const rowContent = await row.textContent();
            contents.push(rowContent??"0");
        }
        console.log(initialStats)
        console.log(initialStats.questionsRate[0]+" != "+ Number.parseFloat(contents[0]));
        await expect(initialStats.questionsRate[0]).not.toBe(Number.parseFloat(contents[0]));
        
        console.log(initialStats.questionsRate[1]+" != "+ Number.parseFloat(contents[1]));
        await expect(initialStats.questionsRate[0]).not.toBe(Number.parseFloat(contents[1]));
        
        console.log(initialStats.questionsRate[2]+" != "+ Number.parseFloat(contents[2]));
        await expect(initialStats.questionsRate[0]).not.toBe(Number.parseFloat(contents[2]));
        
        console.log((initialStats.nbFail+initialStats.nbSuccess+1)+" != "+ Number.parseInt(contents[3])+Number.parseInt(contents[4]));
        await expect(initialStats.nbFail+initialStats.nbSuccess+1).toBe(Number.parseInt(contents[3])+Number.parseInt(contents[4]));
        
        console.log(initialStats.tpsMoyen+" != "+ Number.parseFloat(contents[5]));
        await expect(initialStats.tpsMoyen).not.toBe(Number.parseFloat(contents[5]));
    });
})