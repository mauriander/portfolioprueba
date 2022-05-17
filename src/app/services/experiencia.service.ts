
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';

import { Project } from '../components/Project';
import { Experiencia } from '../model/experiencia.model';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {
  private apiUrl='http://localhost:8080/';


  constructor(private http:HttpClient) { }


  getExperiences():Observable<Experiencia[]>{
     return this.http.get<Experiencia[]>(this.apiUrl+"ver/experiencias");
  }

  addExperience(experiencia: Experiencia):Observable<Experiencia> {
    return this.http.post<Experiencia>(this.apiUrl+"new/experiencia",experiencia, httpOptions)
  }

    deleteExperience(experiencia: Experiencia):Observable<Experiencia> { 
      const y=experiencia.id;
      const url=this.apiUrl+"eliminar/experiencia/"+y;
      return this.http.delete<Experiencia>(url);

    }

}
