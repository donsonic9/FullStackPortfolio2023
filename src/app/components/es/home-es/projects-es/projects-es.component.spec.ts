import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsEsComponent } from './projects-es.component';

describe('ProjectsEsComponent', () => {
  let component: ProjectsEsComponent;
  let fixture: ComponentFixture<ProjectsEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsEsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
