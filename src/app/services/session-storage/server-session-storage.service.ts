import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerSessionStorageService {
  private store: { [key: string]: string } = {};

  constructor() {
  }

  get(key: string): string | null {
    return this.store[key];
  }

  set(key: string, value: string): void {
    this.store[key] = value;
  }

  remove(key: string): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {};
  }
}
