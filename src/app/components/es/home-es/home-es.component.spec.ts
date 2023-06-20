import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEsComponent } from './home-es.component';

describe('HomeEsComponent', () => {
  let component: HomeEsComponent;
  let fixture: ComponentFixture<HomeEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
