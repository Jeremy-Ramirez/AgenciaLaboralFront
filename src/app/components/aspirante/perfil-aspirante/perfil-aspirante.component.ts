import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params ,Router } from '@angular/router';
import { Emitters } from '../clases/emitters';
import {TipodocumentoService} from '../../../servicios/tipodocumento.service'
import {ProvinciaService} from '../../../servicios/provincia.service'
import { GeneroService } from '../../../servicios/genero.service';
import { CiudadService } from '../../../servicios/ciudad.service';
import { ProfesionesService } from 'src/app/servicios/profesiones.service';

@Component({
  selector: 'app-perfil-aspirante',
  templateUrl: './perfil-aspirante.component.html',
  styleUrls: ['./perfil-aspirante.component.css']
})
export class PerfilAspiranteComponent implements OnInit {
  //aspirantes:any[]=[];
  file:any;
  id='';
  message = '';
  usuarioActual: any;
  tipodocumentodesc ='';
  tipoDocumentos:any[]=[];
  provincias:any[]=[];
  provinciadesc= '';
  generos:any[]=[];
  generodesc='';
  ciudades: any[]=[];
  ciudadesdesc='';

  profesiones:any[]=[];
  profesiondesc='';

  aspirantes:any[]=[];
  usuarios:any[]=[];
  archivos:any[]=[];
  constructor(private http:HttpClient,private fb: FormBuilder,private rutaActiva: ActivatedRoute,
    private _tipodocumentoService: TipodocumentoService,private _provinciaService:ProvinciaService ,
    private _generoService:GeneroService, private _ciudadService:CiudadService, private router: Router,
    private _profesionesService:ProfesionesService,
    ) { }

  ngOnInit(): void {
    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/userusuario/', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Hi ${res.idusuario}`;
        this.id=res.idusuario
        this.usuarioActual=res;
        console.log(this.usuarioActual)
        Emitters.authEmitter.emit(true);

        this._tipodocumentoService.getTipodocumentos().subscribe((resp:any)=>{
          this.tipoDocumentos=resp;
          console.log(this.tipoDocumentos);
          for(let doc of this.tipoDocumentos){
            if(doc.idtipodocumento ===res.tipodocumento_idtipodocumento ){
              this.tipodocumentodesc=doc.descripcion
            }
          }
        })

        this._provinciaService.getProvincias().subscribe((resp:any)=>{
          this.provincias= resp;
          for(let pr of this.provincias){
            if(pr.idprovincia=== res.provincia_idprovincia){
              this.provinciadesc=pr.nombreprovincia
            }
          }
        })

        this._generoService.getGeneros().subscribe((resp:any)=>{
          this.generos=resp;
          for(let g of this.generos){
            if(g.idgenero === res.genero_idgenero){
              this.generodesc=g.genero
            }
          }

        })

        this._ciudadService.getCiudades().subscribe((resp:any)=>{
          this.ciudades=resp;
          for(let c of this.ciudades){
            if(c.idciudad === res.ciudad_idciudad){
              this.ciudadesdesc= c.nombreciudad
            }
          }
        })
        this._profesionesService.getProfesiones().subscribe((resp: any)=>{
          this.profesiones= resp;
          for(let a of this.aspirantes){
            if(res.idusuario==a.usuario_idusuario){
              for(let profesion of this.profesiones){
                if(profesion.idprofesiones === a.profesiones_idprofesiones){
                  this.profesiondesc= profesion.profesion
                }
    
              }
            }
          }



          
          
        })



      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );

    

    this.getAspirantes();
    this.getUsuarios();
    this.getAspirantes();
    this.getArchivos();
  }


  getAspirantes(){
    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/aspirantes/').subscribe((resp:any)=>{
      this.aspirantes=resp;
      console.log(this.aspirantes)
    })
  }

  getUsuarios(){
    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/').subscribe((resp:any)=>{
      this.usuarios=resp;
      console.log(this.usuarios)
    })
  }

  getArchivos(){
    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/archivosaspirante/').subscribe((resp:any)=>{
      this.archivos=resp;
      console.log(this.archivos)
    })
  }

  /*getAspirantes(){
    this.http.get('http://127.0.0.1:8000/api/aspirantes/').subscribe((doc:any)=>{
      this.aspirantes=doc
        console.log(this.aspirantes)
        this.aspirantes.forEach(element => {
          if(element.idaspirante=='16'){
            this.file=element.videopresentacion;
          }
        });

    })
  }*/

  editarProfesional(){
    this.router.navigate( [`/aspirante/sesionAspirante/aspiranteProfesional`]);
  }

}
