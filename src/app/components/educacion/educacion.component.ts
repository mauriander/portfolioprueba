import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { EducacionService } from 'src/app/services/educacion.service'; 
import { Educacion } from 'src/app/model/educacion.model';
import { TipoeducacionService } from 'src/app/services/tipoeducacion.service';
import { TipoEducacion } from 'src/app/model/tipoeducacion.model';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  tipoeducaciones: TipoEducacion[]=[];
  educaciones: Educacion[]=[];
  constructor(private educacionService: EducacionService,private tipoeducacionService: TipoeducacionService) {}
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

    addTipoEducacion(tipoeducacion: TipoEducacion) {
    
      this.tipoeducacionService
        .addTipoEducacion(tipoeducacion)
        .subscribe((addtipoeducacion) => {this.tipoeducaciones.push(addtipoeducacion);   this.ngOnInit();});
  
      
    }

   
  addEducacion(educacion: Educacion) {
    
    this.educacionService
      .addEducacion(educacion)
      .subscribe((addeducacion) => {this.educaciones.push(addeducacion);   this.ngOnInit();});

    
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

}
