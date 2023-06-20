import { Component } from '@angular/core';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-about-es',
  templateUrl: './about-es.component.html',
  styleUrls: ['./about-es.component.css']
})
export class AboutEsComponent {

  porti: any;

  constructor (private dataporti: DataPortfolioService) { }

  ngOnInit(): void {
    this.dataporti.obtenerDatos().subscribe(data => {
      this.porti = data
    });
  }

}
