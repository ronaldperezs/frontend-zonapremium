import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSuscripcionComponent } from './editar-suscripcion.component';

describe('EditarSuscripcionComponent', () => {
  let component: EditarSuscripcionComponent;
  let fixture: ComponentFixture<EditarSuscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSuscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
