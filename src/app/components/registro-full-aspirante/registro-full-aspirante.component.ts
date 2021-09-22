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
    correo:["", [Validators.required]],
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

    /*
    if(this.miFormulario.invalid) {
      return Object.values(this.miFormulario.controls).forEach(control=>{
        control.markAsTouched();
      })
    }*/

    console.log(this.miFormulario.value)

  }

}
