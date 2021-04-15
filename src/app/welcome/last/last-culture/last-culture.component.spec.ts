import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCultureComponent } from './last-culture.component';

describe('LastCultureComponent', () => {
  let component: LastCultureComponent;
  let fixture: ComponentFixture<LastCultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastCultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
