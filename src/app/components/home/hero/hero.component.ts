import { Component } from '@angular/core';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

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

}
