import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';
const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
 
  private apiUrl='http://localhost:8080/';
  //private apiUrl='

  constructor(private http:HttpClient) { }


  getEducaciones():Observable<Educacion[]>{
     return this.http.get<Educacion[]>(this.apiUrl+'ver/educaciones');
  }

  addEducacion(educacion: Educacion):Observable<Educacion> {
    return this.http.post<Educacion>(this.apiUrl+"new/educacion",educacion,httpOptions);
  }

    deleteEducacion(educacion: Educacion):Observable<Educacion> { 
      const y=educacion.id;
      const url=this.apiUrl+"eliminar/educacion/"+y;
      return this.http.delete<Educacion>(url); 
}
  editEducacion(educacion: Educacion):Observable<Educacion> {
    alert("Llego a servicio de editar educacion"+ educacion.id + "y su nombre "+educacion.nombre);
const y=educacion.id;
  return this.http.put<Educacion>(this.apiUrl+"editar/educacion/"+y,educacion,httpOptions);}

 edit2Educacion(educacion: Educacion):Observable<Educacion> {
   alert("Llego a servicio de editar educacion"+ educacion.id + "y su nombre "+educacion.nombre);
  
  return this.http.put<Educacion>(this.apiUrl+"edit/educacion/",educacion,httpOptions);
}



}
