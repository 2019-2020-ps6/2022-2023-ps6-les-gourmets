import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListeQuizPage } from './Components/Quizs/ListeQuizPage/ListeQuizPage.component';
import { ListeUserPage } from './Components/Users/UserListPage/ListeUserPage.component';
import { EndPageComponent } from './Components/Jouer/EndPage/EndPageComponent.component';
import { MenuComponent } from './Components/Menu/MenuComponents/Menu.component';
import { MenuChoixCreation } from './Components/Menu/MenuChoixCreationComponent/MenuChoixCreation.component';
import { QuizFormComponent } from './Components/Quizs/QuizForm/QuizForm.component';
import { QuestionFormComponent } from './Components/Questions/QuestionForm/QuestionForm.component';
import { ListeQuestionPage } from './Components/Questions/ListeQuestionPage/ListeQuestionPage.component';
import { UserProfilePage } from './Components/Users/UserProfilePage/UserProfilePage.component';
import { UserStatsPage } from './Components/Users/UserStatsPage/UserStatsPage.component';
import { UserForm } from './Components/Users/UserForm/UserForm.component';
import { ChoixUser } from './Components/Jouer/ChoixUser/ChoixUser.component';
import { ChoixQuiz } from './Components/Jouer/ChoixQuiz/ChoixQuiz.component';
import { ListeQuizAdable } from './Components/Users/ListQuizAdable/ListeQuizAdable.component';
import { ChoixTypeQuestion } from './Components/Questions/ChoixTypeQuestion/ChoixTypeQuestion.component';
import { ListeQuestionAdable } from './Components/Quizs/ListQuestionAdable/ListeQuestionAdable.component';
import { QuizEditComponent } from './Components/Quizs/QuizEdit/quizEdit.component';
import { GamePageComponent } from './Components/Jouer/GamePage/GamePageComponent.component';


const routes: Routes = [
  //Menu
  { path: '', redirectTo: '/Menu', pathMatch: 'full' },
  { path: 'Menu', component: MenuComponent },
  { path: 'MenuChoixCreation', component:MenuChoixCreation},

  { path: 'GamePageComponent', component: GamePageComponent },
  { path: 'EndPageComponent', component: EndPageComponent },


  //User
  { path: 'ChoixUser', component: ChoixUser },
  { path: 'ListeUserPage', component: ListeUserPage },
  { path: 'UserForm', component:UserForm},
  { path: 'UserProfilePage', component: UserProfilePage },
  { path: 'UserStatsPage', component: UserStatsPage },


  //Quiz
  { path: 'ChoixQuiz', component: ChoixQuiz },
  { path: 'ListeQuizPage', component: ListeQuizPage },
  { path: 'QuizForm', component: QuizFormComponent },
  { path: 'QuizEditComponent', component: QuizEditComponent },
  { path: 'ListeQuestionAdable', component: ListeQuestionAdable },

  //Question
  { path: 'QuestionForm', component: QuestionFormComponent },
  { path: 'choixTypeQuestion', component: ChoixTypeQuestion },
  { path: 'ListeQuestionPage', component: ListeQuestionPage },
  { path: 'ChoixUser', component: ChoixUser },
  { path: 'ChoixQuiz', component: ChoixQuiz },
  { path: 'ListeQuizAdable', component: ListeQuizAdable },
  { path: 'ChoixTypeQuestion', component: ChoixTypeQuestion }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
