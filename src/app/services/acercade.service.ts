


import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import{Acercade} from '../model/acercade';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

 private apiUrl="https://backendargprogprueba.herokuapp.com/";


 
 URL="https://backendargprogprueba.herokuapp.com/";
  constructor(private http:HttpClient) { }


  verAcercades():Observable<Acercade[]>{
     return this.http.get<Acercade[]>(this.URL+"ver/acercades");
  }

  nuevoAcercade(project: Acercade):Observable<Acercade> {
    return this.http.post<Acercade>(this.apiUrl+"new/acercade",project, httpOptions)
  }

    eliminarAcercade(project: Acercade):Observable<Acercade> { 
      const y=project.id;
      const url=this.apiUrl+"eliminar/acercade/"+y;
      return this.http.delete<Acercade>(url);

    }

    buscarAcercde(id: any):Observable<Acercade>{
      const y=id;
        return this.http.get<Acercade>(this.URL + "buscar/acercade/"+y);
          }

    editarAcercade(project: Acercade):Observable<Acercade> {
      alert("Llego a servicio de editar acercade"+ project.id);
  const y=project.id;
    return this.http.put<Acercade>(this.URL+"editar/acercade/"+y,project,httpOptions);}

    
  

}
