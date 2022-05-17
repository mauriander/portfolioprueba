import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/model/skill.model';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
    mostrarForm: boolean=false;
    @Output() onNuevaSkill: EventEmitter<Skill> = new EventEmitter();
    @Output() onAddSkill: EventEmitter<Skill>= new EventEmitter();
    id: number=0;
nombre:string='';
valor:number=0;
    persona!: Persona;
    @Output() btnClick= new EventEmitter;
    //form: FormGroup;
  validForm:boolean=true;
    constructor(private servicio:PersonaService) { 
     /* this.form=this.formBuilder.group({
        id:[0],
        nombre:[""],
        valor:["", [Validators.required, Validators.min(1), Validators.max(100)]]

      });*/
      
  
  
    }


    ngOnInit(): void {this.getPersona();
     
     
     }

    getPersona(){
      this.servicio.getPersona().subscribe(res=>{
        console.log(res); 
        this.persona=res;
      })
    }
   /* setSkill(skill: Skill){
      this.form.patchValue({
        id: skill.id,
        nombre: skill.nombre,
        valor:skill.valor
        
  
      })  }
     */ 
      toogleForm(){
        this.mostrarForm=!this.mostrarForm;
      }

      onClick(){  this.btnClick.emit();}
  
  
      onSubmit(event:Event){
       
     
        const newPj={
          id:this.id,
          nombre:this.nombre.toUpperCase(),
          valor:this.valor,
          persona:{id:9, localidad:{id:6}}     
        };
        
        if(newPj.valor>100 || newPj.valor<0){
          alert("Ingrese un valor entre 1 y 100");
          //this.validForm=true;
        }else{             
  
          this.onAddSkill.emit(newPj);
          //this.form.reset();
          this.mostrarForm=false;}
          //alert("Emitio y llamo addproject"+newPj.id+"\n"+newPj.nombre+"\n"+newPj.valor);
         

        //this.onNuevaSkill.emit(this.form.value);
        //this.onAddSkill.emit(newPj);
       // this.form.reset();
       //this.mostrarForm=false;
      
       /* event.preventDefault;
        if(this.form.valid){
          this.onNuevaSkill.emit(this.form.value);
          this.onAddSkill.emit(this.form.value);
          this.form.reset();
          this.mostrarForm=false;
          alert("ESTA GUARDANDO");
         }
         else{
           console.log("formato no valido");
         }*/
      }


    
  
}