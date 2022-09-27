import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

        name    : string = "Red"
        power   : string = "(Red's Mighty Feathers) Sable de Luz, Empujón de la Fuerza y Racer Pod (Juegos de la Saga de Star Wars), disminuir velocidad y daño (Angry Birds Chrome y Friends), Empujar estructuras (Angry Birds 2), Ninguno (En los demás juegos y niveles)"
        genre   : string = "Masculino"
        size    : string = "Medio"
        scope   : string = "Medio"
        color   : string = "red"

  constructor(private router: Router) {}

  gotoMyBirds(){
    this.router.navigateByUrl("/my-birds");
  }

}
