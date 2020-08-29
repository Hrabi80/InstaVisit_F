import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LouernmComponent } from './louernm.component';

describe('LouernmComponent', () => {
  let component: LouernmComponent;
  let fixture: ComponentFixture<LouernmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LouernmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LouernmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
