import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario.model';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  
  form:FormGroup;
  //loginForm: any;


  //construcctor formbyuilder
  constructor(private formBuilder: FormBuilder, private autenticationService: AutenticacionService, private ruta:Router, private http:HttpClient) {
      
    //copiamos 'accesstoken' insertamo como un JSON
    this.form=this.formBuilder.group({
      email: new FormControl   ('',[Validators.required,Validators.email]),
      password:new FormControl ('',[Validators.required,Validators.minLength(8)]),
      /*deviceInfo:this.formBuilder.group({ 
        deviceId: ["17867868768"],
        deviceType: ["DEVICE_TYPE_ANDROID"],
        notificationToken:["67657575eececc34"] 
       })*/

    });


   }

   
   ngOnInit(): void {
  }
  /*
  login3(){
    let usuar:Usuario={
      email: this.form.value.email,
      password: this.form.value.pass,
      
    }
    this.autenticationService.login3(usuar)
    
  }*/
  
  get Email(){
    return this.form.get('email');
  }

  
  get Password(){
    return this.form.get('password');
  }
/*
  login(event:Event){
    alert("entro al de Autenticacion debo paserle informacion credencial a la API LOGIN");
     event.preventDefault;
    this.autenticationService.IniciarSesion(this.form.value).subscribe(data=>{
     // this.autenticationService.login(this.form.get('email')?.value, this.form.get('password')?.value).subscribe(data=>{
      //alert("DATA: "+JSON.stringify(data))  ;
      console.log("DATA: " + JSON.stringify(data));
      //Y lo mando a portfolio
      this.ruta.navigate(['/portfolio']);

    })

  }
 */


  //con este metodo enviamos informacion credencial a la APi
  onEnviar(event:Event){
    alert("entro al de Autenticacion debo paserle informacion credencial a la API On envibar");
     event.preventDefault;
    this.autenticationService.IniciarSesion(this.form.value).subscribe(data=>{
     // this.autenticationService.login(this.form.get('email')?.value, this.form.get('password')?.value).subscribe(data=>{
      //alert("DATA: "+JSON.stringify(data))  ;
      console.log("DATA DE ON ENVIAR: " + JSON.stringify(data));
      //Y lo mando a portfolio
      this.ruta.navigate(['/portfolio']);

    })

  }
 
 

  






}
