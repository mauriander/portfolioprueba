import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PROJECTS } from '../mock-projects';
import{Project} from '../Project'
import { faFileImport, faImagePortrait, faTimes } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/fontawesome-svg-core';
import { Proyecto } from 'src/app/model/proyecto.model';



@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() project!: Proyecto;
@Output() onDeleteProject: EventEmitter<Proyecto> = new EventEmitter();

@Output() onToggleProject: EventEmitter<Proyecto> = new EventEmitter();

faTimes=faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onEdit(project: Proyecto){

    
  }


  onDelete():void{
    //alert("deleteado"+project.text);
    this.onDeleteProject.emit(this.project);

  }
  onToggle(project: Proyecto){
    this.onToggleProject.emit(project);
  }

}
