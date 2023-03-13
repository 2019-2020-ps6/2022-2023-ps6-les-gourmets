import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ListeQuizPage } from 'src/Components/ListeQuizPage/ListeQuizPage.component'; 
=======
import { ListeQuizPage } from 'src/Components/ListeQuizPage/ListeQuizPage.component';
>>>>>>> 18a57fd0d20f0b5de2f48c14ce38505ab54aa75a

const routes: Routes = [
  { path: '/ListeQuizPage', component: ListeQuizPage },
  { path: '', redirectTo: '/ListeQuizPage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
