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
    
    numerohijos: ["", [Validators.required]],
    experiencialaboral: ["", [Validators.required]],
    campolaboral:["",[Validators.required]],
    experticia:["",[Validators.required]],
    videopresentacion:["",[Validators.required]],
    aniosexperiencia:["",[Validators.required]],
    fechanacimiento:["",[Validators.required]],
    posibilidadviajar:["",[Validators.required]],
    profesiones_idprofesiones:["",[Validators.required]],
    usuario_idusuario:8,
  })



 
  ngOnInit(): void {
   
    this._profesiones.getProfesiones().subscribe((resp:any)=>{
      this.profesiones=resp;
      console.log(this.profesiones)
    })

  }
  handleFileInput(event: Event){

    this.file=(<HTMLInputElement>event.target).files[0];
    console.log("archivo", this.file)

  
 }

  guardar(){

    let formData= new FormData();
    formData.append('numerohijos',this.miFormulario.controls['numerohijos'].value)
    formData.append('experiencialaboral',this.miFormulario.controls['experiencialaboral'].value)
    formData.append('campolaboral',this.miFormulario.controls['campolaboral'].value)
    formData.append('experticia',this.miFormulario.controls['experticia'].value)
    formData.append('aniosexperiencia',this.miFormulario.controls['aniosexperiencia'].value)
    formData.append('fechanacimiento',this.miFormulario.controls['fechanacimiento'].value)
    formData.append('videopresentacion',this.file)
    formData.append('posibilidadviajar',this.miFormulario.controls['posibilidadviajar'].value)
    formData.append('profesiones_idprofesiones',this.miFormulario.controls['profesiones_idprofesiones'].value)
    formData.append('usuario_idusuario',this.miFormulario.controls['usuario_idusuario'].value)

    console.log(this.miFormulario.value);
    this.http.post('http://127.0.0.1:8000/api/aspirantes/', formData).subscribe(
      resp => console.log(resp),
      err => console.log(err)

    )
    
  
  }
}
