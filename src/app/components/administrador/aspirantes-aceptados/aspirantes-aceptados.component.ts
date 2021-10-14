import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aspirantes-aceptados',
  templateUrl: './aspirantes-aceptados.component.html',
  styleUrls: ['./aspirantes-aceptados.component.css']
})
export class AspirantesAceptadosComponent implements OnInit {

  usuarios: any[]=[];

  constructor( private http: HttpClient, private rutaActiva: ActivatedRoute) {
    this.getUsuarios();
  }


  getUsuarios(){
    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/').subscribe((doc:any)=>{
      this.usuarios=doc
      console.log(this.usuarios)

    })
  }

  ngOnInit(): void {

  }
}
