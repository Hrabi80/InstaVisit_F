import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalledetailComponent } from './salledetail.component';

describe('SalledetailComponent', () => {
  let component: SalledetailComponent;
  let fixture: ComponentFixture<SalledetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalledetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
