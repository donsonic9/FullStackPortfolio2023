import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectPortfolioComponent } from './components/project-portfolio/project-portfolio.component';
import { ProjectCoworkrhComponent } from './components/project-coworkrh/project-coworkrh.component';
import { ProjectARProgramaComponent } from './components/project-arprograma/project-arprograma.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: 'home', component:HomeComponent},
  { path: 'portfolio', component: ProjectPortfolioComponent},
  { path: 'coworkrh', component: ProjectCoworkrhComponent},
  { path: 'arp', component: ProjectARProgramaComponent},
  { path: "**", redirectTo: '', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
