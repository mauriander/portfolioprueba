import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/model/experiencia.model';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

  @Input() experiencia!: Experiencia;
  @Output() onDeleteExperience: EventEmitter<Experiencia> = new EventEmitter();
  
  @Output() onToggleExperience: EventEmitter<Experiencia> = new EventEmitter();
  @Output() onEditExperience: EventEmitter<Experiencia> = new EventEmitter();

  faTimes=faTimes;
  constructor() { }


  ngOnInit(): void {
  }

  /*
  onDeleteE():void{
    alert("deleteado experiencia");
    this.onDeleteExperience.emit(this.experiencia);
  
  }
*/

  onDeleteEd():void{
    alert("deleteado presiono boton de emision");
    this.onDeleteExperience.emit(this.experiencia);

  }

  onEditE(experiencia: Experiencia){
this.onEditExperience.emit(experiencia);

  }


  onToggleE(experiencia: Experiencia){
    this.onToggleExperience.emit(experiencia);
  }

}



