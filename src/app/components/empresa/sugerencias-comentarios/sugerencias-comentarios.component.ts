import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-sugerencias-comentarios',
  templateUrl: './sugerencias-comentarios.component.html',
  styleUrls: ['./sugerencias-comentarios.component.css']
})
export class SugerenciasComentariosComponent implements OnInit {
  imagenValida: boolean=true;
  sugerencias:any[]=[];
  correo:any='';
  id:'';
  file: any;
  message = '';


  ngOnInit(): void {
    /*this.rutaActiva.params.subscribe(
      (params:  Params) => {
        this.id = params.id;
      }
    )*/

    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/userempresa/', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Hi ${res.idempresa}`;
        this.id=res.idempresa
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );
  }

  miFormulario: FormGroup = this.fb.group({
    titulo: ["", Validators.required],
    descripcion: ["", Validators.required],
    empresa_idempresa: 1,
    imagen: ["", [Validators.pattern("^.*\.(jpg|jpeg|png|jfif)$")]],
    

  })

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors
    && this.miFormulario.controls[campo].touched;
    
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private rutaActiva: ActivatedRoute) {
   }
   
   handleFileInput(event: Event){

    if((<HTMLInputElement>event.target).files[0].size>2000000){
      this.imagenValida=false;
      //alert('El archivo supera los 6Mb.');
    }else{
      this.imagenValida=true;
      this.file=(<HTMLInputElement>event.target).files[0];
      console.log("archivo", this.file)
    }
    
      

    
   }
  createSugerencia(){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.controls['imagen'].value)
    let headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    let options = {headers: headers};
    let formData = new FormData();
    formData.append('titulo',this.miFormulario.controls['titulo'].value)
    formData.append('descripcion',this.miFormulario.controls['descripcion'].value)
    if(this.file!=null){
      formData.append('imagen',this.file)
    }
    formData.append('empresa_idempresa',this.id)
    
    this.http.post('https://agencialaboralproyecto.pythonanywhere.com/api/sugerenciasEmpresa/', formData,options).subscribe(
      resp => console.log(resp),
      err => console.log(err)
    )
    alert('SUGERENCIA ENVIADA')
    
    this.miFormulario.reset();
    
    

  }

  

}

