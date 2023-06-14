import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  porti: any;

  constructor (private dataporti:DataPortfolioService) { }

  ngOnInit(): void {
    this.dataporti.obtenerDatos().subscribe(data => {
      this.porti = data
    });
  }

}
