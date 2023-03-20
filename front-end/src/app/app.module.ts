import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeQuizPage } from './Components/Quizs/ListeQuizPage/ListeQuizPage.component';
import { ListeQuiz } from './Components/Quizs/ListeQuiz/ListeQuiz.component';
import { QuizComponent } from './Components/Quizs/Quiz/Quiz.component';
import { QuizFormComponent } from './Components/Quizs/QuizForm/QuizForm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GamePageComponent } from './Components/Quizs/GamePage/GamePageComponent.component';
import { MenuComponent } from './Components/Menu/MenuComponents/Menu.component';
import { MenuChoixCreation } from './Components/Menu/MenuChoixCreationComponent/MenuChoixCreation.component';
import { ListeUserPage } from './Components/Users/UserListPage/ListeUserPage.component';
import { ListeUser } from './Components/Users/ListUser/ListeUser.component';
import { UserComponent } from './Components/Users/User/User.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeQuizPage,
    ListeQuiz,
    QuizComponent,
    QuizFormComponent,
    GamePageComponent,
    MenuComponent,
    MenuChoixCreation
    ListeUserPage,
    ListeUser,
    UserComponent
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
