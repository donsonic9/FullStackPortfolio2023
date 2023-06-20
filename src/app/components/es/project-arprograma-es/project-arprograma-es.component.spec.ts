import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectArprogramaEsComponent } from './project-arprograma-es.component';

describe('ProjectArprogramaEsComponent', () => {
  let component: ProjectArprogramaEsComponent;
  let fixture: ComponentFixture<ProjectArprogramaEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectArprogramaEsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectArprogramaEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
