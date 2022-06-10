import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
//import{Project} from '../Project'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona.model';
import { Proyecto } from 'src/app/model/proyecto.model';
import { PersonaService } from 'src/app/services/persona.service';
import {NgbModal, ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  mostrarForm: boolean = false;
@Output() onAddProject: EventEmitter<Proyecto>= new EventEmitter();
@ViewChild('lcontent') 
lcontent!: ElementRef;

//id: number=0;
//nombre:string='';
//descripcion_proyecto:string='';
//url:string='';
//tipo_tecnologia:string='';
//id_localidad:number=0;
//id_persona: number=0;
closeResult = '';
 persona!: Persona;

 @Output() btnClick= new EventEmitter;
 //private modal: Modal | undefined;
 //mostrarForm: boolean=false;
 form: FormGroup;
  //content:any;
  reason:any;
    constructor(private formBuilder: FormBuilder, private servicio: PersonaService,public modals: NgbModal) { 
      this.form=this.formBuilder.group({
        id:[0],
        nombre:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
        descripcion_proyecto:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
        url:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
        tipo_tecnologia:[""],
        persona:{id:0}
      });
  
    }
 /*
    open() {
      const modalRef = this.modals.open(AddProjectComponent);
      modalRef.componentInstance.my_modal_title = 'I your title';
      modalRef.componentInstance.my_modal_content = 'I am your content';

    }
    open2() {
      this.form.patchValue({
        persona:{id:this.persona.id}
      });
      //this.modals.open(this.form);

      const modalRef = this.modals.open(this.form);
      
      modalRef.componentInstance.my_modal_title = 'opemn2222';
      modalRef.componentInstance.my_modal_content = 'I am your content';

    }
*/
  ngOnInit(): void {this.getPersona();
  
   
  }

  getPersona(){
    this.servicio.getPersona().subscribe(res=>{
      console.log(res); 
      this.persona=res;
      
    })

    }

    

  toogleForm(){
    this.mostrarForm=!this.mostrarForm;
  }

  onClick(){  this.btnClick.emit();
  }
 
  
  onSubmit(event:Event){
    this.form.patchValue({
      persona:{id:this.persona.id}
    });
    this.modals.open(this.form);
   event.preventDefault;
  if (this.form.valid) {
    console.log(this.lcontent);
    
    console.log(this.form.value.persona);
    this.onAddProject.emit(this.form.value);
    this.form.reset();
    this.mostrarForm= false;
  } else {
  //	alert("form no valido   "+this.actual+"   "+this.id+"   "+this.nombre+"   "+this.descripcion+"   "+this.fechaFin+"   "+this.persona.id);
  }

  }
  

}
