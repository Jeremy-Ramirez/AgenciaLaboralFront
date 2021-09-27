import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import {RegistroFullAspiranteComponent } from './components/registro-full-aspirante/registro-full-aspirante.component';
import {RegistroFullEmpresaComponent } from './components/registro-full-empresa/registro-full-empresa.component';
import { SesionEmpresaComponent } from './components/sesion-empresa/sesion-empresa.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'registroFullAspirante', component: RegistroFullAspiranteComponent },
  { path: 'registroFullEmpresa', component: RegistroFullEmpresaComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sesionEmpresa', component: SesionEmpresaComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'registroUsuario', component: RegistroUsuarioComponent },
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
