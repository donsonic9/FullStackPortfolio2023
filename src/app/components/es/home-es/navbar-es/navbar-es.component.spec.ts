import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEsComponent } from './navbar-es.component';

describe('NavbarEsComponent', () => {
  let component: NavbarEsComponent;
  let fixture: ComponentFixture<NavbarEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
