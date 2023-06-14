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
    NavbarLiteComponent
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
