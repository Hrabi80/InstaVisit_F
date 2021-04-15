import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRestoComponent } from './last-resto.component';

describe('LastRestoComponent', () => {
  let component: LastRestoComponent;
  let fixture: ComponentFixture<LastRestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastRestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
