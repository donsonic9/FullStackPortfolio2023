import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, ProjectsComponent, FooterComponent]
})
export class HomeComponent {
  constructor(private title:Title) {
    title.setTitle('Alexander Repollo | Full Stack Web Developer');
  }

}
