import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCultureComponent } from './nav-culture.component';

describe('NavCultureComponent', () => {
  let component: NavCultureComponent;
  let fixture: ComponentFixture<NavCultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
