import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { EducacionService } from 'src/app/services/educacion.service'; 
import { Educacion } from 'src/app/model/educacion.model';
import { AddSkillComponent } from '../add-skill/add-skill.component';
import { AddEducacionComponent } from '../add-educacion/add-educacion.component';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  //@ViewChild("addEducacion") addEducacio!: AddEducacionComponent;
  
  educaciones: Educacion[]=[];
  constructor(private educacionService: EducacionService) {}
  @Output() btnClick= new EventEmitter;

  ngOnInit(): void {this.getEducaciones(); }

  getEducaciones(){
  this.educacionService
    .getEducaciones().subscribe(res=>{
      //console.log(res); 
      this.educaciones=res;

  })
}

  clickme() {
    alert("Entramos en edicion"); }
/*
    addTipoEducacion(tipoeducacion: TipoEducacion) {
    
      this.tipoeducacionService
        .addTipoEducacion(tipoeducacion)
        .subscribe((addtipoeducacion) => {this.tipoeducaciones.push(addtipoeducacion);   this.ngOnInit();});
  
      
    }
*/
   
  addEducacion(education: Educacion) {
    
      this.educacionService
      .addEducacion(education)
      .subscribe((addeducacion) => {this.educaciones.push(addeducacion);   this.ngOnInit();});

    
  }
  
  editEducacion(education: Educacion) {
 /* alert("Editicion en componente");
  this.educacionService.editEducacion(education).subscribe((educacionEditada) => {
    this.buscaEdu(educacionEditada);
  });  */
  alert("Hize push qui"+education.nombre);
  this.educacionService
     .editEducacion(education)
    .subscribe((editeducacion) => {this.educaciones.push(editeducacion);   this.ngOnInit();});
    
   // this.addEducacion.setEducacion(education);
  }
 

  drop2(event: CdkDragDrop<Educacion[]>) {
  
    moveItemInArray(this.educaciones, event.previousIndex, event.currentIndex);
  }

  deleteEducacion(educacion: Educacion) {
  this.educacionService.deleteEducacion(educacion).subscribe(
      () =>
        (this.educaciones = this.educaciones.filter((t) => {
          return t.id !== educacion.id;
        }))
    );
  }
/*
  private buscaEdu(educacion: Educacion) {
		for (let index = 0; index < this.educaciones.length; index++) {
			if (this.educaciones[index].id === educacion.id) {
				this.educaciones[index] = educacion;

				break;
			}
		}
	}*/

}
