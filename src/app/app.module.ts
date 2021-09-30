import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { RegistroAspiranteComponent } from './components/registro-aspirante/registro-aspirante.component';
import { RegistroEmpresaComponent } from './components/registro-empresa/registro-empresa.component';
import { RegistroFullAspiranteComponent } from './components/registro-full-aspirante/registro-full-aspirante.component';
import { RegistroFullEmpresaComponent } from './components/registro-full-empresa/registro-full-empresa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SesionEmpresaComponent } from './components/sesion-empresa/sesion-empresa.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { HttpClientModule } from '@angular/common/http';
import {TipodocumentoService} from './servicios/tipodocumento.service';
import {TipoempresaService} from './servicios/tipoempresa.service';
import {TipopersonaService} from './servicios/tipopersona.service';
import {GeneroService} from './servicios/genero.service';
import {RamaactividadService} from './servicios/ramaactividad.service';
import {ProvinciaService} from './servicios/provincia.service';
import {EmpresaService} from './servicios/empresa.service';
import {ActividadeconomicaService} from './servicios/actividadeconomica.service';
import {CiudadService} from './servicios/ciudad.service';
import {SectorService} from './servicios/sector.service';
import { SesionAspiranteComponent } from './components/sesion-aspirante/sesion-aspirante.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent,
    FeedbackComponent,
    FooterComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    RegistroAspiranteComponent,
    RegistroEmpresaComponent,
    RegistroFullAspiranteComponent,
    RegistroFullEmpresaComponent,
    SesionEmpresaComponent,
    SolicitudesComponent,
    SesionAspiranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TipodocumentoService,
    TipopersonaService,
    GeneroService,
    TipoempresaService,
    RamaactividadService,
    ProvinciaService,
    ActividadeconomicaService,
    CiudadService,
    EmpresaService,
    SectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
