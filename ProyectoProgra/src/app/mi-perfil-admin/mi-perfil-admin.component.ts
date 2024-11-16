import { Component } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mi-perfil-admin',
  standalone: true,
  imports: [LogoutComponent,FormsModule],
  templateUrl: './mi-perfil-admin.component.html',
  styleUrl: './mi-perfil-admin.component.css'
})
export class MiPerfilAdminComponent {
  admin:any;
  constructor(){
    let t:any = localStorage.getItem("admin");
    this.admin = JSON.parse(t);
  }

}
