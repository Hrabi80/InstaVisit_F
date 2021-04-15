import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOverviewCoffeeComponent } from './mobile-overview-coffee.component';

describe('MobileOverviewCoffeeComponent', () => {
  let component: MobileOverviewCoffeeComponent;
  let fixture: ComponentFixture<MobileOverviewCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOverviewCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOverviewCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
