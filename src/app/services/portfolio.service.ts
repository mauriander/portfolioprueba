import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url="https://backendargprogprueba.herokuapp.com/persona/9";
  constructor(private http:HttpClient) { }

/*
  obtenerDatos():Observable <any>{
return this.http.get<any>(this.url+"persona")

  }*/
//hardcodeado
  obtenerDatos():Observable<any>{
   // console.log(this.url);

    //return this.http.get("./assets/data/data.json");
    return this.http.get<any>(this.url);
    
      }
}
