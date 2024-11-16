import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-loginb',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './loginb.component.html',
  styleUrl: './loginb.component.css'
})
export class LoginbComponent {
  
  admin:any = {};
  constructor(private http:HttpClient){
    let admin = localStorage.getItem("admin");
    if(admin){
      location.href= "home-admin";
    }
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
    location.href = "home-admin";
    let t = JSON.stringify(u)
    localStorage.setItem("admin", t)
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
  "http://localhost:8080/admin/login",
  this.admin,
  httpOptions);
  }


}
