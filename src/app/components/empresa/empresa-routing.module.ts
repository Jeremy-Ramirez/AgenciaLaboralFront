import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { SesionEmpresaComponent } from './sesion-empresa/sesion-empresa.component';
import { RegistroRepresentanteComponent } from './registro-representante/registro-representante.component';
import { RegistroFullEmpresaComponent } from './registro-full-empresa/registro-full-empresa.component';
import { RegistroFullRepresentanteComponent } from './registro-full-representante/registro-full-representante.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';

  
const routes: Routes = [
    {
      path: '',
      children: [
        
        { path: 'sesionEmpresa', component: SesionEmpresaComponent,
          children:[
            
            { path: 'registroRepresentante', component: RegistroRepresentanteComponent},
            { path: 'perfilEmpresa', component: PerfilEmpresaComponent},
          ]
        },
        { path: 'registroEmpresa', component: RegistroEmpresaComponent},
        { path: 'registroFullEmpresa', component: RegistroFullEmpresaComponent},
        { path: 'registroFullRepresentante', component: RegistroRepresentanteComponent},
        { path: '**', redirectTo: 'sesionEmpresa' }
      ]
    }
  ];
  


  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ]
  })
  export class EmpresaRoutingModule { }