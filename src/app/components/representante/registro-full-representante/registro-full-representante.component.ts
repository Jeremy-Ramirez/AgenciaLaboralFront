import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-registro-full-representante',
  templateUrl: './registro-full-representante.component.html',
  styleUrls: ['./registro-full-representante.component.css']
})
export class RegistroFullRepresentanteComponent implements OnInit {

  genero:any[]=[];
  tipoDocumento:any[]=[];
  provincia:any[]=[];
  ciudad:any[]=[];
  usuarios:any[]=[];
  estadoCivil: any[]=[];

  correo:any='';
  id:'';
  message = '';
  usuarioActual: any;
  hide: boolean = true;

  seleccionado:string;
  seleccionuser:string;
  nombredoc:any;

  

  miFormulario: FormGroup = this.fb.group({
    nombreusuario: [""],
    contrasenia:[""],
    //tipodocumento_idtipodocumento: ["", [ Validators.pattern("^[0-9]{10}$")]],
    //nodocumento:["",[ Validators.minLength(10), Validators.maxLength(10)]],
    //nombre: [""],
    //apellido: [""],
    //correo:["", [ Validators.email]],
    telefono: ["", [Validators.maxLength(10), Validators.minLength(9), Validators.pattern("^[0-9-+]{9,10}$")]],
    direccion: [""],
    estado_idestado: 1,
    genero_idgenero:[""],
    rol_idrol: 1,
    estadocivil_idestadocivil: [""],
    provincia_idprovincia:[""],
    ciudad_idciudad:[""],
    //confirmacion:["", [Validators.required]],

  })

  constructor(private fb: FormBuilder, private http: HttpClient, private rutaActiva: ActivatedRoute) {
    //this.getUsuarios();
    
  }
  
  campoEsValido( campo: string){
    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }


  getTipodocumento(){
    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/tipodocumento/').subscribe((doc:any)=>{
      this.tipoDocumento=doc;
    console.log(this.tipoDocumento)
    })
  }

  getEstadoCivil(){
    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/estadocivils/').subscribe((doc:any)=>{
      this.estadoCivil=doc;
    console.log(this.estadoCivil)
    })
  }

  getGenero(){
    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/genero/').subscribe((resp:any)=>{
      this.genero=resp
      //console.log(resp)
     console.log(this.genero)

    },
    err => console.error(err),
    )
  }

  getProvincias(){
    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/provincias/').subscribe((resp:any)=>{
    this.provincia=resp
    console.log(this.provincia)
    })
  }

  getCiudades(){
    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/ciudades/').subscribe((resp:any)=>{
    this.ciudad=resp
    console.log(this.ciudad)
    })
  }
  /*getUsuarios(){
    this.http.get('http://127.0.0.1:8000/api/usuarios/').subscribe((doc:any)=>{
      this.usuarios=doc
      this.usuarios.forEach(element => {
        if(element.id===this.id){
            this.correo=element.correo;
        }
      });
    })
  }*/

  createUsuario(){
    console.log(this.miFormulario.value);
    this.http.post('https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/', this.miFormulario.value).subscribe(
      resp => console.log(resp),
      err => console.log(err)
    )
  }

  updateUsuario() {
    //this.correo=this.miFormulario.get("correo").value;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.patch<any>("https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/"+this.id,this.miFormulario.value,{headers: headers}).subscribe(
      resp => console.log(resp),
      err => console.log(err)
        );

    alert('INFORMACI??N ACTUALIZADA');
  }

  public register() {
    const user = this.miFormulario.value;
    console.log(user);
  }

  obtenerNumero(){
    for( let doc of this.tipoDocumento){
      console.log(doc.idtipodocumento)
      if(doc.idtipodocumento == this.usuarioActual.tipodocumento_idtipodocumento)
        this.nombredoc=  doc.descripcion;
    }
  }




  ngOnInit(): void {
    /*this.rutaActiva.params.subscribe(
      (params:  Params) => {
        this.id = params.id;
      }
    )*/

    this.getGenero();
    this.getTipodocumento();
    this.getProvincias();
    this.getCiudades();
    this.getEstadoCivil();

    /*setTimeout(()=>{ 
      this.obtenerNumero()


    
    }, 3000);*/

    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/userusuario/', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Hi ${res.idusuario}`;
        this.id=res.idusuario
        this.usuarioActual=res;
        for( let doc of this.tipoDocumento){
          console.log(doc.idtipodocumento)
          if(doc.idtipodocumento == this.usuarioActual.tipodocumento_idtipodocumento)
            this.nombredoc=  doc.descripcion;
        }
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );

    //this.getUsuarios();
  }
  show() {
    this.hide = !this.hide;
  }

}
