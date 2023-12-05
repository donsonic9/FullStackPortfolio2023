import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-navbar-es',
  templateUrl: './navbar-es.component.html',
  styleUrls: ['./navbar-es.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class NavbarEsComponent {

  porti: any;

  constructor (private router:Router, private dataporti:DataPortfolioService) { }

  ngOnInit(): void {
    this.dataporti.obtenerDatos().subscribe(data => {
      this.porti = data
    });
  }



  // To change the background color of the navbar on click
  isNavbarBlack: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const aboutSectionOffset = document.getElementById('seraquefunciona')?.offsetTop || 0;
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isNavbarBlack = currentScrollPosition >= aboutSectionOffset;
  }

  toggleNavbarColor() {
    while(!this.isNavbarBlack) {
      this.isNavbarBlack = !this.isNavbarBlack;
    }
  }

  // handleOptionClick() {
  //   this.isNavbarBlack = false;
  // }

  // reloads the website
  onReload() {
    document.getElementById("topid")?.scrollIntoView({behavior: 'smooth'});
    // this.router.navigate(['']);
    location.reload();
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
