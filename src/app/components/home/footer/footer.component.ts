import { Component } from '@angular/core';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  porti: any;

  constructor (private dataporti:DataPortfolioService) { }

  ngOnInit(): void {
    this.dataporti.obtenerDatos().subscribe(data => {
      this.porti = data
    });
  }

  toTopid() {
    document.getElementById("topid")?.scrollIntoView({behavior: 'smooth'});
  }

}
