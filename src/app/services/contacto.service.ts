import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formMail } from '../model/formMail';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  //private apiURL = 'https://api-portfolio-maxivr.herokuapp.com/persona/sendMail'
  private apiURL = ''

  constructor(private http:HttpClient) { }

  sendMail(mail : formMail): Observable<any> { 
    console.log (mail);
    let json =  JSON.stringify(mail);
    console.log(json);
   // return this.http.post<any>(this.apiURL, json, httpOption);
   return this.http.post<any>(this.apiURL, json);
  }
}
