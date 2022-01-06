import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NivelEstudiosService {

  constructor(private httpClient:HttpClient) {
    this.getNivel();

   }


   getNivel(){
    return this.httpClient.get('http://agencialaboralproyecto.pythonanywhere.com/api/nivelestudios/')
  }
}
