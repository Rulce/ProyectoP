import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  irUsuario(){
    location.href = "login";
  }

  irAdmin(){
    location.href = "loginb";
  }
}


