import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeQuizPage } from 'src/Components/ListeQuizPage/ListeQuizPage.component'; 

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
