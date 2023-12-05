import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';
import { NavbarLiteEsComponent } from '../project-portfolio-es/navbar-lite-es/navbar-lite-es.component';
import { FooterEsComponent } from '../home-es/footer-es/footer-es.component';

@Component({
  selector: 'app-project-arprograma-es',
  templateUrl: './project-arprograma-es.component.html',
  styleUrls: ['./project-arprograma-es.component.css'],
  standalone: true,
  imports: [NavbarLiteEsComponent, FooterEsComponent]
})
export class ProjectArprogramaEsComponent implements OnInit{

  porti: any;
  portiList: any;

  constructor (@Inject(DOCUMENT) private document: Document, private dataporti:DataPortfolioService, private router:Router, private title:Title) {
    title.setTitle('Proyecto #ArgentinaPrograma | Alexander Repollo');
   }

  ngOnInit(): void {
    this.document.documentElement.lang = 'es';
    this.dataporti.obtenerDatos().subscribe(data => {
      this.porti = data
      this.portiList = data.projects.proj
    });
  }

  goToHome() {
    this.router.navigate(['es']);
  }

}
