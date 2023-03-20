import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeQuizPage } from 'src/Components/Quizs/ListeQuizPage/ListeQuizPage.component';
import { ListeQuiz } from 'src/Components/Quizs/ListeQuiz/ListeQuiz.component';
import { QuizComponent } from 'src/Components/Quizs/Quiz/Quiz.component';
import { QuizFormComponent } from 'src/Components/Quizs/QuizForm/QuizForm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GamePageComponent } from 'src/Components/Quizs/GamePage/GamePageComponent.component';
import { QuestionComponent } from 'src/Components/Questions/Question/Question.component';
import { ListeQuestion } from 'src/Components/Questions/ListeQuestion/ListeQuestion.component';
import { QuestionFormComponent } from 'src/Components/Questions/QuestionForm/QuestionForm.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeQuizPage,
    ListeQuiz,
    QuizComponent,
    QuizFormComponent,
    GamePageComponent,
    QuestionComponent,
    ListeQuestion,
    QuestionFormComponent
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
