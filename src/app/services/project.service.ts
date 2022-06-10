import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';

import { Proyecto } from '../model/proyecto.model';
const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
//private apiUrl='http://localhost:5000/projects/';
private apiUrl="http://localhost:8080/";


  constructor(private http:HttpClient) { }


  getProjects():Observable<Proyecto[]>{
     return this.http.get<Proyecto[]>(this.apiUrl+"ver/proyectos");
  }

  addProject(project: Proyecto):Observable<Proyecto> {
    return this.http.post<Proyecto>(this.apiUrl+"new/proyecto",project, httpOptions)
  }

    deleteProject(project: Proyecto):Observable<Proyecto> { 
      const y=project.id;
      const url=this.apiUrl+"eliminar/proyecto/"+y;
      return this.http.delete<Proyecto>(url);

    }
}
