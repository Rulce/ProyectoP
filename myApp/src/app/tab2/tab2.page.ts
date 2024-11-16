import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  usuario:any;
  constructor(private http:HttpClient) {

    let t:any = localStorage.getItem("usuario");
    this.usuario = JSON.parse(t);

  }

  logOut(){
    localStorage.clear();
    location.reload();
  }
  cambiarcontrasenia() {
    if (this.usuario.password && this.usuario.idusuario) {
      this.servicioGuardar().subscribe(
        response => {
          alert('Contraseña actualizada con éxito');
        }
      );
    } 
  } 
  servicioGuardar(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(
      'http://localhost:8080/usuario/guardar',
      {
        idusuario: this.usuario.idusuario,
        nombre: this.usuario.nombre,
        apellido: this.usuario.apellido,
        nit: this.usuario.nit,
        correo: this.usuario.correo,
        password: this.usuario.password,
        fechaRegistro: this.usuario.fechaRegistro
      },
      httpOptions
    );
  }
}