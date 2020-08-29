import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdetailsComponent } from './ldetails.component';

describe('LdetailsComponent', () => {
  let component: LdetailsComponent;
  let fixture: ComponentFixture<LdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
