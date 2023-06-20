import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-navbar-lite',
  templateUrl: './navbar-lite.component.html',
  styleUrls: ['./navbar-lite.component.css']
})
export class NavbarLiteComponent {

  porti: any;

  constructor (private router:Router, private dataporti:DataPortfolioService) { }

  ngOnInit(): void {
    this.dataporti.getData().subscribe(data => {
      this.porti = data
    });
  }

  // reloads the website
  onReload() {
    document.getElementById("topid")?.scrollIntoView({behavior: 'smooth'});
    this.router.navigate(['home']);
    // location.reload();
  }

  // las funciones "to" son para linkear los botones de la navbar a las secciones de la pagina.
  toTop() {
    this.router.navigate(['home']);
    document.getElementById("topid")?.scrollIntoView({behavior: 'smooth'});
  }

  toAbout() {
    this.router.navigate(['home']);
    document.getElementById("aboutid")?.scrollIntoView({behavior: 'smooth'});
  }

  toWorks() {
    this.router.navigate(['home']);
    document.getElementById("projectsid")?.scrollIntoView({behavior: 'smooth'});
  }

  toContacto() {
    this.router.navigate(['home']);
    document.getElementById("contactoid")?.scrollIntoView({behavior: 'smooth'});
  }

}
