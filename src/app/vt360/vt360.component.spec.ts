import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VT360Component } from './vt360.component';

describe('VT360Component', () => {
  let component: VT360Component;
  let fixture: ComponentFixture<VT360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VT360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VT360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
