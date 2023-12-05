import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { NavbarEsComponent } from './navbar-es/navbar-es.component';
import { HeroEsComponent } from './hero-es/hero-es.component';
import { AboutEsComponent } from './about-es/about-es.component';
import { ProjectsEsComponent } from './projects-es/projects-es.component';
import { FooterEsComponent } from './footer-es/footer-es.component';

@Component({
  selector: 'app-home-es',
  templateUrl: './home-es.component.html',
  styleUrls: ['./home-es.component.css'],
  standalone: true,
  imports: [NavbarEsComponent, HeroEsComponent, AboutEsComponent, ProjectsEsComponent, FooterEsComponent]
})
export class HomeEsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: Document, private title:Title, private meta:Meta) {
    title.setTitle('Alexander Repollo | Desarrollador Web Full Stack');
    this.updateMetaTags();
  }

  ngOnInit() {
    this.document.documentElement.lang = 'es';
    
  }

  updateMetaTags(): void {
    const newDescription = "Bienvenido/a a mi portfolio! Soy Alex, desarrollador web full stack, aquí vas a poder encontrar todos mis proyectos, información personal y mas. No dudes en contactarme!";
    const newImage = "https://alexander-repollo.web.app/assets/images/AR-logo-alt-ogimage.png";

    this.meta.updateTag({ name:"description", content: newDescription});
    this.meta.updateTag({ property:"og:description", content: newDescription});
    this.meta.updateTag({ property:"og:image", content: newImage});
    this.meta.updateTag({ property:"twitter:description", content: newDescription});
  }
}


