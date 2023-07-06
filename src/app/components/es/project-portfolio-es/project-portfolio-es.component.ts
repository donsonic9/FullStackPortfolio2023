import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-project-portfolio-es',
  templateUrl: './project-portfolio-es.component.html',
  styleUrls: ['./project-portfolio-es.component.css']
})
export class ProjectPortfolioEsComponent implements OnInit{

  porti: any;
  portiList: any;

  constructor (@Inject(DOCUMENT) private document: Document, private dataporti:DataPortfolioService, private router:Router, private title:Title) {
    title.setTitle('Proyecto Portfolio | Alexander Repollo');
   }

  ngOnInit(): void {
    this.document.documentElement.lang = 'es';
    this.dataporti.obtenerDatos().subscribe(data => {
      this.porti = data
      this.portiList = data.projects.proj
    });
  }

  goToHome() {
    this.router.navigate(['es/home']);
  }

}
