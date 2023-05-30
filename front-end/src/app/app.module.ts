import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeQuizPage } from 'src/app/Components/Quizs/ListeQuizPage/ListeQuizPage.component';
import { ListeQuiz } from 'src/app/Components/Quizs/ListeQuiz/ListeQuiz.component';
import { QuizComponent } from 'src/app/Components/Quizs/Quiz/Quiz.component';
import { QuizFormComponent } from 'src/app/Components/Quizs/QuizForm/QuizForm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from 'src/app/Components/Questions/Question/Question.component';
import { ListeQuestion } from 'src/app/Components/Questions/ListeQuestion/ListeQuestion.component';
import { QuestionFormComponent } from 'src/app/Components/Questions/QuestionForm/QuestionForm.component';
import { ChoixTypeQuestion } from './Components/Questions/ChoixTypeQuestion/ChoixTypeQuestion.component';
import { GamePageComponent } from './Components/Jouer/GamePage/GamepageComponent.component';
import { MenuComponent } from './Components/Menu/MenuComponents/Menu.component';
import { MenuChoixCreation } from './Components/Menu/MenuChoixCreationComponent/MenuChoixCreation.component';
import { ListeUserPage } from './Components/Users/UserListPage/ListeUserPage.component';
import { ListeUser } from './Components/Users/ListUser/ListeUser.component';
import { UserComponent } from './Components/Users/User/User.component';
import { ListeQuestionPage } from './Components/Questions/ListeQuestionPage/ListeQuestionPage.component';
import { UserProfilePage } from './Components/Users/UserProfilePage/UserProfilePage.component';
import { UserForm } from './Components/Users/UserForm/UserForm.component';
import { ChoixUser } from './Components/Jouer/ChoixUser/ChoixUser.component';
import { UserStatsPage } from './Components/Users/UserStatsPage/UserStatsPage.component';
import { GameAnswerComponent } from './Components/Jouer/GameAnswer/GameAnswerComponent.component'
import { GameQuestionComponent } from './Components/Jouer/GameQuestion/GameQuestionComponent.component'
import { ChoixQuiz } from './Components/Jouer/ChoixQuiz/ChoixQuiz.component';
import { ListeQuizAdable } from './Components/Users/ListQuizAdable/ListeQuizAdable.component';
import { EndPageComponent } from './Components/Jouer/EndPage/EndPageComponent.component';
import { QuizEditComponent } from './Components/Quizs/QuizEdit/quizEdit.component';
import { ListeQuestionAdable } from './Components/Quizs/ListQuestionAdable/ListeQuestionAdable.component';
import { ListeTheme } from './Components/Questions/ListeTheme/ListeTheme.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuChoixCreation,
    //InGame
    GamePageComponent,
    GameAnswerComponent,
    GameQuestionComponent,
    EndPageComponent,
    //Users
    UserComponent,
    ListeUserPage,
    ListeUser,
    UserProfilePage,
    UserStatsPage,
    UserForm,
    ListeQuizAdable,
    //Quizs
    ListeQuizPage,
    ListeQuiz,
    QuizComponent,
    QuizFormComponent,
    ListeQuestionAdable,
    //Questions
    QuestionComponent,
    QuestionFormComponent,
    ListeQuestion,
    ListeQuestionPage,
    ChoixTypeQuestion,
    ListeTheme,
    ChoixUser,
    ChoixQuiz,
    QuizEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
