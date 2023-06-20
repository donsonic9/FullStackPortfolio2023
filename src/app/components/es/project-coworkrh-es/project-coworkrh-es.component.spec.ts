import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCoworkrhEsComponent } from './project-coworkrh-es.component';

describe('ProjectCoworkrhEsComponent', () => {
  let component: ProjectCoworkrhEsComponent;
  let fixture: ComponentFixture<ProjectCoworkrhEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCoworkrhEsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCoworkrhEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
