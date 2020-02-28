import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuteTableComponent } from './commute-table.component';

describe('CommuteTableComponent', () => {
  let component: CommuteTableComponent;
  let fixture: ComponentFixture<CommuteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommuteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
