import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  miPortfolio:any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    console.log("Datos Personales para mostrar en Head");
      this.datosPortfolio.obtenerDatos().subscribe(data =>{
        console.log("Datos Personales para mostrar en Head"+ JSON.stringify(data));
       // alert("Datos Personales para mostrar en Head"+ JSON.stringify(data));
        this.miPortfolio=data[0];
      }      
        );
  }

}
