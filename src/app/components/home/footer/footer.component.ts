import { Component } from '@angular/core';
import { DataPortfolioService } from 'src/app/services/data-portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: []
})
export class FooterComponent {

  porti: any;

  constructor (private dataporti:DataPortfolioService) { }

  ngOnInit(): void {
    this.dataporti.getData().subscribe(data => {
      this.porti = data
    });
  }

  toTopid() {
    document.getElementById("topid")?.scrollIntoView({behavior: 'smooth'});
  }

}
