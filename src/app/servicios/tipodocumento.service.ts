import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {
  
  constructor(private httpClient:HttpClient) { 
    this.getTipodocumentos();
  }
  
  getTipodocumentos(){
    return this.httpClient.get('http://127.0.0.1:8000/api/tipodocumento/')
  }
}
