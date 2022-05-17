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


  constructor(private http:HttpClient) { }


  getEducaciones():Observable<Educacion[]>{
     return this.http.get<Educacion[]>(this.apiUrl+"ver/educaciones");
  }

  addEducacion(educacion: Educacion):Observable<Educacion> {
    return this.http.post<Educacion>(this.apiUrl+"new/educacion",educacion,httpOptions);
  }

    deleteEducacion(educacion: Educacion):Observable<Educacion> { 
      const y=educacion.id;
      const url=this.apiUrl+"eliminar/educacion/"+y;
      return this.http.delete<Educacion>(url); 
   
     

}

}
