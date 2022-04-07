import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PROJECTS } from '../mock-projects';
import{Project} from '../Project'



@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
@Input() project: Project =  PROJECTS[0];
@Output() onDeleteProject: EventEmitter<Project> = new EventEmitter();

@Output() onToggleProject: EventEmitter<Project> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(project: Project){
    this.onDeleteProject.emit(project);

  }
  onToggle(project: Project){
    this.onToggleProject.emit(project);
  }

}
