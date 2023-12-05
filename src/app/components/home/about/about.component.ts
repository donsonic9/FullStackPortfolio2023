import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: []
})
export class AboutComponent {

  porti: any;

  constructor (private dataporti:DataPortfolioService, private router:Router) { }

  ngOnInit(): void {
    this.dataporti.getData().subscribe(data => {
      this.porti = data
    });
  }

  toContacto() {
    this.router.navigate(['']);
    document.getElementById("contactoid")?.scrollIntoView({behavior: 'smooth'});
  }

}
