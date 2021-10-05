import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import {SolicitudService} from '../../../servicios/solicitud.service'
@Component({
  selector: 'app-oferta-empleo',
  templateUrl: './oferta-empleo.component.html',
  styleUrls: ['./oferta-empleo.component.css']
})
export class OfertaEmpleoComponent implements OnInit {
  solicitudes:any[]=[]; 
  @ViewChild('empleos') solicitudesHt: ElementRef;
  inner:string='';
  constructor(
    private _solicitudesService: SolicitudService,
    ) { 
      
  }
  
  ngOnInit() {
    this._solicitudesService.getSolicitudes().subscribe((resp:any)=>{
      this.solicitudes=resp
      this.addhtml()
      console.log(resp)

    });
  
    
  }
  addhtml(){
	  for(let i=0;i<this.solicitudes.length;i++){
		  this.inner+=`
      <div class="empleo">
      <h2 ><a >${this.solicitudes[i].cargo}</a></h2>                
      <p>Descripcion, Ciudad, Provincia</p>
      <div class="card" style="width:400px">
      <div class="card-body">
          <p class="card-text">${this.solicitudes[i].descripcioncargo}</p>
          <button type="button">Aceptar</button>            
          <button type="button">Eliminar</button>
      </div>
      </div>
  </div>

  `;
	  }

	  this.solicitudesHt.nativeElement.innerHTML=this.inner;
	  
  }
}
