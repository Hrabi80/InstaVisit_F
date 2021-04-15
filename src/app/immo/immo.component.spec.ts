import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmoComponent } from './immo.component';

describe('ImmoComponent', () => {
  let component: ImmoComponent;
  let fixture: ComponentFixture<ImmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
