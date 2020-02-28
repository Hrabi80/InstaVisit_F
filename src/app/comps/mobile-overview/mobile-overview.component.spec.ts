import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOverviewComponent } from './mobile-overview.component';

describe('MobileOverviewComponent', () => {
  let component: MobileOverviewComponent;
  let fixture: ComponentFixture<MobileOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
