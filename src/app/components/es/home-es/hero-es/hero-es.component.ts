import { Component } from '@angular/core';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-hero-es',
  templateUrl: './hero-es.component.html',
  styleUrls: ['./hero-es.component.css']
})
export class HeroEsComponent {

  porti: any;

  constructor (private dataporti:DataPortfolioService) { }

  ngOnInit(): void {
    this.dataporti.obtenerDatos().subscribe(data => {
      this.porti = data
    });
  }

  toAbout() {
    document.getElementById("aboutid")?.scrollIntoView({behavior: 'smooth'});
  }

  toWorks() {
    document.getElementById("projectsid")?.scrollIntoView({behavior: 'smooth'});
  }

  // Experimento

  // changeES() {
  //   this.dataporti.cambiarIdiomaES();
  //   this.ngOnInit();
  // }

  // changeEN() {
  //   this.dataporti.cambiarIdiomaEN();
  //   this.ngOnInit();
  // }


}
