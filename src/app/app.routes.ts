import { Routes } from "@angular/router";
import { HomeEsComponent } from "./components/es/home-es/home-es.component";
import { ProjectArprogramaBackendEsComponent } from "./components/es/project-arprograma-backend-es/project-arprograma-backend-es.component";
import { ProjectArprogramaEsComponent } from "./components/es/project-arprograma-es/project-arprograma-es.component";
import { ProjectCoworkrhEsComponent } from "./components/es/project-coworkrh-es/project-coworkrh-es.component";
import { ProjectPortfolioEsComponent } from "./components/es/project-portfolio-es/project-portfolio-es.component";
import { HomeComponent } from "./components/home/home.component";
import { ProjectArprogramaBackendComponent } from "./components/project-arprograma-backend/project-arprograma-backend.component";
import { ProjectARProgramaComponent } from "./components/project-arprograma/project-arprograma.component";
import { ProjectCoworkrhComponent } from "./components/project-coworkrh/project-coworkrh.component";
import { ProjectPortfolioComponent } from "./components/project-portfolio/project-portfolio.component";

export const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: 'portfolio', component: ProjectPortfolioComponent},
  { path: 'coworkrh', component: ProjectCoworkrhComponent},
  { path: 'arp', component: ProjectARProgramaComponent},
  { path: 'arpbck', component: ProjectArprogramaBackendComponent},
  { path: 'es', component: HomeEsComponent},
  { path: 'es/portfolio', component: ProjectPortfolioEsComponent},
  { path: 'es/coworkrh', component: ProjectCoworkrhEsComponent},
  { path: 'es/arp', component: ProjectArprogramaEsComponent},
  { path: 'es/arpbck', component: ProjectArprogramaBackendEsComponent},
  
  { path: "**", redirectTo: '', pathMatch: 'full' }
  
];