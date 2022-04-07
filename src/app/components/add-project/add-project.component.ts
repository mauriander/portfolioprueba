import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{Project} from '../Project'

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
@Output() onAddProject: EventEmitter<Project>= new EventEmitter();
id: number=0;
text:string='';
integrante: string='';


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length===0){

      alert("Agregar un texto");
      return;
    }
    const newPj={id:this.id,text:this.text, integrante: this.integrante};
    this.onAddProject.emit(newPj);


  }

}
