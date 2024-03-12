// otro-modulo.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [], // Otros componentes declarados aquí
  imports: [CommonModule, BrowserModule],
  exports: [], // Otros componentes exportados aquí
})
export class AppModule {}
