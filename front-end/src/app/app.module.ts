import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeQuizPage } from 'src/Components/ListeQuizPage/ListeQuizPage.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeQuizPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }