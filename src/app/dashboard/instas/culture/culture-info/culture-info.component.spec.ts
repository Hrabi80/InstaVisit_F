import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureInfoComponent } from './culture-info.component';

describe('CultureInfoComponent', () => {
  let component: CultureInfoComponent;
  let fixture: ComponentFixture<CultureInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
