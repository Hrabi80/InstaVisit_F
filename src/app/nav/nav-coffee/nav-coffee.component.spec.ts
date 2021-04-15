import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCoffeeComponent } from './nav-coffee.component';

describe('NavCoffeeComponent', () => {
  let component: NavCoffeeComponent;
  let fixture: ComponentFixture<NavCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
