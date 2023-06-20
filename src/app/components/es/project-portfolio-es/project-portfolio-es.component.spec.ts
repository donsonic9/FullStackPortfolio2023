import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPortfolioEsComponent } from './project-portfolio-es.component';

describe('ProjectPortfolioEsComponent', () => {
  let component: ProjectPortfolioEsComponent;
  let fixture: ComponentFixture<ProjectPortfolioEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPortfolioEsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPortfolioEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
