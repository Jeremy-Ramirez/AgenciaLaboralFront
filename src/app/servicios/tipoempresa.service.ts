import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoempresaService {

  constructor(private httpClient:HttpClient) { 
    this.getTipoempresas();
  }
  
  getTipoempresas(){
    return this.httpClient.get('http://127.0.0.1:8000/api/tipoempresas/')
  }
}
