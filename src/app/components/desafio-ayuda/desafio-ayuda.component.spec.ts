import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioAyudaComponent } from './desafio-ayuda.component';

describe('DesafioAyudaComponent', () => {
  let component: DesafioAyudaComponent;
  let fixture: ComponentFixture<DesafioAyudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesafioAyudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
