import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro-full-aspirante',
  templateUrl: './registro-full-aspirante.component.html',
  styleUrls: ['./registro-full-aspirante.component.css']
})
export class RegistroFullAspiranteComponent implements OnInit {

  
  generos:any[]=[];
  tipodocumentos:any[]=[];
  provincias:any[]=[];
  ciudades:any[]=[];

  seleccionado:string;
  seleccionuser:string;

  miFormulario: FormGroup = this.fb.group({
    tipoDocumento: ["", Validators.required],
    numDocumento:["",[Validators.required, Validators.minLength(10)]],
    nombres: ["", [Validators.required]],
    apellidos: ["", [Validators.required]],
    provincia:["", [Validators.required]],
    ciudad:["", [Validators.required]],
    correo:["",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,3}$")]],
    contraseña:["", [Validators.required]],
    confirmacion:["", [Validators.required]],
    genero:["", [Validators.required]],
  })

  constructor(private http:HttpClient,private fb: FormBuilder) { 

    this.getGenero();
    this.getTipodocumento();
    this.getProvincias();
    this.getCiudades();
  }

  ngOnInit(): void {
  }

get tipoDocumentoNoValido(){
  return this.miFormulario.get('tipoDocumento').invalid && this.miFormulario.get('tipoDocumento').touched
}
get numDocumentoNoValido(){
  return this.miFormulario.get('numDocumento').invalid && this.miFormulario.get('numDocumento').touched
}

get nombresNoValido(){
  return this.miFormulario.get('nombres').invalid && this.miFormulario.get('nombres').touched
}

get apellidosNoValido(){
  return this.miFormulario.get('apellidos').invalid && this.miFormulario.get('apellidos').touched
}

get provinciaNoValido(){
  return this.miFormulario.get('provincia').invalid && this.miFormulario.get('provincia').touched
}

get ciudadNoValido(){
  return this.miFormulario.get('ciudad').invalid && this.miFormulario.get('ciudad').touched
}

get correoNoValido(){
  return this.miFormulario.get('correo').invalid && this.miFormulario.get('correo').touched
}


get contraseñaNoValido(){
  return this.miFormulario.get('contraseña').invalid && this.miFormulario.get('contraseña').touched
}

get confirmacionNoValido(){
  return this.miFormulario.get('confirmacion').invalid && this.miFormulario.get('confirmacion').touched
}

get generoNoValido(){
  return this.miFormulario.get('genero').invalid && this.miFormulario.get('genero').touched
}





  getTipodocumento(){
    this.http.get('http://127.0.0.1:8000/api/tipodocumento/').subscribe((doc:any)=>{
      this.tipodocumentos=doc;
    console.log(doc)
    })
  }

  getGenero(){
    this.http.get('http://127.0.0.1:8000/api/genero/').subscribe((resp:any)=>{
      this.generos=resp
      //console.log(resp)
     console.log(this.generos)

    })
  }

  getProvincias(){
    this.http.get('http://127.0.0.1:8000/api/provincias/').subscribe((resp:any)=>{
    this.provincias=resp
    console.log(this.provincias)
    })
  }

  getCiudades(){
    this.http.get('http://127.0.0.1:8000/api/ciudades/').subscribe((resp:any)=>{
    this.ciudades=resp
    console.log(this.ciudades)
    })
  }

  
  guardar(){

    
    if(this.miFormulario.invalid) {
      return Object.values(this.miFormulario.controls).forEach(control=>{
        control.markAsTouched();
      })
    }

    console.log(this.miFormulario.value)

  }

}
