import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor (private router:Router) { }

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

  handleOptionClick() {
    this.isNavbarBlack = false;
  }

  // reloads the website
  onReload() {
    document.getElementById("topid")?.scrollIntoView({behavior: 'smooth'});
    location.reload();
    // this.router.navigate(['']);
  }

  // las funciones "to" son para linkear los botones de la navbar a las secciones de la pagina.
  toTop() {
    document.getElementById("topid")?.scrollIntoView({behavior: 'smooth'});
  }

  toAbout() {
    document.getElementById("aboutid")?.scrollIntoView({behavior: 'smooth'});
  }

  toWorks() {
    document.getElementById("serviciosid")?.scrollIntoView({behavior: 'smooth'});
  }

  toContacto() {
    document.getElementById("contactoid")?.scrollIntoView({behavior: 'smooth'});
  }



}
