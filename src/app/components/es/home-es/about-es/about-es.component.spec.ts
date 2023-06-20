import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEsComponent } from './about-es.component';

describe('AboutEsComponent', () => {
  let component: AboutEsComponent;
  let fixture: ComponentFixture<AboutEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
