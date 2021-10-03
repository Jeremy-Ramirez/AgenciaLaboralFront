import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PerfilRepresentanteComponent } from './perfil-representante/perfil-representante.component';
import { SesionRepresentanteComponent } from './sesion-representante/sesion-representante.component';
import { RegistroFullRepresentanteComponent } from './registro-full-representante/registro-full-representante.component';

  
const routes: Routes = [
    {
      path: '',
      children: [
        
        { path: 'sesionRepresentante', component: SesionRepresentanteComponent,
          children:[
            
            { path: 'registroFullRepresentante', component: RegistroFullRepresentanteComponent},
            { path: 'perfilRepresentante', component: PerfilRepresentanteComponent},
          ]
        },
        { path: '**', redirectTo: 'sesionRepresentante' }
      ]
    }
  ];
  


  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ]
  })
  export class RepresentanteRoutingModule { }