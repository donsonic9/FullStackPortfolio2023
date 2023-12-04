import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-project-arprograma-backend-es',
  templateUrl: './project-arprograma-backend-es.component.html',
  styleUrls: ['./project-arprograma-backend-es.component.css']
})
export class ProjectArprogramaBackendEsComponent {

  porti: any;
  portiList: any;

  constructor (private dataporti:DataPortfolioService, private router:Router, private title:Title) {
    title.setTitle('Backend ArgPrograma | Alexander Repollo');
   }

  ngOnInit(): void {
    this.dataporti.obtenerDatos().subscribe(data => {
      this.porti = data
      this.portiList = data.projects.proj
    });
  }

  goToHome() {
    this.router.navigate(['es']);
  }
}
