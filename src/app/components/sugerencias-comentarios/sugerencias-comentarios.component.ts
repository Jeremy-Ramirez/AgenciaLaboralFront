import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sugerencias-comentarios',
  templateUrl: './sugerencias-comentarios.component.html',
  styleUrls: ['./sugerencias-comentarios.component.css']
})
export class SugerenciasComentariosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    sugerencia: ["", Validators.required],
    imagen: [""]

  })

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors
    && this.miFormulario.controls[campo].touched;
    
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
