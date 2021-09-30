import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import {RegistroAspiranteComponent } from './components/registro-aspirante/registro-aspirante.component';
import {RegistroFullAspiranteComponent } from './components/registro-full-aspirante/registro-full-aspirante.component';
import {RegistroFullEmpresaComponent } from './components/registro-full-empresa/registro-full-empresa.component';
import { RegistroEmpresaComponent } from './components/registro-empresa/registro-empresa.component';
import { RegistroFullRepresentanteComponent } from './components/registro-full-representante/registro-full-representante.component';
import { RegistroRepresentanteComponent } from './components/registro-representante/registro-representante.component';
import { SugerenciasComentariosComponent } from './components/sugerencias-comentarios/sugerencias-comentarios.component';
import { SesionEmpresaComponent } from './components/sesion-empresa/sesion-empresa.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { SesionAspiranteComponent } from './components/sesion-aspirante/sesion-aspirante.component';
import { OfertaEmpleoComponent } from './components/oferta-empleo/oferta-empleo.component';

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'registroAspirante', component: RegistroAspiranteComponent },
  { path: 'registroEmpresa', component: RegistroEmpresaComponent },
  { path: 'registroFullAspirante', component: RegistroFullAspiranteComponent },
  { path: 'registroFullEmpresa', component: RegistroFullEmpresaComponent },
  { path: 'representante', component: RegistroRepresentanteComponent},
  { path: 'registroRepresentante/:id', component: RegistroFullRepresentanteComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sesionEmpresa', component: SesionEmpresaComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'sesionAspirante', component: SesionAspiranteComponent },
  { path: 'sugerencias', component: SugerenciasComentariosComponent},
  { path: 'ofertaEmpleo', component: OfertaEmpleoComponent },
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
