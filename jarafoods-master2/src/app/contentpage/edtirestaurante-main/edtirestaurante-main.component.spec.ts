import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtirestauranteMainComponent } from './edtirestaurante-main.component';

describe('EdtirestauranteMainComponent', () => {
  let component: EdtirestauranteMainComponent;
  let fixture: ComponentFixture<EdtirestauranteMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtirestauranteMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtirestauranteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
