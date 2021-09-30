import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TipopersonaService {
  
  constructor(private http:HttpClient,private fb: FormBuilder) { 
    this.getTipopersonas();
  }
  
  getTipopersonas(){
    return this.http.get('http://127.0.0.1:8000/api/tipopersona/')
  }
}
