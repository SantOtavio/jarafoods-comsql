import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarestauranteComponent } from './listarestaurante.component';

describe('ListarestauranteComponent', () => {
  let component: ListarestauranteComponent;
  let fixture: ComponentFixture<ListarestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
