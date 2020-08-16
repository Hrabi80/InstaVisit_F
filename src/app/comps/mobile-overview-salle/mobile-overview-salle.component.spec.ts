import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOverviewSalleComponent } from './mobile-overview-salle.component';

describe('MobileOverviewSalleComponent', () => {
  let component: MobileOverviewSalleComponent;
  let fixture: ComponentFixture<MobileOverviewSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOverviewSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOverviewSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
