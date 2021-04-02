import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureFiltreComponent } from './culture-filtre.component';

describe('CultureFiltreComponent', () => {
  let component: CultureFiltreComponent;
  let fixture: ComponentFixture<CultureFiltreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureFiltreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
