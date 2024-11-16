import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from '../logout/logout.component';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-ingrediente',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule, LogoutComponent,MaterialModule],
  templateUrl: './ingrediente.component.html',
  styleUrl: './ingrediente.component.css'
})
export class IngredienteComponent {
  ingredientes: any[] = [];
  nuevoIngrediente: any = {
    nombre: '',
    cantidadStock: ''
  };

  constructor(private http: HttpClient) {
    this.buscarIngredientes();
  }
  
  // Método para buscar noticias
  buscarIngredientes() {
    this.servicioBuscarIngredientes().subscribe(
      (u: any) => this.ingredientes = u,
    );
  }
  
  // Servicio para buscar noticias
  servicioBuscarIngredientes(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/ingrediente/buscar");
  }
  
  // Método para guardar una nueva noticia
  guardarIngrediente() {
  
    this.servicioGuardarNoticia(this.nuevoIngrediente).subscribe(
      (response) => {
        console.log('Ingrediente guardado:', response);
        // Limpiar el formulario después de guardar la ingrediente
        this.nuevoIngrediente = { nombre: '', cantidadStock: ''};
        this.buscarIngredientes();  // Actualiza la lista de ingrediente
      },
      (error) => console.error('Error al guardar ingrediente', error)
    );
  }
  
  // Servicio para guardar ingrediente en el servidor (POST)
  servicioGuardarNoticia(ingrediente: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>("http://localhost:8080/ingrediente/guardar", ingrediente, { headers });
  }

  // Método opcional para eliminar ingrediente
  eliminarIngredientes(id: number) {
    this.servicioEliminarIngrediente(id).subscribe(
      (response) => {
        console.log('Noticia eliminada:', response);
        this.buscarIngredientes();
      },
      (error) => console.error('Error al eliminar ingrediente:', error)
    );
  }
  
  // Servicio para eliminar ingrediente del servidor
  servicioEliminarIngrediente(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/ingrediente/borrar/${id}`);
  }
}
