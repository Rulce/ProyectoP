import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  noticias: any = [];

  constructor(private http: HttpClient) {
    this.buscarNoticias();
  }

  buscarNoticias() {
    this.servicioBuscarNoticias().subscribe((n: any[]) => this.noticias = n);
  }

  servicioBuscarNoticias(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/noticia/buscar');
  }
}
