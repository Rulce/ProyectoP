import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {

  noticias:any=[];

constructor(private http: HttpClient) {
  this.buscarNoticias();
}

buscarNoticias() {
  this.servicioBuscarNoticias().subscribe(
    (u: any) => this.noticias = u,
  );
}

servicioBuscarNoticias(): Observable<any> {
  return this.http.get<any>("http://localhost:8080/noticia/buscar");
}


}
