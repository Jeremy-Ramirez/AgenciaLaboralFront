import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Emitters} from '../emitters/emitters';
@Component({
  selector: 'app-sesion-empresa',
  templateUrl: './sesion-empresa.component.html',
  styleUrls: ['./sesion-empresa.component.css']
})
export class SesionEmpresaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user/', {withCredentials: true}).subscribe(
      (res: any) => {
        Emitters.authEmitter.emit(true);
      },
      err => {
        Emitters.authEmitter.emit(false);
      }
    );
  }

}
