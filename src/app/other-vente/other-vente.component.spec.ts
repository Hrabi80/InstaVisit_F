import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherVenteComponent } from './other-vente.component';

describe('OtherVenteComponent', () => {
  let component: OtherVenteComponent;
  let fixture: ComponentFixture<OtherVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
