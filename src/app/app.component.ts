//import de la classe component ( qui est déclarée ailleurs)
import { Component } from '@angular/core';
//import de la classe RouterOutlet pour gérer le routing dans Angular
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

//decorateur appellé par  app-root dans page html /app.component.html
//le décorateur définit le composant component.ts
@Component({
  selector: 'app-root', //nom de la balise d'appel du component pour l'insérer dans une page html
  standalone: true,
  imports: [RouterOutlet],  
  //template:`<h1>Bienvenue sur mon site de jeux</h1>`,
  templateUrl: './app.component.html', //le template définit le html qui forme la vue/interface du composant
  styleUrl: './app.component.css'
})
//c'est la classe du composant
export class AppComponent { //ici la logique du composant
  title = 'GESTION DES ROUTES';
  
  //creation observable avec une fct flechée
  $monObservable = new Observable ();
  constructor (){
    this.$monObservable.subscribe((data:any)=>{
      console.log(data);
    });
  }

  
}

