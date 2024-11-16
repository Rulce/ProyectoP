import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  sesionIniciada:boolean = false;
  creacionCuenta:boolean = false;
  usuario:any = {};
  constructor(private http:HttpClient) {
    let usuario = localStorage.getItem("usuario");
    if(usuario){
      this.sesionIniciada = true;
    }
  }
  crearCuenta(){

    this.creacionCuenta = true;

  }

  crearCuentaUsuario(){
    this.usuario.fechaRegistro = new Date();
    if(this.usuario.correo && this.usuario.password && this.usuario.nombre){ 
    this.servicioGuardar().subscribe(
      (u:any) => this.finalizarGuardar(u)
    )
  }
  else{
    alert("Ingrese los datos del nuevo usuario.")
  }
  }
  finalizarGuardar(u:any){
    this.usuario = {};
    this.creacionCuenta = false;
    alert("Usuario guardado exitosamente, inice sesion con su nuevo usuario.")
  }

  servicioGuardar(){
    let httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }

    return this.http.post(
      "http://localhost:8080/usuario/guardar",
      this.usuario,
      httpOptions);
  }

  login(){
   if(this.usuario.correo && this.usuario.password){ 
    this.servicioLogin().subscribe(
      (u:any) => this.validarLogin(u)
    )
  }
  else{
    alert("Correp o password no ingresado")
  }
  }

  validarLogin(u:any){

    if(u){
      this.sesionIniciada = true;
      let t = JSON.stringify(u);
      localStorage.setItem("usuario",t);
    }
    else{
      alert("Usuario o password invalido.")
    }

  }
  servicioLogin(){
    let httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }

    return this.http.post(
      "http://localhost:8080/usuario/login",
      this.usuario,
      httpOptions);
  }
}
