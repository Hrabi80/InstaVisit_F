import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracCoffeeComponent } from './carac-coffee.component';

describe('CaracCoffeeComponent', () => {
  let component: CaracCoffeeComponent;
  let fixture: ComponentFixture<CaracCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
