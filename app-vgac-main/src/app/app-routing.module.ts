import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesListComponent } from './games-list/games-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:game-search', component: HomeComponent},
  {path: 'details/:id', component: GameDetailComponent},
  {path: 'my-list', component: GamesListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
