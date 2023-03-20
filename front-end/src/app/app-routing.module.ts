import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeQuizPage } from './Components/Quizs/ListeQuizPage/ListeQuizPage.component';
import { ListeUserPage } from './Components/Users/UserListPage/ListeUserPage.component';
import { GamePageComponent } from './Components/Quizs/GamePage/GamePageComponent.component';

const routes: Routes = [
  { path: '', redirectTo: '/ListeUserPage', pathMatch: 'full' },
  { path: 'ListeQuizPage', component: ListeQuizPage },
  { path: 'ListeUserPage', component: ListeUserPage },
  { path: 'GamePageComponent', component: GamePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
