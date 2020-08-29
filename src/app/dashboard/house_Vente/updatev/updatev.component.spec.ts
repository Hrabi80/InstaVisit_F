import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevComponent } from './updatev.component';

describe('UpdatevComponent', () => {
  let component: UpdatevComponent;
  let fixture: ComponentFixture<UpdatevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
