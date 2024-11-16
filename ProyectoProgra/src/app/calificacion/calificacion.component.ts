import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-calificacion',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule, LogoutComponent],
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent {

  calificaciones: any[] = [];
  nuevaCalificacion: any = {
    nota: '',
    nombre: '',
    noExamen: '',
    fechaCalificacion: ''
  };

  constructor(private http: HttpClient) {
    this.buscarCali();
  }
  
  // Método para buscar noticias
  buscarCali() {
    this.servicioBuscarCali().subscribe(
      (u: any) => this.calificaciones = u,
    );
  }
  
  // Servicio para buscar noticias
  servicioBuscarCali(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/calificacion/buscar");
  }
  
  // Método para guardar una nueva noticia
  guardarCali() {
    // Asignar la fecha actual a nuevaNoticia.fechaPublicacion
    this.nuevaCalificacion.fechaCalificacion = new Date();

    this.servicioGuardarCali(this.nuevaCalificacion).subscribe(
      (response) => {
        console.log('Calificacion guardada:', response);
        this.nuevaCalificacion = { nota: '', nombre: '', noExamen: '', fechaCalificacion: '' };
        this.buscarCali();  
      },
      (error) => console.error('Error al guardar noticia:', error)
    );
  }
  
  // Servicio para guardar noticia en el servidor (POST)
  servicioGuardarCali(calificacion: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>("http://localhost:8080/calificacion/guardar", calificacion, { headers });
  }
  
}
