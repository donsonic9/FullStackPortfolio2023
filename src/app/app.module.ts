import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { AboutComponent } from './components/home/about/about.component';
import { ProjectsComponent } from './components/home/projects/projects.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { ProjectPortfolioComponent } from './components/project-portfolio/project-portfolio.component';
import { ProjectCoworkrhComponent } from './components/project-coworkrh/project-coworkrh.component';
import { ProjectARProgramaComponent } from './components/project-arprograma/project-arprograma.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarLiteComponent } from './components/project-portfolio/navbar-lite/navbar-lite.component';
import { HomeEsComponent } from './components/es/home-es/home-es.component';
import { HeroEsComponent } from './components/es/home-es/hero-es/hero-es.component';
import { AboutEsComponent } from './components/es/home-es/about-es/about-es.component';
import { ProjectsEsComponent } from './components/es/home-es/projects-es/projects-es.component';
import { NavbarEsComponent } from './components/es/home-es/navbar-es/navbar-es.component';
import { FooterEsComponent } from './components/es/home-es/footer-es/footer-es.component';
import { ProjectArprogramaEsComponent } from './components/es/project-arprograma-es/project-arprograma-es.component';
import { ProjectCoworkrhEsComponent } from './components/es/project-coworkrh-es/project-coworkrh-es.component';
import { ProjectPortfolioEsComponent } from './components/es/project-portfolio-es/project-portfolio-es.component';
import { NavbarLiteEsComponent } from './components/es/project-portfolio-es/navbar-lite-es/navbar-lite-es.component';
import { ProjectArprogramaBackendComponent } from './components/project-arprograma-backend/project-arprograma-backend.component';
import { ProjectArprogramaBackendEsComponent } from './components/es/project-arprograma-backend-es/project-arprograma-backend-es.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    ProjectPortfolioComponent,
    ProjectCoworkrhComponent,
    ProjectARProgramaComponent,
    NavbarLiteComponent,
    HomeEsComponent,
    HeroEsComponent,
    AboutEsComponent,
    ProjectsEsComponent,
    NavbarEsComponent,
    FooterEsComponent,
    ProjectArprogramaEsComponent,
    ProjectCoworkrhEsComponent,
    ProjectPortfolioEsComponent,
    NavbarLiteEsComponent,
    ProjectArprogramaBackendComponent,
    ProjectArprogramaBackendEsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
