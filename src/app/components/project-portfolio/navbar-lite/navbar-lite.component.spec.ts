import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLiteComponent } from './navbar-lite.component';

describe('NavbarLiteComponent', () => {
  let component: NavbarLiteComponent;
  let fixture: ComponentFixture<NavbarLiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
