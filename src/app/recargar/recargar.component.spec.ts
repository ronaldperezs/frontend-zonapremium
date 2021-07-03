import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargarComponent } from './recargar.component';

describe('RecargarComponent', () => {
  let component: RecargarComponent;
  let fixture: ComponentFixture<RecargarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
