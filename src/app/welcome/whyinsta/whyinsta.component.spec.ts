import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyinstaComponent } from './whyinsta.component';

describe('WhyinstaComponent', () => {
  let component: WhyinstaComponent;
  let fixture: ComponentFixture<WhyinstaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyinstaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyinstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
