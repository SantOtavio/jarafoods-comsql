import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregadorSignupComponent } from './entregador-signup.component';

describe('EntregadorSignupComponent', () => {
  let component: EntregadorSignupComponent;
  let fixture: ComponentFixture<EntregadorSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregadorSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregadorSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
