import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoFiltreComponent } from './resto-filtre.component';

describe('RestoFiltreComponent', () => {
  let component: RestoFiltreComponent;
  let fixture: ComponentFixture<RestoFiltreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoFiltreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
