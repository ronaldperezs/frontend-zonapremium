import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlataformaComponent } from './editar-plataforma.component';

describe('EditarPlataformaComponent', () => {
  let component: EditarPlataformaComponent;
  let fixture: ComponentFixture<EditarPlataformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPlataformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
