import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

usuario:any = {};
  constructor(private http:HttpClient){

  }
  
login(){

let formValid:any = document.getElementById("loginForm");

if(formValid.reportValidity){
  this.servicioLogin().subscribe(
    (u:any) => this.validarLogin(u)
    )
  }
}

validarLogin(u:any){
  if(u){
    location.href = "home";
  }
  else{
    alert("Usuario y password no coinciden.")
  }
}

servicioLogin(){
  let httpOptions = {
    headers:new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

return this.http.post(
  "http://localhost:8080/usuario/login",
  this.usuario,
  httpOptions);
  }
}
