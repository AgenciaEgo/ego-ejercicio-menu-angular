import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio-instrucciones',
  templateUrl: './desafio-instrucciones.component.html',
  styleUrls: [
    './desafio-instrucciones.component.scss'
  ]
})
export class DesafioInstruccionesComponent implements OnInit {
  showDesafio = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowDesafio() {
    this.showDesafio = !this.showDesafio;
  }


}
