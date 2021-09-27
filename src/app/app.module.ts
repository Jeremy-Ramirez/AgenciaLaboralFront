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
import { RegistroFullAspiranteComponent } from './components/registro-full-aspirante/registro-full-aspirante.component';
import { RegistroFullEmpresaComponent } from './components/registro-full-empresa/registro-full-empresa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SesionEmpresaComponent } from './components/sesion-empresa/sesion-empresa.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
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
    RegistroFullAspiranteComponent,
    RegistroFullEmpresaComponent,
    SesionEmpresaComponent,
    SolicitudesComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
