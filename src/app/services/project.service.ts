import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { Project } from '../components/Project';
const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
private apiUrl='http://localhost:5000/projects/';



  constructor(private http:HttpClient) { }


  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(this.apiUrl);
  }

  addProject(project: Project):Observable<Project> {
    return this.http.post<Project>(this.apiUrl,project, httpOptions)
  }

    deleteProject(project: Project):Observable<Project> { 
      const url=this.apiUrl+project.id;
      return this.http.delete<Project>(url);

    }
}
