
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiplomaService {
  private _isDiplomaVisible = false;

  toggleDiplomaVisibility() {
    this._isDiplomaVisible = !this._isDiplomaVisible;
  }

  get isDiplomaVisible() {
    return this._isDiplomaVisible;
  }
}
