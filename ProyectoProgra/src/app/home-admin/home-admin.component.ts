import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule, LogoutComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {

  irNoticaAdmin(){
    location.href = "noticiab";
  }
  
  irCali(){
    location.href = "calificacion";
  }

  irIngrediente(){
    location.href = "ingrediente";
  }

  irPlatillo(){
    location.href = "platillo";
  }

  irConsulta(){
    location.href = "consulta";
  }

  irPedido(){
    location.href = "pedido";
  }

 

  admin: any = [];

  constructor(private http:HttpClient){
    this.buscarUsuarios();
  } 

  buscarUsuarios(){
    this.servicioBuscarUsuarios().subscribe(
      (u:any) => this.admin = u
    )
  }
  servicioBuscarUsuarios():Observable<any>{
    return this.http.get<any>("http://localhost:8080/admin/buscar");
  }

 

}
