import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmdetailsComponent } from './lmdetails.component';

describe('LmdetailsComponent', () => {
  let component: LmdetailsComponent;
  let fixture: ComponentFixture<LmdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
