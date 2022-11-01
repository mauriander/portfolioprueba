import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaEducacion } from '../model/personaeducacion.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaeducacionService {
  private apiUrl='https://backendargprogprueba.herokuapp.com/';

  constructor(private http:HttpClient) { }


  getPersonaEducaciones():Observable<PersonaEducacion[]>{
     return this.http.get<PersonaEducacion[]>(this.apiUrl+"ver/personaeducaciones");
  }

}
