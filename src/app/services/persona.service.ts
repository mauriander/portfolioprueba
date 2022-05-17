
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';
import { faArrowsLeftRightToLine } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL="http://localhost:8080/persona/9";

  constructor(private http: HttpClient) { }

  getPersona():Observable<Persona>{
    //alert(this.http.get<Persona>(this.URL));

    return this.http.get<Persona>(this.URL);
     
  }
  
}




 