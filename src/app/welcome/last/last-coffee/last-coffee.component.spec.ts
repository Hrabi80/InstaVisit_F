import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCoffeeComponent } from './last-coffee.component';

describe('LastCoffeeComponent', () => {
  let component: LastCoffeeComponent;
  let fixture: ComponentFixture<LastCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
