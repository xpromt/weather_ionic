import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor() { }

  set(key: string, data: any): void {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to sessionStorage', e);
    }
  }

  get<T>(key: string): T | null {
    try {
      // @ts-ignore
      return JSON.parse(sessionStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from sessionStorage', e);
      return null;
    }
  }

  remove(key: string): void {
    sessionStorage.removeItem(key);
  }

  clear(): void {
    sessionStorage.clear();
  }
}
