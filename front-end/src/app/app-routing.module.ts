import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeQuizPage } from 'src/Components/ListeQuizPage/ListeQuizPage.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'ListeQuizPage', pathMatch: 'full' },
  { path: 'ListeQuizPage', component: ListeQuizPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }