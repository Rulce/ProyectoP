import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuarios: any = [];

  constructor(private http:HttpClient){
    this.buscarUsuarios();
  } 

  buscarUsuarios(){
    this.servicioBuscarUsuarios().subscribe(
      (u:any) => this.usuarios = u
    )
  }
  servicioBuscarUsuarios():Observable<any>{
    return this.http.get<any>("http://localhost:8080/usuario/buscar");
  }

  irNotica(){
    location.href = "noticia";
  }

}
