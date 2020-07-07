import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DesafioAyudaComponent } from './components/desafio-ayuda/desafio-ayuda.component';
import { DesafioInstruccionesComponent } from './components/desafio-instrucciones/desafio-instrucciones.component';

@NgModule({
  declarations: [
    AppComponent,
    DesafioAyudaComponent,
    DesafioInstruccionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
