import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
 url="http://localhost:4200";
  currentUserubject: BehaviorSubject<any>;
  //currentUserubject: BehaviorSubject<any> | undefined;
  constructor(private htttp:HttpClient) { 
    this.currentUserubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
    console.log("el servicio de autentucacion al menos llega hasta aca");
    alert(    "el servicio de autentucacion al menos llega hasta aca");
  }


  IniciarSession(credenciales:any):Observable<any>{

return this.htttp.post(this.url,credenciales).pipe(map(data=>{
  //storage almacena datos de forma local local storage y session storage...Indefinida y session minetras este abierta luego se borra
  sessionStorage.setItem('currentUser', JSON.stringify(data));
  return data}))

  }
}
/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private url= "/api/user/";
private url2="/api/";

  constructor(private http:HttpClient, private cookies:CookieService) { }

  login(Users:any): Observable<any>{
    return this.http.post(this.url+ "login" , Users);
  }

  getUser(id:number):Observable<any>{
    return this.http.get(this.url+"/"+id);
  }

  //TOKEN

  setToken(token:string){
    this.cookies.set("token", token);
  }

  getToken(){
    return this.cookies.get("token");
  }

  deleteToken(){
    this.cookies.delete("token");
  }

  getUserLogged(){
    const token = this.getToken();
    return token;
  }

  obtenerDatos():Observable<any>{
    return this.http.get(this.url+"/ver");
  }
*/