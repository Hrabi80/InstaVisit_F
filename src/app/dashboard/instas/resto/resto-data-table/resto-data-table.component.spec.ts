import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoDataTableComponent } from './resto-data-table.component';

describe('RestoDataTableComponent', () => {
  let component: RestoDataTableComponent;
  let fixture: ComponentFixture<RestoDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
