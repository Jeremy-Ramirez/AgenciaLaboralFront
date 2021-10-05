import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-perfil-aspirante',
  templateUrl: './perfil-aspirante.component.html',
  styleUrls: ['./perfil-aspirante.component.css']
})
export class PerfilAspiranteComponent implements OnInit {

  constructor(private http:HttpClient,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAspirantes();
    this.getUsuarios();
  }

  aspirantes:any[]=[];
  usuarios:any[]=[];

  miFormulario: FormGroup= this.fb.group({
    
    numerohijos: ["", [Validators.required]],
    experiencialaboral: ["", [Validators.required]],
    campolaboral:["",[Validators.required]],
    experticia:["",[Validators.required]],
    videopresentacion:["",[Validators.required]],
    aniosexperiencia:["",[Validators.required]],
    fechanacimiento:["",[Validators.required]],
    posibilidadviajar:["",[Validators.required]],
    profesiones_idprofesiones:["",[Validators.required]],
    usuario_idusuario:1,
  })

  getAspirantes(){
    this.http.get('http://127.0.0.1:8000/api/aspirantes/').subscribe((resp:any)=>{
      this.aspirantes=resp;
      console.log(this.aspirantes)
    })
  }

  getUsuarios(){
    this.http.get('http://127.0.0.1:8000/api/usuarios/').subscribe((resp:any)=>{
      this.usuarios=resp;
      console.log(this.usuarios)
    })
  }

  

}
