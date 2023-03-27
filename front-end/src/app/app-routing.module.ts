import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListeQuizPage } from './Components/Quizs/ListeQuizPage/ListeQuizPage.component';
import { ListeUserPage } from './Components/Users/UserListPage/ListeUserPage.component';
import { GamePageComponent } from './Components/Jouer/GamePage/GamePageComponent.component';
import { MenuComponent } from './Components/Menu/MenuComponents/Menu.component';
import { MenuChoixCreation } from './Components/Menu/MenuChoixCreationComponent/MenuChoixCreation.component';
import { QuizFormComponent } from './Components/Quizs/QuizForm/QuizForm.component';
import { QuestionFormComponent } from './Components/Questions/QuestionForm/QuestionForm.component';
import { ListeQuestionPage } from './Components/Questions/ListeQuestionPage/ListeQuestionPage.component';
import { UserProfilePage } from './Components/Users/UserProfilePage/UserProfilePage.component';
import { UserStatsPage } from './Components/Users/UserStatsPage/UserStatsPage.component';
import { UserForm } from './Components/Users/UserForm/UserForm.component';
import { ChoixUser } from './Components/Jouer/ChoixUser/ChoixUser.component';

const routes: Routes = [
  { path: '', redirectTo: '/Menu', pathMatch: 'full' },
  { path: 'Menu', component: MenuComponent },
  { path: 'MenuChoixCreation', component:MenuChoixCreation},

  { path: 'GamePageComponent', component: GamePageComponent },

  { path: 'ListeUserPage', component: ListeUserPage },
  { path: 'UserForm', component:UserForm},
  { path: 'UserProfilePage', component: UserProfilePage },
  { path: 'UserStatsPage', component: UserStatsPage },

  { path: 'ListeQuizPage', component: ListeQuizPage },
  { path: 'QuizForm', component: QuizFormComponent },

  { path: 'QuestionForm', component: QuestionFormComponent },
  { path: 'ListeQuestionPage', component: ListeQuestionPage },
  { path: 'ChoixUser', component: ChoixUser }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
