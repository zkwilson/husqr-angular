import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(
      key,
      JSON.stringify(value, (key: string, value) => (value instanceof Set ? [...value] : value)));
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    if (item && item != undefined) {
      return JSON.parse(item)
    } else {
      return undefined
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
