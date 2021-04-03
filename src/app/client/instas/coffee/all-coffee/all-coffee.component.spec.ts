import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCoffeeComponent } from './all-coffee.component';

describe('AllCoffeeComponent', () => {
  let component: AllCoffeeComponent;
  let fixture: ComponentFixture<AllCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
