import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  platillos: any = [];
  pedido: any[] = [];  // Lista de platillos seleccionados para el pedido
  usuario: any; // Variable para almacenar el usuario logueado

  constructor(private http: HttpClient) {
    this.buscarPlatillos();
    
    // Obtener el usuario logueado desde localStorage
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      this.usuario = JSON.parse(usuarioGuardado);
    } else {
      console.error("No se encontró un usuario logueado.");
    }
  }

  buscarPlatillos() {
    this.servicioBuscarPlatillos().subscribe(
      (u: any) => this.platillos = u
    );
  }

  servicioBuscarPlatillos(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/platillo/buscar");
  }

  agregarAlPedido(platillo: any) {
    const cantidad = platillo.cantidadSeleccionada || 1;
  
    // Verifica si el platillo ya está en el pedido
    const platilloExistente = this.pedido.find(p => p.idplatillo === platillo.idplatillo);
    if (platilloExistente) {
      platilloExistente.cantidadSeleccionada += cantidad;
    } else {
      const platilloPedido = { ...platillo, cantidadSeleccionada: cantidad };
      this.pedido.push(platilloPedido);
    }
  }

  calcularTotal(): number {
    return this.pedido.reduce((total, platillo) => total + (platillo.precioVenta * platillo.cantidadSeleccionada), 0);
  }

  realizarPedido() {
    const fechaHora = new Date().toISOString();
    const precioTotal = this.calcularTotal();
    const estadoPedidoIdestadoPedido = 1; // Estado inicial del pedido
    const usuarioIdusuario = this.usuario.idusuario;
  
    const detallePedido = this.pedido.map(platillo => ({
      iddetalle_pedido: null,
      cantidad: platillo.cantidadSeleccionada,
      precioUnitario: platillo.precioVenta ,
      pedidoIdpedido: null,
      platilloIdplatillo: platillo.idplatillo
    }));
  
    const pedidoData = {
      idpedido: null,
      fechaHora: fechaHora,
      precioTotal: precioTotal,
      estadoPedidoIdestadoPedido: estadoPedidoIdestadoPedido,
      usuarioIdusuario: usuarioIdusuario,
      detallePedido: detallePedido
    };
  
    this.servicioGuardarPedido(pedidoData).subscribe(
      response => {
        console.log("Pedido realizado:", response);
        this.pedido = []; // Vaciar el pedido después de enviarlo
      },
      error => {
        console.error("Error al realizar el pedido:", error);
      }
    );
  }

  servicioGuardarPedido(pedidoData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>("http://localhost:8080/pedido/guardar", JSON.stringify(pedidoData), { headers });
  }
}
