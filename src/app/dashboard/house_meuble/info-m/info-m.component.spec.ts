import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMComponent } from './info-m.component';

describe('InfoMComponent', () => {
  let component: InfoMComponent;
  let fixture: ComponentFixture<InfoMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
