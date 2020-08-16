import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelmComponent } from './updatelm.component';

describe('UpdatelmComponent', () => {
  let component: UpdatelmComponent;
  let fixture: ComponentFixture<UpdatelmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatelmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
