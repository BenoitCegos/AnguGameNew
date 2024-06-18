import { Routes } from '@angular/router';
import { JeuComponent } from './jeu/jeu.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
   { path: '', redirectTo: 'Home', pathMatch: 'full' }, //si la route est http://localhost:4200 ou http://localhost:4200/ redirection vers le path Jeu
   { path:'Jeu', component : JeuComponent}, //creation route Jeu qui pointe vers jeu via une classe Jeucomponent
   {path:'Home',component: HomeComponent} 

];
