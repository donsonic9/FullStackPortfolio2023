import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-projects-es',
  templateUrl: './projects-es.component.html',
  styleUrls: ['./projects-es.component.css']
})
export class ProjectsEsComponent {

  porti: any;
  portiList: any;

  constructor (private dataporti:DataPortfolioService, private router:Router) { }

  ngOnInit(): void {
    this.dataporti.obtenerDatos().subscribe(data => {
      this.porti = data
      this.portiList = data.projects.proj
    });
  }

}
