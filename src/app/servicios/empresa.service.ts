import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private httpClient:HttpClient) { 
    this.getEmpresas();
  }
  
  getEmpresas(){
    return this.httpClient.get('http://127.0.0.1:8000/api/empresas/')
  }
  
  create(empresa) {    
    return this.httpClient.post('http://127.0.0.1:8000/api/empresas/', JSON.stringify(empresa));
  }

}
