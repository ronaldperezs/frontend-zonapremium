import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPlataformaComponent } from "./registrar-plataforma.component";

describe('RegistrarPlataformaComponent', () => {
  let component: RegistrarPlataformaComponent;
  let fixture: ComponentFixture<RegistrarPlataformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPlataformaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
