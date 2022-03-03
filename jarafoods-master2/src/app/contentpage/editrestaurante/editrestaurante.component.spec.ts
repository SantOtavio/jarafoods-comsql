import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrestauranteComponent } from './editrestaurante.component';

describe('EditrestauranteComponent', () => {
  let component: EditrestauranteComponent;
  let fixture: ComponentFixture<EditrestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
