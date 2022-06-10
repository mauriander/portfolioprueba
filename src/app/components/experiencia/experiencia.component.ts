import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiences: Experiencia[]=[];
  constructor(private experienceService: ExperienciaService) {}
  @Output() btnClick= new EventEmitter;

  ngOnInit(): void {this.getExperiences(); }

  getExperiences(){
    this.experienceService
    .getExperiences().subscribe(res=>{
      //console.log(res); 
      this.experiences=res;

  })
}

  clickme() {
    alert("Entramos en edicion"); }


  addExperience(experience: Experiencia) {
    
    this.experienceService
      .addExperience(experience)
      .subscribe((addexperience) => {this.experiences.push(addexperience);   this.ngOnInit();});

    
  }

  drop2(event: CdkDragDrop<Experiencia[]>) {
  
    moveItemInArray(this.experiences, event.previousIndex, event.currentIndex);
  }

  deleteExperience(experience: Experiencia) {
    alert("deleteado2");
    this.experienceService.deleteExperience(experience).subscribe(
      () =>
        (this.experiences = this.experiences.filter((t) => {
          return t.id !== experience.id;
        }))
    );
  }






}
