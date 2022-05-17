import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import{Project} from '../Project'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona.model';
import { Proyecto } from 'src/app/model/proyecto.model';
import { PersonaService } from 'src/app/services/persona.service';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  mostrarForm: boolean = false;
@Output() onAddProject: EventEmitter<Proyecto>= new EventEmitter();
id: number=0;
nombre:string='';
descripcion_proyecto:string='';
url:string='';
tipo_tecnologia:string='';
id_localidad:number=0;
id_persona: number=0;
 persona!: Persona;
 @Output() btnClick= new EventEmitter;

form: FormGroup | undefined;

  constructor(private servicio:PersonaService) { }
  

  ngOnInit(): void {this.getPersona();}

  getPersona(){
    this.servicio.getPersona().subscribe(res=>{
      console.log(res); 
      this.persona=res;
    })

//alert(this.servicio.getPersona());
    }

  

  toogleForm(){
    this.mostrarForm=!this.mostrarForm;
  }

  onClick(){  this.btnClick.emit();}
  //Presionar el enter

  
  onSubmit(event: Event){
    if(this.descripcion_proyecto.length===0){
      alert("Agregar una descripcion al proyecto"+this.persona.id);
      
      return;
    }else if(this.url.length<6){
      alert("Agregar una url correcta al proyecto");

    }
    const newPj={
      id:this.id,
      nombre:this.nombre.toUpperCase(), 
      descripcion_proyecto: this.descripcion_proyecto,
      url:this.url.toLowerCase(), 
      tipo_tecnologia:this.tipo_tecnologia.toUpperCase(),
      persona:{id:9, localidad:{id:6}}
      
    
    };
    //alert("ID DE LA PERSONA"+this.persona.id+"ID localidad"+this.id_localidad);
      
    this.onAddProject.emit(newPj);
    alert("Emitio y llamo addproject"+newPj.id+"\n"+newPj.nombre+"\n"+newPj.descripcion_proyecto+"\n"+newPj.url+"\n"+newPj.tipo_tecnologia);
    

  }
  

}
