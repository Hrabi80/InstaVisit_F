import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSalleComponent } from './nav-salle.component';

describe('NavSalleComponent', () => {
  let component: NavSalleComponent;
  let fixture: ComponentFixture<NavSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
