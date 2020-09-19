import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOverviewLouerComponent } from './mobile-overview-louer.component';

describe('MobileOverviewLouerComponent', () => {
  let component: MobileOverviewLouerComponent;
  let fixture: ComponentFixture<MobileOverviewLouerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOverviewLouerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOverviewLouerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
