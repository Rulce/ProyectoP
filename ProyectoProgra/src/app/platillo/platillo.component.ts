import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IngredientesPipe } from '../ingredientes.pipe';
import { LogoutComponent } from '../logout/logout.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-platillo',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule,IngredientesPipe,LogoutComponent, MatCheckboxModule, MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,],
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent {
  platillos: any = [];
  ingredientes: any = [];
  platillo: any = {
    plain: []
  };
  selectedIngrediente: any;

  constructor(private http: HttpClient) {
    this.buscarPlatillos();
    this.buscarIngredientes();
  }

  buscarPlatillos() {
    this.servicioBuscarPlatillos().subscribe(
      (p: any) => this.platillos = p
    );
  }

  buscarIngredientes() {
    this.servicioBuscarIngredientes().subscribe(
      (i: any) => this.ingredientes = i
    );
  }

  servicioBuscarPlatillos(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/platillo/buscar");
  }

  servicioBuscarIngredientes(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/ingrediente/buscar");
  }

  crearPlatillo() {
    let formularioValido: any = document.getElementById("platilloForm");
    if (formularioValido.reportValidity()) {
      this.servicioGuardar().subscribe(
        (p: any) => this.finalizarGuardar(p)
      );
    }
  }

  servicioGuardar() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(
      "http://localhost:8080/platillo/guardar",
      this.platillo,
      httpOptions
    );
  }

  finalizarGuardar(p: any) {
    // Limpiamos el objeto platillo, incluyendo plain
    this.platillo = {
        descripcion: '',
        precioVenta: null,
        foto: '',
        plain: [] // Reseteamos también la lista de ingredientes
    };

    // Recargamos los platillos para actualizar la lista
    this.buscarPlatillos();
}

  

agregarIngrediente() {
  // Asegúrate de que cada ingrediente tenga una cantidad y esté correctamente vinculado
  this.platillo.plain.push({
    ingredienteIdingrediente: '', // Ingrediente inicial vacío, que será seleccionado del combobox
    cantidadIngrediente: '' // Inicializamos con un valor por defecto
  });
}



  // Método para eliminar un platillo
  eliminarPlatillo(id: number) {
    this.servicioEliminarPlatillo(id).subscribe(
      () => {
        this.buscarPlatillos(); // Actualiza la lista después de eliminar
      }
    );
  }
  

  servicioEliminarPlatillo(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/platillo/borrar/${id}`);
  }

  // Método para obtener el nombre del ingrediente basado en el ID
obtenerNombreIngrediente(id: number): string {
  const ingrediente = this.ingredientes.find((ingrediente: any) => ingrediente.idingrediente === id);
  return ingrediente ? ingrediente.nombre : 'Desconocido';
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
  this.platillo.foto = base64String;
  }

}
