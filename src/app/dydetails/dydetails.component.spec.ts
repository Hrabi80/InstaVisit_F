import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DydetailsComponent } from './dydetails.component';

describe('DydetailsComponent', () => {
  let component: DydetailsComponent;
  let fixture: ComponentFixture<DydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
