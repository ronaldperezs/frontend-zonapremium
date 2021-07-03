import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerComprasComponent } from './ver-compras.component';

describe('VerComprasComponent', () => {
  let component: VerComprasComponent;
  let fixture: ComponentFixture<VerComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
