import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectPortfolioComponent } from './components/project-portfolio/project-portfolio.component';
import { ProjectCoworkrhComponent } from './components/project-coworkrh/project-coworkrh.component';
import { ProjectARProgramaComponent } from './components/project-arprograma/project-arprograma.component';
import { HomeEsComponent } from './components/es/home-es/home-es.component';
import { ProjectPortfolioEsComponent } from './components/es/project-portfolio-es/project-portfolio-es.component';
import { ProjectCoworkrhEsComponent } from './components/es/project-coworkrh-es/project-coworkrh-es.component';
import { ProjectArprogramaEsComponent } from './components/es/project-arprograma-es/project-arprograma-es.component';
import { ProjectArprogramaBackendComponent } from './components/project-arprograma-backend/project-arprograma-backend.component';
import { ProjectArprogramaBackendEsComponent } from './components/es/project-arprograma-backend-es/project-arprograma-backend-es.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: 'home', component:HomeComponent},
  { path: 'portfolio', component: ProjectPortfolioComponent},
  { path: 'coworkrh', component: ProjectCoworkrhComponent},
  { path: 'arp', component: ProjectARProgramaComponent},
  { path: 'arpbck', component: ProjectArprogramaBackendComponent},
  { path: 'es', component: HomeEsComponent},
  { path: 'es/home', component: HomeEsComponent},
  { path: 'es/portfolio', component: ProjectPortfolioEsComponent},
  { path: 'es/coworkrh', component: ProjectCoworkrhEsComponent},
  { path: 'es/arp', component: ProjectArprogramaEsComponent},
  { path: 'es/arpbck', component: ProjectArprogramaBackendEsComponent},
  
  { path: "**", redirectTo: '', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
