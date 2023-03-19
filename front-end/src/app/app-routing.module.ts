import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeQuizPage } from 'src/Components/ListeQuizPage/ListeQuizPage.component';
import { GamePageComponent } from 'src/Components/GamePage/GamePageComponent.component';

const routes: Routes = [
  { path: 'ListeQuizPage', component: ListeQuizPage },
  { path: '', redirectTo: '/ListeQuizPage', pathMatch: 'full' },
  { path: 'GamePageComponent', component: GamePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
