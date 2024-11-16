import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from '../logout/logout.component';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-noticiab',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule,LogoutComponent, MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './noticiab.component.html',
  styleUrls: ['./noticiab.component.css']  // corregido a styleUrls
})
export class NoticiabComponent {

  noticias: any[] = [];
  nuevaNoticia: any = {
    titulo: '',
    descripcion: '',
    foto: '',
    fechaPublicacion: ''
  };

  constructor(private http: HttpClient) {
    this.buscarNoticias();
  }
  
  // Método para buscar noticias
  buscarNoticias() {
    this.servicioBuscarNoticias().subscribe(
      (u: any) => this.noticias = u,
    );
  }
  
  // Servicio para buscar noticias
  servicioBuscarNoticias(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/noticia/buscar");
  }
  
  // Método para guardar una nueva noticia
  guardarNoticia() {
    // Asignar la fecha actual a nuevaNoticia.fechaPublicacion
    this.nuevaNoticia.fechaPublicacion = new Date();

    this.servicioGuardarNoticia(this.nuevaNoticia).subscribe(
      (response) => {
        console.log('Noticia guardada:', response);
        // Limpiar el formulario después de guardar la noticia
        this.nuevaNoticia = { titulo: '', descripcion: '', foto: '', fechaPublicacion: '' };
        this.buscarNoticias();  // Actualiza la lista de noticias
      },
      (error) => console.error('Error al guardar noticia:', error)
    );
  }
  
  // Servicio para guardar noticia en el servidor (POST)
  servicioGuardarNoticia(noticia: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>("http://localhost:8080/noticia/guardar", noticia, { headers });
  }

  // Método opcional para eliminar noticias
  eliminarNoticias(id: number) {
    this.servicioEliminarNoticia(id).subscribe(
      (response) => {
        console.log('Noticia eliminada:', response);
        this.buscarNoticias();
      },
      (error) => console.error('Error al eliminar noticia:', error)
    );
  }
  
  // Servicio para eliminar noticia del servidor
  servicioEliminarNoticia(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/noticia/borrar/${id}`);
  }

// Método para cargar la noticia en el formulario
editarNoticia(noticia: any) {
  this.nuevaNoticia = { ...noticia }; // Copia los datos de la noticia al formulario
}

// Método para actualizar la noticia
actualizarNoticia() {
  this.servicioActualizarNoticia(this.nuevaNoticia).subscribe(
    (response) => {
      console.log('Noticia actualizada:', response);
      this.nuevaNoticia = { titulo: '', descripcion: '', foto: '', fechaPublicacion: '' }; // Limpiar el formulario
      this.buscarNoticias(); // Actualizar la lista de noticias
    },
    (error) => console.error('Error al actualizar noticia:', error)
  );
}

// Servicio para actualizar la noticia en el servidor (PUT o POST)
servicioActualizarNoticia(noticia: any): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<any>(`http://localhost:8080/noticia/actualizar/${noticia.idnoticia}`, noticia, { headers });
}



  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleFileLoad.bind(this);
      reader.readAsDataURL(file);
    }
  }

  handleFileLoad(event: any) {
    const base64String = event.target.result;
    this.nuevaNoticia.foto = base64String;
  }

}
