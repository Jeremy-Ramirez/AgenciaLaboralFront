import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aspirantes-nuevos',
  templateUrl: './aspirantes-nuevos.component.html',
  styleUrls: ['./aspirantes-nuevos.component.css']
})
export class AspirantesNuevosComponent implements OnInit {

  
  aspirantesNuevos: any[]=[];
  representantes: any[]=[];

  constructor( private http: HttpClient, private rutaActiva: ActivatedRoute) {
    this.getRepresentantes()
    this.getAspirantesNuevos();
  }
  
  getRepresentantes(){
    this.http.get('http://127.0.0.1:8000/api/representantes/').subscribe((doc:any)=>{
      this.representantes=doc
        console.log(this.representantes)

    })
  }

  getAspirantesNuevos(){
    this.http.get('http://127.0.0.1:8000/api/usuarios/').subscribe((doc:any)=>{
      doc.forEach(user => {
        this.representantes.forEach(rep=>{
          console.log("usuario",user.idusuario)
          console.log("representante",rep.usuario_idusuario)
          if(user.idusuario===rep.usuario_idusuario){
            this.aspirantesNuevos.push(user)
            console.log(this.aspirantesNuevos)
          }
        })
      });{

      }

    })
  }

  ngOnInit(): void {

  }

}
