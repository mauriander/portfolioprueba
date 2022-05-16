import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';



@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css'],
})
export class AcercadeComponent implements OnInit {

  persona: Persona | undefined;
  
  @Input()
  acercade = 'Mauricio A. Argentina programa';

  confirma='';
  constructor(private servicio:PersonaService) {}
  @ViewChild('myNameElem')
  myNameElem!: ElementRef;
  

  @ViewChild('myNameElemb')
  myNameElemb!: ElementRef;
  @ViewChild('myNameElemc')
  myNameElemc!: ElementRef;
  
   


  getValue() {
    this.acercade = this.myNameElem.nativeElement.value;
    this.myNameElem.nativeElement.style.display = 'none';
    this.myNameElemb.nativeElement.style.display = 'none';
    this.myNameElemc.nativeElement.style.display = 'none';
    alert(this.acercade);
  }
  ngOnInit(): void {this.getPersona();}

  getPersona(){
    this.servicio.getPersona().subscribe(res=>{
     // console.log(res); 
      this.persona=res;
    })
//alert(this.servicio.getPersona());
    }







  clickme() {
    this.myNameElem.nativeElement.style.display = 'block';
    this.myNameElemb.nativeElement.style.display = 'block';
    this.myNameElemc.nativeElement.style.display = 'block';
    this.acercade;
    //alert(this.acercade);
  }

  cargar_archivo(event:any) {
    let file1 = event.target.value;
    let file = event.target.files[0];
    let x="";
   // alert(file+"   "+file1 )
     console.log(file1) // in this case we only get fakepath same as we get in ngModel.
    console.table(file) // in this case we get object with data like, name, lastModified, lastModifiedDate, size and type.
    //alert(`file name: ${file.name}`);
     // alert(`Last modified: ${file.lastModified}`);

      let reader = new FileReader();
      reader.onload = () => {
        //this.confirma = reader.result as string;
        this.myNameElem.nativeElement.value=<string>reader.result;
      };
      reader.readAsText(file);
      //alert("confirma1"+this.confirma);
      //reader.onload = function () {
        //console.log(reader.result);
       //alert(reader.result);
       //alert(reader.result);
       //this.acercade=reader.result
      //};
      
  
      reader.onerror = function () {
        console.log(reader.error);
      };
      //alert("confirmat"+this.confirma);
      
  }
  
}
