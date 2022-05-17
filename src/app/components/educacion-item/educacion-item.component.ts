import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/model/educacion.model';

@Component({
  selector: 'app-educacion-item',
  templateUrl: './educacion-item.component.html',
  styleUrls: ['./educacion-item.component.css']
})
export class EducacionItemComponent implements OnInit {

  
  @Input() educacion!: Educacion;
  @Output() onDeleteEducacion: EventEmitter<Educacion> = new EventEmitter();
  
  @Output() onToggleEducacion: EventEmitter<Educacion> = new EventEmitter();
  @Output() onEditarEducacion: EventEmitter<Educacion> = new EventEmitter();
  faTimes=faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  
  onDeleteEdu():void{
    //alert("deleteado"+project.text);
    this.onDeleteEducacion.emit(this.educacion);

  }

  onEditEdu(educacion: Educacion){
this.onEditarEducacion.emit(educacion);

  }


  onToggleEdu(educacion: Educacion){
    this.onToggleEducacion.emit(educacion);
  }


}
