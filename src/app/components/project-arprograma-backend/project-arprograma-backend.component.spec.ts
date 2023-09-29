import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectArprogramaBackendComponent } from './project-arprograma-backend.component';

describe('ProjectArprogramaBackendComponent', () => {
  let component: ProjectArprogramaBackendComponent;
  let fixture: ComponentFixture<ProjectArprogramaBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectArprogramaBackendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectArprogramaBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
