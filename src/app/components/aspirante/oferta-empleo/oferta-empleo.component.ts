import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import {AspirantessolicitadosService} from '../../../servicios/aspirantessolicitados.service'

@Component({
  selector: 'app-oferta-empleo',
  templateUrl: './oferta-empleo.component.html',
  styleUrls: ['./oferta-empleo.component.css']
})
export class OfertaEmpleoComponent implements OnInit {
  aspirantessolicitados:any[]=[]; 
  //obtener el token del usuario
  idAspirante = 1;
  @ViewChild('empleos') aspirantessolicitadosHt: ElementRef;
  inner:string='';
  constructor(
    private _aspirantessolicitadosService: AspirantessolicitadosService,
    ) { 
      
  }
  
  ngOnInit() {
    this._aspirantessolicitadosService.getAspirantessolicitados().subscribe((resp:any)=>{
      this.aspirantessolicitados=resp
      this.addhtml()
      console.log(resp)

    });
  
    
  }
  addhtml(){
	  for(let i=0;i<this.aspirantessolicitados.length;i++){
      if(this.aspirantessolicitados[i].aspirante_idaspirante.idaspirante==this.idAspirante){
        this.inner+=`
        <div class="empleo" >
        <h2 ><a >${this.aspirantessolicitados[i].solicitud_idsolicitud.profesion}</a></h2>                
        <p>Descripcion, Ciudad, Provincia</p>
        <div class="card" style="width:400px">
        <div class="card-body"> 
            <p class="card-text">${this.aspirantessolicitados[i].solicitud_idsolicitud.descripcioncargo}</p>
            <p class="card-text">${this.aspirantessolicitados[i].solicitud_idsolicitud.representante_idrepresentante.empresa_idempresa.nombrecomercial}</p>
            <button type="button">Aceptar</button>            
            <button type="button">Eliminar</button>
        </div>
        </div>
    </div>
  
    `;
      }
		 
	  }

	  this.aspirantessolicitadosHt.nativeElement.innerHTML=this.inner;
	  
  }
  
}
