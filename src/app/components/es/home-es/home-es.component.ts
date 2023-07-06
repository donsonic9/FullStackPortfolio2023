import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home-es',
  templateUrl: './home-es.component.html',
  styleUrls: ['./home-es.component.css']
})
export class HomeEsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: Document, private title:Title, private meta:Meta) {
    title.setTitle('Alexander Repollo | Desarrollador Web Full Stack');
    meta.updateTag({ name:"description", content:"Bienvenido/a a mi portfolio! Soy Alex, y aquí vas a poder encontrar todos mis proyectos, información personal y mas. No dudes en contactarme!"});
    meta.updateTag({ property:"og:image", content:"https://alexander-repollo.web.app/assets/images/AR-logo-alt-ogimage.png"});
  }

  ngOnInit() {
    this.document.documentElement.lang = 'es';
  }
}


