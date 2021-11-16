import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';




import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { SesionEmpresaComponent } from './sesion-empresa/sesion-empresa.component';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { RegistroRepresentanteComponent } from './registro-representante/registro-representante.component';
import { RegistroFullEmpresaComponent } from './registro-full-empresa/registro-full-empresa.component';
import { RegistroFullRepresentanteComponent } from '../representante/registro-full-representante/registro-full-representante.component';
import { RouterModule } from '@angular/router';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import { InformacionComponent } from './informacion/informacion.component';
import { SugerenciasComentariosComponent } from './sugerencias-comentarios/sugerencias-comentarios.component';
import { EditPassComponent } from './edit-pass/edit-pass.component';

@NgModule({
  declarations: [
    SesionEmpresaComponent,
    RegistroEmpresaComponent,
    RegistroRepresentanteComponent,
    RegistroFullEmpresaComponent,
    PerfilEmpresaComponent,
    MenuLateralComponent,
    InformacionComponent,
    SugerenciasComentariosComponent,
    EditPassComponent,
    

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    EmpresaRoutingModule,
    RouterModule,
    
  ],
})
export class EmpresaModule { }