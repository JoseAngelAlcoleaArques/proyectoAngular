import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModificadorDepartamentoComponent } from './components/modificador-departamento/modificador-departamento.component';
import { ArbolDepartamentosComponent } from './components/arbol-departamentos/arbol-departamentos.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArbolDepartamentosComponent,
    ModificadorDepartamentoComponent,
    ArbolDepartamentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
