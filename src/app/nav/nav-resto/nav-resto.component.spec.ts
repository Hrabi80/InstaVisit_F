import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRestoComponent } from './nav-resto.component';

describe('NavRestoComponent', () => {
  let component: NavRestoComponent;
  let fixture: ComponentFixture<NavRestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavRestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
