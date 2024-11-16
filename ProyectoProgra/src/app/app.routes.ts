import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { LoginbComponent } from './loginb/loginb.component';
import { NoticiabComponent } from './noticiab/noticiab.component';
import { CalificacionComponent } from './calificacion/calificacion.component';
import { PlatilloComponent } from './platillo/platillo.component';
import { IngredienteComponent } from './ingrediente/ingrediente.component';
import { MiPerfilAdminComponent } from './mi-perfil-admin/mi-perfil-admin.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { PedidoComponent } from './pedido/pedido.component';


export const routes: Routes = [
    {path: '', component:InicioComponent},
    {path: 'calificacion', component:CalificacionComponent},
    {path: 'loginb', component:LoginbComponent},
    {path: 'home-admin', component:HomeAdminComponent},
    {path: 'noticia', component:NoticiaComponent},
    {path: 'noticiab', component:NoticiabComponent},
    {path: 'login', component:LoginComponent},
    {path: 'home', component:HomeComponent},
    {path: 'platillo', component:PlatilloComponent},
    {path: 'ingrediente', component:IngredienteComponent},
    {path: 'me', component:MiPerfilComponent},
    {path: 'meadmin', component:MiPerfilAdminComponent},
    {path: 'consulta', component:ConsultaComponent},
    {path: 'pedido', component:PedidoComponent},

];
