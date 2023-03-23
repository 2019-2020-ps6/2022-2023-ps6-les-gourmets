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
import { GamePageComponent } from './Components/Quizs/GamePage/GamePageComponent.component';
import { MenuComponent } from './Components/Menu/MenuComponents/Menu.component';
import { MenuChoixCreation } from './Components/Menu/MenuChoixCreationComponent/MenuChoixCreation.component';
import { ListeUserPage } from './Components/Users/UserListPage/ListeUserPage.component';
import { ListeUser } from './Components/Users/ListUser/ListeUser.component';
import { UserComponent } from './Components/Users/User/User.component';
import { ListeQuestionPage } from './Components/Questions/ListeQuestionPage/ListeQuestionPage.component';
import { UserProfilePage } from './Components/Users/UserProfilePage/UserProfilePage.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuChoixCreation,

    GamePageComponent,

    UserComponent,
    ListeUserPage,
    ListeUser,
    UserProfilePage,

    ListeQuizPage,
    ListeQuiz,
    QuizComponent,
    QuizFormComponent,

    QuestionComponent,
    QuestionFormComponent,
    ListeQuestion,
    ListeQuestionPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
