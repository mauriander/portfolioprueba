import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PROJECTS } from '../mock-projects';
import { Project } from '../Project';
import { ProjectService } from 'src/app/services/project.service';
import { NgIf } from '@angular/common';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Proyecto } from 'src/app/model/proyecto.model';


 

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
	//@ViewChild("addproject") addProject!:AddProjectComponent
  
  projects: Proyecto[]=[];
  constructor(private projectService: ProjectService) {}
  @Output() btnClick= new EventEmitter;

  ngOnInit(): void {this.getProjects(); }

  getProjects(){
    this.projectService
    .getProjects().subscribe(res=>{
      //console.log(res); 
      this.projects=res;

  })
}

  clickme() {
    alert("Entramos en edicion"); }
  /*
ToggleReminder(task: Task) {
  task.reminder = !task.reminder;
  this.taskService.updateTaskReminder(task).subscribe();

this.skillSevice
				.nuevaSkill(skill)
				.subscribe((n uevaskill) => this.skills.push(nuevaskill));

}*/

  addProject(project: Proyecto) {
    
    this.projectService
      .addProject(project)
      .subscribe((addproject) => {this.projects.push(addproject);   this.ngOnInit();});

    
  }

  drop2(event: CdkDragDrop<Proyecto[]>) {
  
    moveItemInArray(this.projects, event.previousIndex, event.currentIndex);
  }

  deleteProject(project: Proyecto) {
    this.projectService.deleteProject(project).subscribe(
      () =>
        (this.projects = this.projects.filter((t) => {
          return t.id !== project.id;
        }))
    );
  }
}
