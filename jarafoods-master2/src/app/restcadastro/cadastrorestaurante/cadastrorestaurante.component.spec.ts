import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrorestauranteComponent } from './cadastrorestaurante.component';

describe('CadastrorestauranteComponent', () => {
  let component: CadastrorestauranteComponent;
  let fixture: ComponentFixture<CadastrorestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrorestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrorestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
