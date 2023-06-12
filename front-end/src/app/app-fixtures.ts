import { E2EComponentFixture } from "e2e/e2e-component.fixture";
import {selectors} from '@playwright/test';


export class AppFixture extends E2EComponentFixture {

  getCreerButton() {
    return this.page.getByRole('button', { name: 'Créer' });
  }

  clickOnCreerButton() {
    return this.getCreerButton().click();
  }

  getQuestionButton() {
    return this.page.getByRole('button', { name: 'Question' });
  }

  clickOnQuestionButton() {
    return this.getQuestionButton().click();
  }

  getAjouterQuestionButton() {
    return this.page.getByRole('button', { name: 'Ajouter une question' });
  }

  clickOnAjouterQuestionButton() {
    return this.getAjouterQuestionButton().click();
  }

  getAjouterQuestionTestButton() {
    return this.page.getByTestId('textanswer');
  }

  clickOnAjouterQuestionTestButton() {
    return this.getAjouterQuestionTestButton().click();
  }

  async goToQuestionTextForm() {
    await this.clickOnCreerButton();
    await this.clickOnQuestionButton();
    await this.clickOnAjouterQuestionButton();
    await this.clickOnAjouterQuestionTestButton();
  }

  ClickOnRetourButton(){
    return this.page.getByRole('button', { name: 'Retour' }).click();
  }

  ClickOnQuizButton(){
    return this.page.getByRole('button', { name: 'Quiz' }).click();
  }

  ClickOnProfilButton(){
    return this.page.getByRole('button', { name: 'Profil' }).click();
  }

  ClickOnAjouterQuizButton(){
    return this.page.getByRole('button', { name: 'Ajouter un quiz' }).click();
  }

  ClickOnAjouterProfilButton(){
    return this.page.getByRole('button', { name: 'Ajouter un profil' }).click();
  }

  async goToQuizForm() {
    await this.clickOnCreerButton();
    await this.ClickOnQuizButton();
    await this.ClickOnAjouterQuizButton();
  }

  async goToProfilForm() {
    await this.clickOnCreerButton();
    await this.ClickOnProfilButton();
    await this.ClickOnAjouterProfilButton();
  }

  async fillQuestionForm(theme: string) {
    await selectors.setTestIdAttribute('id');
    await this.page.getByTestId('label').fill('Question de test');
    await this.page.getByTestId('theme').fill(theme);
    await this.page.getByRole('button', {name: 'Ajouter'}).click();
    await this.page.getByTestId('name1').fill('Reponse 1 test');
    await this.page.getByTestId('name2').fill('Reponse 2 test');
    await this.page.getByTestId('name3').fill('Reponse 3 test');
    await this.page.getByTestId('name4').fill('Reponse 4 test');
    await this.page.getByTestId('Choice1').check();
    await this.page.getByTestId('estFacile').check();
    await this.page.getByRole('button', {name: 'Créer'}).click();

  }

}
