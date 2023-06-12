import { E2EComponentFixture } from "e2e/e2e-component.fixture";

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


}
