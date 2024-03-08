// map.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule],
  exports: [MapComponent] // Si quieres hacerlo disponible fuera de este módulo
})
export class MapModule {}
