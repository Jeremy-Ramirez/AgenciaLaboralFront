import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sesion-aspirante',
  templateUrl: './sesion-aspirante.component.html',
  styleUrls: ['./sesion-aspirante.component.css']
})
export class SesionAspiranteComponent implements OnInit {
  id='';
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(
      (params:  Params) => {
        this.id = params.id;
      }
    )
  }


}
