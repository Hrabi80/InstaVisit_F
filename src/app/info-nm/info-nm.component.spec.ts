import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNmComponent } from './info-nm.component';

describe('InfoNmComponent', () => {
  let component: InfoNmComponent;
  let fixture: ComponentFixture<InfoNmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
