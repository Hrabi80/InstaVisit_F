import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelnmComponent } from './updatelnm.component';

describe('UpdatelnmComponent', () => {
  let component: UpdatelnmComponent;
  let fixture: ComponentFixture<UpdatelnmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatelnmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
