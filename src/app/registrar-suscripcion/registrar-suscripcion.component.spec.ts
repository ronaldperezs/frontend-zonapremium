import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSuscripcionComponent } from './registrar-suscripcion.component';

describe('RegistrarSuscripcionComponent', () => {
  let component: RegistrarSuscripcionComponent;
  let fixture: ComponentFixture<RegistrarSuscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarSuscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
