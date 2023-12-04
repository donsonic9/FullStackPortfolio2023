import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-navbar-lite-es',
  templateUrl: './navbar-lite-es.component.html',
  styleUrls: ['./navbar-lite-es.component.css']
})
export class NavbarLiteEsComponent {

  porti: any;

  constructor (private router:Router, private dataporti:DataPortfolioService) { }

  ngOnInit(): void {
    this.dataporti.obtenerDatos().subscribe(data => {
      this.porti = data
    });
  }

  // reloads the website
  onReload() {
    document.getElementById("topid")?.scrollIntoView({behavior: 'smooth'});
    this.router.navigate(['es']);
    // location.reload();
  }

  // las funciones "to" son para linkear los botones de la navbar a las secciones de la pagina.
  toTop() {
    this.router.navigate(['es']);
    document.getElementById("topid")?.scrollIntoView({behavior: 'smooth'});
  }

  toAbout() {
    this.router.navigate(['es']);
    document.getElementById("aboutid")?.scrollIntoView({behavior: 'smooth'});
  }

  toWorks() {
    this.router.navigate(['es']);
    document.getElementById("projectsid")?.scrollIntoView({behavior: 'smooth'});
  }

  toContacto() {
    this.router.navigate(['es']);
    document.getElementById("contactoid")?.scrollIntoView({behavior: 'smooth'});
  }

}
