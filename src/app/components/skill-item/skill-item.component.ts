import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  @Input() skill!: Skill;
  @Output() onDeleteSkill: EventEmitter<Skill> = new EventEmitter();
  
  @Output() onToggleSkill: EventEmitter<Skill> = new EventEmitter();
  @Output() onEditarSkill: EventEmitter<Skill> = new EventEmitter();
  faTimes=faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  
  onDeleteS():void{
    //alert("deleteado"+project.text);
    this.onDeleteSkill.emit(this.skill);

  }

  onEditarS(skill: Skill){
this.onEditarSkill.emit(skill);

  }


  onToggleS(skill: Skill){
    this.onToggleSkill.emit(skill);
  }

}
