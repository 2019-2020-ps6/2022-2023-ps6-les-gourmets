import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListeQuizPage } from './Components/Quizs/ListeQuizPage/ListeQuizPage.component';
import { ListeUserPage } from './Components/Users/UserListPage/ListeUserPage.component';
import { GamePageComponent } from './Components/Quizs/GamePage/GamePageComponent.component';
import { MenuComponent } from './Components/Menu/MenuComponents/Menu.component';
import { MenuChoixCreation } from './Components/Menu/MenuChoixCreationComponent/MenuChoixCreation.component';
import { QuizFormComponent } from './Components/Quizs/QuizForm/QuizForm.component';
import { QuestionFormComponent } from './Components/Questions/QuestionForm/QuestionForm.component';
import { ListeQuestionPage } from './Components/Questions/ListeQuestionPage/ListeQuestionPage.component';

const routes: Routes = [
  { path: 'ListeQuizPage', component: ListeQuizPage },
  { path: '', redirectTo: '/Menu', pathMatch: 'full' },
  { path: 'ListeUserPage', component: ListeUserPage },
  { path: 'GamePageComponent', component: GamePageComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'MenuChoixCreation', component:MenuChoixCreation},
  { path: 'QuizForm', component: QuizFormComponent },
  { path: 'QuestionForm', component: QuestionFormComponent },
  { path: 'ListeQuestionPage', component: ListeQuestionPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
