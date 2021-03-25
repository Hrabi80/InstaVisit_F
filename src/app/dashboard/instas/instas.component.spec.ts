import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstasComponent } from './instas.component';

describe('InstasComponent', () => {
  let component: InstasComponent;
  let fixture: ComponentFixture<InstasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
