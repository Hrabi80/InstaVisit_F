import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHVComponent } from './new-hv.component';

describe('NewHVComponent', () => {
  let component: NewHVComponent;
  let fixture: ComponentFixture<NewHVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
