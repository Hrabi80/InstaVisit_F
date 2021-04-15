import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOverviewCultureComponent } from './mobile-overview-culture.component';

describe('MobileOverviewCultureComponent', () => {
  let component: MobileOverviewCultureComponent;
  let fixture: ComponentFixture<MobileOverviewCultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOverviewCultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOverviewCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
