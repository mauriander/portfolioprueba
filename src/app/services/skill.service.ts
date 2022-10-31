import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL="https://backendargprogprueba.herokuapp.com/";;
  private apiUrl="https://backendargprogprueba.herokuapp.com/";
  constructor(private http: HttpClient) { }

  nuevaSkill(skill: Skill):Observable<Skill>{
return this.http.post<Skill>(this.URL+"new/skill",skill,httpOptions);


  }


  
  
  borrarSkill(skill: Skill): Observable<Skill> {
    const y=skill.id;
    
    //return this.http.delete(this.URL + "eliminar/skill/" + y);
    
    const urle=this.apiUrl+"eliminar/skill/"+y;
    return this.http.delete<Skill>(urle); 
  }

  verSkills():Observable<Skill[]>{
    
    return this.http.get<Skill[]>(this.URL + "ver/skills");
  }

  editarSkill(skill: Skill): Observable<Skill> {
    const y=skill.id;
    return this.http.put<Skill>(this.URL + "editar/skill/"+y, skill,httpOptions);
  }

 

}
