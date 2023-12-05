import { Component } from '@angular/core';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-footer-es',
  templateUrl: './footer-es.component.html',
  styleUrls: ['./footer-es.component.css'],
  standalone: true,
  imports: []
})
export class FooterEsComponent {

  porti: any;

  constructor (private dataporti:DataPortfolioService) { }

  ngOnInit(): void {
    this.dataporti.obtenerDatos().subscribe(data => {
      this.porti = data
    });
  }

  toTopid() {
    document.getElementById("topid")?.scrollIntoView({behavior: 'smooth'});
  }

}
