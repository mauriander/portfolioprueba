import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PROJECTS } from '../mock-projects';
import { Project } from '../Project';
import { ProjectService } from 'src/app/services/project.service';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = PROJECTS;
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }


  clickme() {
    alert("Entramos en edicion");
    
        
  }
  /*
ToggleReminder(task: Task) {
  task.reminder = !task.reminder;
  this.taskService.updateTaskReminder(task).subscribe();
}*/

  addProject(project: Project) {
    
    this.projectService
      .addProject(project)
      .subscribe(() => this.projects.push(project));
  }

  deleteProject(project: Project) {
    this.projectService.deleteProject(project).subscribe(
      () =>
        (this.projects = this.projects.filter((t) => {
          return t.id !== project.id;
        }))
    );
  }
}
