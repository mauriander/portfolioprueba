import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion.model';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  mostrarForm: boolean=false;
  @Output() btnClick= new EventEmitter;
  @Output() onAddEducacion: EventEmitter<Educacion>= new EventEmitter();
  //id:number=0;
  //id:number=0;
  form!: FormGroup;
  
  /*id: number=0;
  nombre:string='';
  nivel:string='';
  institucion:string='';
  fechaini:Date=new Date();
  fechafin:Date=new Date();
  */
  


  constructor(private formBuilder: FormBuilder) { 
    this.form=this.formBuilder.group({
      id:[0],
      nombre:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
      nivel:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
      institucion:["",[Validators.required,Validators.minLength(3),Validators.maxLength(30),]],
      fechaini:[""],
      fechafin:[""],
      
    });
    


  }
  ngOnInit(): void {
    
    
   
  }
  




/*
   setEducacion(educacion: Educacion) {
    this.form.patchValue({
      id: educacion.id,
      nombre: educacion.nombre,
      nivel: educacion.nivel,
      institucion:educacion.institucion,
      fechaini:educacion.fechaini,
      fechafin:educacion.fechafin
    });
    this.mostrarForm = true;
  }
  */

    toogleForm(){
      this.mostrarForm=!this.mostrarForm;
    }

    onClick(){  this.btnClick.emit();}
    

   


    onSubmit(event:Event){
    

      console.log(this.form.value);
      //this.form.patchValue({id:this.id});
       event.preventDefault;
		if (this.form.valid) {
    /*  
      const newPj={
        id: this.id,
      nombre: this.nombre,
      nivel: this.nivel,
      institucion:this.institucion,
      fechaini:this.fechaini,
      fechafin:this.fechafin
      };
   */
      console.log(this.form.value);
     // console.log(newPj);
    	this.onAddEducacion.emit(this.form.value);
      
			//this.form.reset();
			this.mostrarForm = false;

      alert("VALIDO id");
      console.log(this.form.value);
		} else {
			alert("form no valido   ");
		}
      }
}


	
		