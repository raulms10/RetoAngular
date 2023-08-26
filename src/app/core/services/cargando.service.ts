import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargandoService {
  mostarCargando$: Observable<boolean>;
  private cargando = new BehaviorSubject<boolean>(false);

  constructor() {
    this.mostarCargando$ = this.cargando.asObservable();
  }

  abrirCargando() {
    this.cargando.next(true);
  }

  cerrarCargando() {
    this.cargando.next(false);
  }
  
}
