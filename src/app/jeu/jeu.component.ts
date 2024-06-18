import { Component } from '@angular/core';
import { ObservableTestComponent } from '../observable-test/observable-test.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jeu',
  standalone: true,
  imports: [],
  templateUrl: './jeu.component.html',
  styleUrl: './jeu.component.css'
})
export class JeuComponent {

  joke : any;
  constructor(public http: HttpClient) {
    this.http.get("https://premierefonctionazure.azurewebsites.net/api/HttpTriggerMaFonctionAzure?").subscribe((data : any) => {
      console.log(data);
    }) 
  }

  call(){
    this.http.get("https://api.chucknorris.io/jokes/random").subscribe((data : any) => {
      console.log(data);
      this.joke = data.value;
    }) 
  }
}
