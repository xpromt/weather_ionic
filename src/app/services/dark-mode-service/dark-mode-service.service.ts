import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private _isDarkMode = false;

  get isDarkMode(): boolean {
    return this._isDarkMode;
  }

  set isDarkMode(value: boolean) {
    this._isDarkMode = value;
  }
}
