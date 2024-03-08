// otro-modulo.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapModule } from './map/map.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [], // Otros componentes declarados aquí
  imports: [CommonModule, BrowserModule, MapModule], // Añade MapModule aquí
  exports: [], // Otros componentes exportados aquí
})
export class AppModule {}
