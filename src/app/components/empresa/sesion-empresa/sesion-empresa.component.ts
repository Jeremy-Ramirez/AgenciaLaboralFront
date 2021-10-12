import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Emitters} from '../emitters/emitters';

import {EmpresaService} from '../../../servicios/empresa.service'
@Component({
  selector: 'app-sesion-empresa',
  templateUrl: './sesion-empresa.component.html',
  styleUrls: ['./sesion-empresa.component.css']
})
export class SesionEmpresaComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private _empresaService: EmpresaService) { }

  ngOnInit(): void {
<<<<<<< HEAD
    this._empresaService.loginEmpresa().subscribe((resp:any)=>{
      Emitters.authEmitter.emit(true);  
=======
    this.http.get('http://localhost:8000/api/userempresa/', {withCredentials: true}).subscribe(
      (res: any) => {
        console.log(res)
        Emitters.authEmitter.emit(true);
>>>>>>> b727e90ced10512aed16a7b7bba1ed95b1e22413
      },
      err => {
        Emitters.authEmitter.emit(false);
      });
    
  }

}
