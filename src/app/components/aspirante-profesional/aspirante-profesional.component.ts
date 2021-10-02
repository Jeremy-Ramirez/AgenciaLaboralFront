import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfesionesService } from '../../servicios/profesiones.service';

@Component({
  selector: 'app-aspirante-profesional',
  templateUrl: './aspirante-profesional.component.html',
  styleUrls: ['./aspirante-profesional.component.css']
})
export class AspiranteProfesionalComponent implements OnInit {


  file: any;

  profesiones:any[]=[];

  constructor(private fb: FormBuilder,private _profesiones:ProfesionesService) { }


  miFormulario: FormGroup= this.fb.group({

    numeroHijos: ["", [Validators.required]],
    experienciaLaboral: ["", [Validators.required]],
    campoLaboral:["",[Validators.required]],
    experticia:["",[Validators.required]],
    videoPresentacion:["",[Validators.required]],
    aniosExperiencia:["",[Validators.required]],
    fechaNacimiento:["",[Validators.required]],
    posibilidadViajar:["",[Validators.required]],
    Profesiones_idProfesiones:["",[Validators.required]],
    usuario_idusuario:["",[Validators.required]],
  })



  ngOnInit(): void {
   
    this._profesiones.getProfesiones().subscribe((resp:any)=>{
      this.profesiones=resp;
      console.log(this.profesiones)
    })

  }

  guardar(){

    
  
      console.log(this.miFormulario.value);
      
    
  
  }
}
