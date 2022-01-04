import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Emitters } from '../clases/emitters';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { NuevoPaqueteComponent } from '../nuevo-paquete/nuevo-paquete.component';
import { Subscription } from 'rxjs';
import { PaquetePagoService } from '../../../servicios/paquete-pago.service';
import { EditarPaqueteComponent } from '../editar-paquete/editar-paquete.component';


@Component({
  selector: 'app-paquete-pago',
  templateUrl: './paquete-pago.component.html',
  styleUrls: ['./paquete-pago.component.css']
})
export class PaquetePagoComponent implements OnInit {

  paquetes: any[]=[];
  suscription: Subscription;
  duracionHoras:any;
  duracionMeses:any;
  duracionPaquete: any[]=[];

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private router: Router,
    private paquetePagoService: PaquetePagoService,

    
  ) { }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(NuevoPaqueteComponent, {
      data: {}, 
      height: '800px',
      width: '1000px',
      
    });

    dialogo1.afterClosed().subscribe(art => {
    });
  }
  abrirDialogoEdicion(idPaquete){
    const dialogoEdicion = this.dialog.open(EditarPaqueteComponent,{
      data: {Paquete: idPaquete},
      height: '800px',
      width: '1000px'
    })
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }



  

  getPaquetePago(){
    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/paquetePago/').subscribe((doc:any)=>{
      this.paquetes=doc;
      console.log(this.paquetes)
      
      

      
    })
    
  }

  getDuracionPaquete(){
    this.http.get('https://agencialaboralproyecto.pythonanywhere.com/api/duracionpaquetes/').subscribe((duracionPaquete:any)=>{
      this.duracionPaquete=duracionPaquete;
      console.log(this.duracionPaquete)

      
    })
    
  }

  convertirDuracion(){
    

    for(let paquete of this.paquetes){
      for(let duracion of this.duracionPaquete){
        if(paquete.duracionpaquetes_idduracionpaquetes == duracion.idduracionpaquete){
          paquete.duracionpaquetes_idduracionpaquetes=duracion.descripcion
        }
      }
      
    }
    
  }

  ngOnInit(): void {
    this.getDuracionPaquete()
    this.getPaquetePago();
    this.suscription = this.paquetePagoService.refresh$.subscribe(()=>{
      this.ngOnInit()


    })
  }
  ngOnDestroy():void{
    this.suscription.unsubscribe();
    console.log('Observable cerrado');
  }


  eliminarPaquete(event: Event){
    if(confirm('¿Seguro desea eliminar este paquete de pago?')){
      for(let paquete of this.paquetes){
        if(paquete.idpaquetepago==event){
          this.paquetes.splice(this.paquetes.indexOf(item => item.idpaquetepago === event),1)
          this.paquetePagoService.deletePaquetePago(event).subscribe((doc:any)=>{
            alert("Paquete de pago eliminado")
           })
        }

      }
    }
  }
  

}
