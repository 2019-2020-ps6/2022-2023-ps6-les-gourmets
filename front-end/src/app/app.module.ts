import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeQuizPage } from 'src/Components/ListeQuizPage/ListeQuizPage.component';
import { ListeQuiz } from 'src/Components/ListeQuiz/ListeQuiz.component';
import { QuizComponent } from 'src/Components/Quiz/Quiz.component';
import { QuizFormComponent } from 'src/Components/QuizForm/QuizForm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GamePageComponent } from 'src/Components/GamePage/GamePageComponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeQuizPage,
    ListeQuiz,
    QuizComponent,
    QuizFormComponent,
    GamePageComponent,
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
