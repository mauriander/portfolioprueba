import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
URL="http://localhost:8080/";

  constructor(private http: HttpClient) { }

  nuevaSkill(skill: Skill):Observable<Skill>{
return this.http.post<Skill>(this.URL+"new/skill",skill);
  }
  
  borrarSkill(skill: Skill): Observable<any> {
    const y=skill.id;
    return this.http.delete(this.URL + "eliminar/skill/" + y);
  }

  verSkills():Observable<Skill[]>{
    
    return this.http.get<Skill[]>(this.URL + "ver/skills");
  }

  editarSkill(skill: Skill): Observable<Skill> {
    
    return this.http.put<Skill>(this.URL + "editar/skill/", skill);
  }

 

}
