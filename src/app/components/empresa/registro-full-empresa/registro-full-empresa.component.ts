import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TipodocumentoService} from '../../../servicios/tipodocumento.service'
import {TipopersonaService} from '../../../servicios/tipopersona.service'
import {TipoempresaService} from '../../../servicios/tipoempresa.service'
import {RamaactividadService} from '../../../servicios/ramaactividad.service'
import {ActividadeconomicaService} from '../../../servicios/actividadeconomica.service'
import {CiudadService} from '../../../servicios/ciudad.service'
import {ProvinciaService} from '../../../servicios/provincia.service'
import {SectorService} from '../../../servicios/sector.service'
import {EmpresaService} from '../../../servicios/empresa.service'
import {throwError} from 'rxjs';

@Component({
  selector: 'app-registro-full-empresa',
  templateUrl: './registro-full-empresa.component.html',
  styleUrls: ['./registro-full-empresa.component.css']
})
export class RegistroFullEmpresaComponent implements OnInit {
  tipopersonas:any[]=[]; 
  tipodocumentos:any[]=[];
  tipoempresas:any[]=[];
  ramaactividads:any[]=[];
  actividadeconomicas:any[]=[];
  ciudades:any[]=[];
  provincias: any[]=[];
  sectores: any[]=[];
  empresas: any []=[];
  new_empresa: any []=[];
  constructor(
    private _tipodocumentoService: TipodocumentoService,
    private _tipopersonaService: TipopersonaService,
    private _tipoempresaService: TipoempresaService,
    private _ramaactividadService: RamaactividadService,
    private _actividadeconomicaService: ActividadeconomicaService,
    private _ciudadService: CiudadService,
    private _provinciaService: ProvinciaService,
    private _sectorService: SectorService,
    private _empresaService: EmpresaService,
    private form: FormBuilder
    ) { 
      
  }
  
  ngOnInit() {
    this._tipodocumentoService.getTipodocumentos().subscribe((resp:any)=>{
      this.tipodocumentos=resp
      console.log(resp)

    });
    this._tipopersonaService.getTipopersonas().subscribe((resp:any)=>{
      this.tipopersonas=resp
      console.log(resp)

    });
    this._tipoempresaService.getTipoempresas().subscribe((resp:any)=>{
      this.tipoempresas=resp
      console.log(resp)

    });
    this._ramaactividadService.getRamaactividads().subscribe((resp:any)=>{
      this.ramaactividads=resp
      console.log(resp)

    });
    this._actividadeconomicaService.getActividadeconomicas().subscribe((resp:any)=>{
      this.actividadeconomicas=resp
      console.log(resp)

    });
    this._ciudadService.getCiudades().subscribe((resp:any)=>{
      this.ciudades=resp
      console.log(resp)

    });
    this._provinciaService.getProvincias().subscribe((resp:any)=>{
      this.provincias=resp
      console.log(resp)

    });
    this._sectorService.getSector().subscribe((resp:any)=>{
      this.sectores=resp
      console.log(resp)

    });
    
  }

  formEmpresa: FormGroup = this.form.group({
    
    idEmpresa: ["", [Validators.required]],
    ruc_cedula:["", [Validators.required, Validators.minLength(10)]],
    razonsocial:["",[Validators.required, Validators.minLength(13)]],
    nombrecomercial: ["", [Validators.required]],
    calleprincipal: ["", [Validators.required]],
    callesecundaria: ["", [Validators.required]],
    mz: ["", [Validators.required]],
    villa: ["", [Validators.required]],
    referencia: ["", [Validators.required]],
    paginaweb: ["", [Validators.required]],
    correoelectronico:["",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,3}$")]],
   
    celular:["",[Validators.required,Validators.minLength(10)]],
    telefonooficina:["",[Validators.required,Validators.minLength(10)]],
    contrasenia:["", [Validators.required]],
    //validators select
  })

  crear(){
    this._empresaService.create(this.new_empresa).subscribe(
      data => {
        this._empresaService.getEmpresas();
        return true;
      },
      error => {
        console.error('Error saving!');
        return throwError(error);
      }
   );

  }
  get idEmpresaNoValido(){
    return 0
  }
  get rucNoValido(){
    return 0
  }
  get razonNoValido(){
    return 0
  }
  get nombreNoValido(){
    return 0
  }
  get calleprincipalNoValido(){
    return 0
  }
  get callesecundariaNoValido(){
    return 0
  }
  get mzNoValido(){
    return 0
  }
  get villaNoValido(){
    return 0
  }
  get referenciaNoValido(){
    return 0
  }
  get celularNoValido(){
    return 0
  }
  get telefonooficinaNoValido(){
    return 0
  }
  get paginawebNoValido(){
    return 0
  }
  get correoelectronicoNoValido(){
    return 0
  }
  get contraseniaNoValido(){
    return 0
  }
  
  
}
