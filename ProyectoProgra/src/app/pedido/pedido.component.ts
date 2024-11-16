import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IngredientesPipe } from '../ingredientes.pipe';
import { LogoutComponent } from '../logout/logout.component';
import { EstadoPipe } from '../estado.pipe';
import { UsuarioPipe } from '../usuario.pipe';
import { PlatilloPipe } from '../platillo.pipe';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,IngredientesPipe,LogoutComponent,EstadoPipe,UsuarioPipe,PlatilloPipe,MaterialModule],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {
  pedidos: any = [];
  estado: any = {}
  platillos: any = {}
  detallePedido: any = {}
  usuario: any = {}
  pedido: any = {
    detallePedido: []
   };

  constructor(private http: HttpClient) {
    this. buscarPedidos();
    this. buscarEstado();
    this. buscarUsuario();
    this. buscarDetalle();
    this. buscarPlatillo();

   
  }
  buscarPlatillo() {
    this.serviciobuscarPlatillo().subscribe(
      (p: any) => this. platillos = p
    );
  }

  serviciobuscarPlatillo(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/platillo/buscar");
  }
  buscarDetalle() {
    this.serviciobuscarDetalle().subscribe(
      (p: any) => this. detallePedido = p
    );
  }

  serviciobuscarDetalle(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/detallePedido/buscar");
  }

  buscarUsuario() {
    this.serviciobuscarUsuario().subscribe(
      (p: any) => this. usuario = p
    );
  }


  serviciobuscarUsuario(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/usuario/buscar");
  }
  buscarEstado() {
    this.serviciobuscarEstado().subscribe(
      (p: any) => this. estado = p
    );
  }


  serviciobuscarEstado(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/estado/buscar");
  }

  buscarPedidos() {
    this.servicioBuscarPedidos().subscribe(
      (p: any) => this. pedidos = p
    );
  }


  servicioBuscarPedidos(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/pedido/buscar");
  }

  eliminarPedido(id: number) {
    this.servicioEliminarPedido(id).subscribe(() => {
      // Actualiza la lista de pedidos después de la eliminación
      this.buscarPedidos();
    }, error => {
      console.error('Error al eliminar el pedido:', error);
      alert('Ocurrió un error al intentar eliminar el pedido.');
    });
  }
  
  servicioEliminarPedido(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/pedido/borrar/${id}`);
  }

  actualizarEstado(pedido: any, idestado: number) {
    pedido.estadoIdestado = idestado;
    this.servicioGuardarEstado(pedido).subscribe(
      response => alert('Estado actualizado con éxito'),
      error => alert('Error al actualizar el estado')
    );
  }

  servicioGuardarEstado(pedido: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post("http://localhost:8080/pedido/guardar", pedido, httpOptions);
  }

}
