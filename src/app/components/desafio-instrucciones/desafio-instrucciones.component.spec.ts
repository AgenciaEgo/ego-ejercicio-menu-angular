import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioInstruccionesComponent } from './desafio-instrucciones.component';

describe('DesafioInstruccionesComponent', () => {
  let component: DesafioInstruccionesComponent;
  let fixture: ComponentFixture<DesafioInstruccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioInstruccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioInstruccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
