import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(){
    let admin = localStorage.getItem("admin");
    if(!admin){
      location.href = "";
    }
  }
  logout(){
    localStorage.clear();
    location.href="";
  }

  irPerfil(){
    location.href = "meadmin";
  }

  irHomeAdmin(){
    location.href = "home-admin";
  }
}
