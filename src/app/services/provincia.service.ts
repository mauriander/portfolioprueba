import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Provincia } from '../model/provincia.model';
const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  URL="https://backendargprogprueba.herokuapp.com/";;
   private apiUrl="https://backendargprogprueba.herokuapp.com/";
    constructor(private http: HttpClient) { }
  
    nuevaProvincia(provincia: Provincia):Observable<Provincia>{
  return this.http.post<Provincia>(this.URL+"new/provincia",provincia,httpOptions);
      
  
    }
    buscarProvincia(id: number):Observable<Provincia>{
      const y=id;
        return this.http.get<Provincia>(this.URL + "buscar/provincia/"+y);
          }

          
    borrarProvincia(provincia: Provincia): Observable<Provincia> {
      const y=provincia.id;
      
      const urle=this.apiUrl+"eliminar/provincia/"+y;
      return this.http.delete<Provincia>(urle); 
    }
  
    verProvincias():Observable<Provincia[]>{
      
      return this.http.get<Provincia[]>(this.URL + "ver/provincias");
    }
  
    editarProvincia(provincia: Provincia): Observable<Provincia> {
      const y=provincia.id;
      return this.http.put<Provincia>(this.URL + "editar/provincia/"+y, provincia,httpOptions);
    }
  
  }