import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeQuizPage } from './Components/Quizs/ListeQuizPage/ListeQuizPage.component';
import { GamePageComponent } from './Components/Quizs/GamePage/GamePageComponent.component';
import { MenuComponent } from './Components/Menu/MenuComponents/Menu.component';
import { MenuChoixCreation } from './Components/Menu/MenuChoixCreationComponent/MenuChoixCreation.component';


const routes: Routes = [
  { path: 'ListeQuizPage', component: ListeQuizPage },
  { path: '', redirectTo: '/Menu', pathMatch: 'full' },
  { path: 'GamePageComponent', component: GamePageComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'MenuChoixCreation', component:MenuChoixCreation}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
