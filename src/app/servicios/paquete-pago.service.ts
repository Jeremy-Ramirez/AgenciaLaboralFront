import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaquetePagoService {

  private _refresh$ = new Subject<void>();
  private API_PaquetePago = "https://agencialaboralproyecto.pythonanywhere.com/api/paquetePago/";

  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }
  
  public getPaquetePago(): Observable<any>{
    return this.http.get(this.API_PaquetePago);

  }

  public postPaquetePago(paquete: any): Observable<any>{
    return this.http.post(this.API_PaquetePago, paquete)
    .pipe(
      tap(()=>{
        console.log("Entró a tap")
        this._refresh$.next();
      })
    );

  }

  public deletePaquetePago(paquete: any): Observable<any>{
    return this.http.delete(this.API_PaquetePago+paquete)
    .pipe(
      tap(()=>{
        console.log("Entró a tap")
        this._refresh$.next();
      })
    );

  }



  
}
