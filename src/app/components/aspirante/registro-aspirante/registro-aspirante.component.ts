import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-registro-aspirante',
  templateUrl: './registro-aspirante.component.html',
  styleUrls: ['./registro-aspirante.component.css']
})


/*
@Injectable({
  providedIn: 'root'
})*/
export class RegistroAspiranteComponent implements OnInit {
  id='';
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type' : 'Application/json'
    })
  };
  constructor(private fb: FormBuilder, private http: HttpClient, private rutaActiva: ActivatedRoute, private router: Router){ }
  
  miFormulario: FormGroup = this.fb.group({
    correo: ["", Validators.required],
    contrasenia:["", [Validators.required]],
    

  })

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(
      (params:  Params) => {
        this.id = params.id;
      }
    )
  }

  login(){
    console.log(this.miFormulario.value);
    this.http.post('http://127.0.0.1:8000/api/login', this.miFormulario.getRawValue(),{withCredentials: true}).subscribe(
      (res: any)=>{
        console.log("IDDDDDDDD",res.idusuario)
        //setTimeout(function(){ 
          this.router.navigate( ['/aspirante/sesionAspirante/1']);
          //localStorage.setItem('auth_token', res.token);
         //}, 3000);
        
      },
    )
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

}