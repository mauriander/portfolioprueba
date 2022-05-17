import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPersonPraying } from '@fortawesome/free-solid-svg-icons';
//import { Skill } from 'src/app/model/skill.model';
import { Experiencia } from 'src/app/model/experiencia.model';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
  
  
  @Output() btnClick= new EventEmitter;
  @Output() onAddExperience: EventEmitter<Experiencia>= new EventEmitter();
 // id: number=0;
  //nombre:string='';
  //valor:number=0;
  mostrarForm: boolean=false;
  form: FormGroup;
 
  //descripcion: string='';
  //actual:number=0 ;
  //fechaFin:Date =new Date();
  //fechaIni:Date=new Date();
  persona!: Persona;
  

 
  


  constructor(private formBuilder: FormBuilder, private servicio: PersonaService) { 
    this.getPersona();
    this.form=this.formBuilder.group({
      id:[0],
      nombre:[""],
      descripcion:["", [Validators.required, Validators.min(1), Validators.max(100)]],
      fechaIni:[""],
      fechaFin:[""],
      actual:[0],
      persona:{id:0}
        });
    }


    ngOnInit(): void {}

    getPersona(){
      this.servicio.getPersona().subscribe(res=>{
        console.log(res); 
        this.persona=res;
      })
    
    }
  
/*
  getPersona(){
    this.servicio.getPersona().subscribe(res=>{
      console.log(res); 
      this.persona=res;
    })
  }
 */
    toogleForm(){
      this.mostrarForm=!this.mostrarForm;
    }

    onClick(){  this.btnClick.emit();}
/*
    setSkill(experience: Experiencia) {
      this.form.patchValue({
        id:this.id,
        nombre:this.nombre,
        descipcion:this.descripcion,
        fechaIni:this.fechaIni,
        fechaFin:this.fechaFin,
        actual:this.actual,
        persona:{id:9, localidad:{id:6}}
      });
      this.mostrarFormE = true;
    }
*/


    onSubmit(event:Event){
      this.form.patchValue({
        persona:{id:this.persona.id}
      });
   
     event.preventDefault;
		if (this.form.valid) {
      console.log(this.form.value);
      
      console.log(this.form.value.persona);
			this.onAddExperience.emit(this.form.value);
			this.form.reset();
			this.mostrarForm= false;
		} else {
		//	alert("form no valido   "+this.actual+"   "+this.id+"   "+this.nombre+"   "+this.descripcion+"   "+this.fechaFin+"   "+this.persona.id);
		}
     
    /*
      const newPw={
       id:this.id,
      nombre:this.nombre,
      descipcion:this.descripcion,
      fechaIni:this.fechaIni,
      fechaFin:this.fechaFin,
      actual:this.actual,
      persona:{id:9, localidad:{id:6}}
      };
      
           

        this.onAddExperience.emit(newPw);
        //this.form.reset();
        this.mostrarForm=false;
     */
    }


  



}
