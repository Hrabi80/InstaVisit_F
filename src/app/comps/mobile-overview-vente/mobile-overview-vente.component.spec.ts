import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOverviewVenteComponent } from './mobile-overview-vente.component';

describe('MobileOverviewVenteComponent', () => {
  let component: MobileOverviewVenteComponent;
  let fixture: ComponentFixture<MobileOverviewVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOverviewVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOverviewVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
