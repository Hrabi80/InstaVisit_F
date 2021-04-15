import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOverviewRestoComponent } from './mobile-overview-resto.component';

describe('MobileOverviewRestoComponent', () => {
  let component: MobileOverviewRestoComponent;
  let fixture: ComponentFixture<MobileOverviewRestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOverviewRestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOverviewRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
