import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';
import { CargandoService } from '@core/services/cargando.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'Inicio' },
    { url: '/correo', nombre: 'Correos'},
    { url: '/login', nombre: 'Sesión' }    
  ];

  mostrarCargando$ = this.cargandoService.mostarCargando$;

  constructor(private cargandoService: CargandoService) {}

}
