import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CiudadService} from '../../../servicios/ciudad.service'
import {ProvinciaService} from '../../../servicios/provincia.service'
import {throwError} from 'rxjs';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  tipopersonas:any[]=[]; 
  tipodocumentos:any[]=[];
  tipoempresas:any[]=[];
  ramaactividads:any[]=[];
  actividadeconomicas:any[]=[];
  ciudades:any[]=[];
  provincias: any[]=[];
  sectores: any[]=[];
  empresas: any []=[];
  representantes: any []=[];
  profesiones:any[]=[];
  fechaCorrectaInicio=true;
  fechaCorrectaCierre=true;
  niveles:any[]=[];

  id:'';
  message = '';
  usuarioActual: any;

  constructor(
    private _ciudadService: CiudadService,
    private _provinciaService: ProvinciaService,
    private form: FormBuilder,
    private httpClient:HttpClient,
    private http: HttpClient,
    ) { 
  }
  

  ngOnInit(): void {
   
    this._ciudadService.getCiudades().subscribe((resp:any)=>{
      this.ciudades=resp
      console.log(resp)

    });
    this._provinciaService.getProvincias().subscribe((resp:any)=>{
      this.provincias=resp
      console.log(resp)

    });

    this.getProfesiones()
    this.getNivelesEstudios()

    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/representantes/').subscribe((doc:any)=>{
        this.representantes=doc;
        console.log(this.representantes)
    })

    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/userusuario/', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Hi ${res.idusuario}`;
        this.id=res.idusuario
        this.usuarioActual=res;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );
    
  }
  
  formSolicitud: FormGroup = this.form.group({
    profesiones_idprofesiones:["",[Validators.required]],
    aniosexperiencia: ["",[Validators.required]],
    rangoedad: ["",[Validators.required]],
    experticia: ["",[Validators.required]],
    sueldo: ["",[Validators.required]],
    fechainicio: ["",[Validators.required]],
    fechacierre: ["",[Validators.required]],
    cargo: ["",[Validators.required]],
    tiposolicitud_idtiposolicitud: 1,
    estado_idestado: 1,
    representante_idrepresentante: 1,
    descripcioncargo: ["",[Validators.required]],
    ciudad_idciudad: ["",[Validators.required]],
    provincia_idprovincia: ["",[Validators.required]],
    nivelestudios_idnivelestudios:["",[Validators.required, ]],
    jornada: ["",[Validators.required]],
    discapacidad: ["",[Validators.required]],
    posibilidadviajar:["",[Validators.required,Validators.maxLength(2),Validators.pattern("(si|no)+")]],
    posibilidadcambioresidencia:["",[Validators.required,Validators.maxLength(2),Validators.pattern("(si|no)+")]],
    licencia: ["",[Validators.required]],
    idiomas: ["",[Validators.required]]
  })



  crear(){
    if(this.formSolicitud.invalid) {
      return Object.values(this.formSolicitud.controls).forEach(control=>{
        control.markAsTouched();
      })
    }

    for(let rep of this.representantes){
      //console.log("REEEP",rep.idrepresentanteempresa)
      if(rep.usuario_idusuario== this.id){
        this.formSolicitud.patchValue({
          representante_idrepresentante: rep.idrepresentanteempresa, 
          
        });
        //console.log(rep.idrepresentanteempresa)
      }
    }
  
      console.log(this.formSolicitud.value);
      this.httpClient.post('https://agencialaboralproyecto.pythonanywhere.com/api/solicitudes/', this.formSolicitud.value).subscribe(
        resp => console.log(resp),
        err => console.log(err)
  
      );
    
    
    alert('SOLICITUD CREADA')
  }
  
  campoEsValido( campo: string){
    return this.formSolicitud.controls[campo].errors  && this.formSolicitud.controls[campo].touched;
  }


  getProfesiones(){
    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/profesiones/').subscribe((doc:any)=>{
      this.profesiones=doc;
    console.log("getprofesiones",this.profesiones)
    })
  }

  getNivelesEstudios(){
    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/nivelestudios/').subscribe((nivel:any)=>{
    this.niveles=nivel;
    console.log(this.niveles)
    })
  }




  validarFechainicio(){
    
    let fechaNacimiento=this.formSolicitud.controls['fechainicio'].value
    console.log(fechaNacimiento, new Date().toISOString().split('T')[0])
    let fechaActual=new Date().toISOString().split('T')[0]  
    

    if(fechaActual<=this.formSolicitud.controls['fechainicio'].value){
      this.fechaCorrectaInicio=true;
      
      console.log("entra")
    }else{
      this.fechaCorrectaInicio=false;

    }

  }


  validarFechacierre(){
    
    
    let fechaNacimiento=this.formSolicitud.controls['fechacierre'].value
    console.log(fechaNacimiento, new Date().toISOString().split('T')[0])
    let fechaActual=new Date().toISOString().split('T')[0]  
    

    if(fechaActual<=this.formSolicitud.controls['fechacierre'].value){
      this.fechaCorrectaCierre=true;
      
      console.log("entra")
    }
    else{
      this.fechaCorrectaCierre=false;

    }

  }
}
