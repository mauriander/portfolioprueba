import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  
   form:FormGroup;


  //construcctor formbyuilder
  constructor(private formBuilder: FormBuilder, private autenticationService: AutenticacionService, private ruta:Router) {
      
    //copiamos 'accesstoken' insertamo como un JSON
    this.form=this.formBuilder.group({
      email:    ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]],

    });


   }

   
   ngOnInit(): void {
  }

  
  get Email(){
    return this.form.get('email');
  }

  
  get Password(){
    return this.form.get('password');
  }
  login(){
    
    //escribir
    //alert("entro al login");
    this.ruta.navigate(['/portfolio']);
    



  }



  //con este metodo enviamos informacion credencial a la APi
  onEnviar(event:Event){
    alert("entro al de Autenticacion debo paserle informacion credencial a la API");
     event.preventDefault;
   // this.autenticationService.IniciarSession(this.form.value).subscribe(data=>{

    //  alert("DATA: "+JSON.stringify(data))  ;
      //Y lo mando a portfolio
      //this.ruta.navigate(['/portfolio']);

    //})

  }


}
