import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectArprogramaBackendEsComponent } from './project-arprograma-backend-es.component';

describe('ProjectArprogramaBackendEsComponent', () => {
  let component: ProjectArprogramaBackendEsComponent;
  let fixture: ComponentFixture<ProjectArprogramaBackendEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectArprogramaBackendEsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectArprogramaBackendEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
