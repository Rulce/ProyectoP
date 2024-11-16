import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  pedidos: any = [];
  estado: any = {};
  usuario: any = {};
  platillos: any = {}
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Obtener el usuario logueado desde localStorage
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      this.usuario = JSON.parse(usuarioGuardado);
      console.log("Usuario logueado:", this.usuario);  // Verificar el usuario logueado
      this.buscarpedido();
      this.buscarEstado();
      this. buscarPlatillo();
    } else {
      console.error("No se encontró un usuario logueado.");
      // Redirigir a la página de login o manejar el error según sea necesario
    }
  }

  buscarpedido() {
    this.serviciobuscarpedido().subscribe(
      (u: any) => {
        console.log("Respuesta de pedidos:", u);  // Verificar la respuesta del servidor
        this.pedidos = u.filter((pedido: any) => pedido.usuarioIdusuario === this.usuario.idusuario);
        console.log("Pedidos filtrados:", this.pedidos);  // Verificar los pedidos filtrados
      },
      (error) => console.error("Error al obtener pedidos:", error)
    );
  }

  serviciobuscarpedido(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/pedido/buscar");
  }

  buscarEstado() {
    this.serviciobuscarEstado().subscribe(
      (p: any) => {
        this.estado = p;
        console.log("Estado recibido:", this.estado);  // Verificar el estado
      },
      (error) => console.error("Error al obtener estado:", error)
    );
  }

  serviciobuscarEstado(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/estado/buscar");
  }
  buscarPlatillo() {
    this.serviciobuscarPlatillo().subscribe(
      (p: any) => this. platillos = p
    );
  }

  serviciobuscarPlatillo(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/platillo/buscar");
  }
}
