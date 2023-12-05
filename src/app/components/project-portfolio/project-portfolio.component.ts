import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';
import { NavbarLiteComponent } from './navbar-lite/navbar-lite.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-project-portfolio',
  templateUrl: './project-portfolio.component.html',
  styleUrls: ['./project-portfolio.component.css'],
  standalone: true,
  imports: [NavbarLiteComponent, FooterComponent]
})
export class ProjectPortfolioComponent {

  porti: any;
  portiList: any;

  constructor (private dataporti:DataPortfolioService, private router:Router, private title:Title) { 
    title.setTitle('Project Portfolio | Alexander Repollo');
  }

  ngOnInit(): void {
    this.dataporti.getData().subscribe(data => {
      this.porti = data
      this.portiList = data.projects.proj
    });
  }

  goToHome() {
    this.router.navigate(['home']);
  }

}
