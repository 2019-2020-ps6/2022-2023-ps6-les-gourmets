import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeQuizPage } from 'src/Components/ListeQuizPage/ListeQuizPage.component';
import { ListeQuiz } from 'src/Components/ListeQuiz/ListeQuiz.component';
import { QuizComponent } from 'src/Components/Quiz/Quiz.component';
import { QuizForm } from 'src/Components/QuizForm/QuizForm.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeQuizPage,
    ListeQuiz,
    QuizComponent,
    QuizForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
