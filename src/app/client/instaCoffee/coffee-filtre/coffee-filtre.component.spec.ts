import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeFiltreComponent } from './coffee-filtre.component';

describe('CoffeeFiltreComponent', () => {
  let component: CoffeeFiltreComponent;
  let fixture: ComponentFixture<CoffeeFiltreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeFiltreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
