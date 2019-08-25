import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHLComponent } from './new-hl.component';

describe('NewHLComponent', () => {
  let component: NewHLComponent;
  let fixture: ComponentFixture<NewHLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
