import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio-ayuda',
  templateUrl: './desafio-ayuda.component.html',
  styleUrls: [
    './desafio-ayuda.component.scss'
  ]
})
export class DesafioAyudaComponent implements OnInit {
  showAyuda = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowAyuda() {
    this.showAyuda = !this.showAyuda;
  }

}
