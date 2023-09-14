import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }
  
 // Método para guardar un valor del localStorage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  // Método para obtener un valor del localStorage
  getItem(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  // Método para eliminar un valor del localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Método para limpiar todos los valores del localStorage
  clear(): void {
    localStorage.clear();
  }

}
