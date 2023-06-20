import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEsComponent } from './footer-es.component';

describe('FooterEsComponent', () => {
  let component: FooterEsComponent;
  let fixture: ComponentFixture<FooterEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
