import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavImmobilierComponent } from './nav-immobilier.component';

describe('NavImmobilierComponent', () => {
  let component: NavImmobilierComponent;
  let fixture: ComponentFixture<NavImmobilierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavImmobilierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
