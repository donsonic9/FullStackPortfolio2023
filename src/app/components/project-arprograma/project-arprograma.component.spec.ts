import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectARProgramaComponent } from './project-arprograma.component';

describe('ProjectARProgramaComponent', () => {
  let component: ProjectARProgramaComponent;
  let fixture: ComponentFixture<ProjectARProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectARProgramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectARProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
