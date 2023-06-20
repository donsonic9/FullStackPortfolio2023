import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLiteEsComponent } from './navbar-lite-es.component';

describe('NavbarLiteEsComponent', () => {
  let component: NavbarLiteEsComponent;
  let fixture: ComponentFixture<NavbarLiteEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLiteEsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLiteEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
