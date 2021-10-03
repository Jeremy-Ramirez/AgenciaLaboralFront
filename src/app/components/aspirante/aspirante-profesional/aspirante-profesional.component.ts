import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfesionesService } from '../../../servicios/profesiones.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aspirante-profesional',
  templateUrl: './aspirante-profesional.component.html',
  styleUrls: ['./aspirante-profesional.component.css']
})
export class AspiranteProfesionalComponent implements OnInit {


  file: any;

  profesiones:any[]=[];

  constructor(private fb: FormBuilder,private _profesiones:ProfesionesService,private http:HttpClient) { }


 
  miFormulario: FormGroup= this.fb.group({
    
    numeroHijos: ["", [Validators.required]],
    experienciaLaboral: ["", [Validators.required]],
    campoLaboral:["",[Validators.required]],
    experticia:["",[Validators.required]],
    videoPresentacion:["",[Validators.required]],
    aniosExperiencia:["",[Validators.required]],
    fechaNacimiento:["",[Validators.required]],
    posibilidadViajar:["",[Validators.required]],
    profesiones_idprofesiones:["",[Validators.required]],
    usuario_idusuario:8,
  })



 
  ngOnInit(): void {
   
    this._profesiones.getProfesiones().subscribe((resp:any)=>{
      this.profesiones=resp;
      console.log(this.profesiones)
    })

  }

  guardar(){

   
  
    console.log(this.miFormulario.value);
    this.http.post('http://127.0.0.1:8000/api/aspirantes/', this.miFormulario.value).subscribe(
      resp => console.log(resp),
      err => console.log(err)

    )
    
  
  }
}
