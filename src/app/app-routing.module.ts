import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import {RegistroAspiranteComponent } from './components/registro-aspirante/registro-aspirante.component';
import {RegistroFullAspiranteComponent } from './components/registro-full-aspirante/registro-full-aspirante.component';
import {RegistroFullEmpresaComponent } from './components/registro-full-empresa/registro-full-empresa.component';
import { RegistroEmpresaComponent } from './components/registro-empresa/registro-empresa.component';

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'registroAspirante', component: RegistroAspiranteComponent },
  { path: 'registroEmpresa', component: RegistroEmpresaComponent },
  { path: 'registroFullAspirante', component: RegistroFullAspiranteComponent },
  { path: 'registroFullEmpresa', component: RegistroFullEmpresaComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },



];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
