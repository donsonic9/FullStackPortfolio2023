import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCoworkrhComponent } from './project-coworkrh.component';

describe('ProjectCoworkrhComponent', () => {
  let component: ProjectCoworkrhComponent;
  let fixture: ComponentFixture<ProjectCoworkrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCoworkrhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCoworkrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
