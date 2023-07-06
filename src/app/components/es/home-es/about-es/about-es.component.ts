import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-about-es',
  templateUrl: './about-es.component.html',
  styleUrls: ['./about-es.component.css']
})
export class AboutEsComponent {

  porti: any;

  constructor (private dataporti: DataPortfolioService, private router:Router) { }

  ngOnInit(): void {
    this.dataporti.obtenerDatos().subscribe(data => {
      this.porti = data
    });
  }

  toContacto() {
    // this.router.navigate(['']);
    document.getElementById("contactoid")?.scrollIntoView({behavior: 'smooth'});
  }

}
