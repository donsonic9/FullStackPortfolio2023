import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';
import { NavbarLiteComponent } from '../project-portfolio/navbar-lite/navbar-lite.component';
import { FooterComponent } from '../home/footer/footer.component';

@Component({
  selector: 'app-project-arprograma',
  templateUrl: './project-arprograma.component.html',
  styleUrls: ['./project-arprograma.component.css'],
  standalone: true,
  imports: [NavbarLiteComponent, FooterComponent]
})
export class ProjectARProgramaComponent {

  porti: any;
  portiList: any;

  constructor (private dataporti:DataPortfolioService, private router:Router, private title:Title) {
    title.setTitle('Project ArgPrograma | Alexander Repollo');
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
