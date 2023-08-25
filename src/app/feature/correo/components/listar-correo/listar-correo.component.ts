import { Component, OnInit, OnDestroy } from '@angular/core';
import { Correo } from '../../shared/model/correo';
import { Subscription } from 'rxjs';
import { CorreoService } from '../../shared/service/correo.service';
import { CargandoService } from '@core/services/cargando.service';

@Component({
  selector: 'app-listar-correo',
  templateUrl: './listar-correo.component.html',
  styleUrls: ['./listar-correo.component.scss']
})
export class ListarCorreoComponent implements OnInit, OnDestroy {
  listaCorreos: Correo[];
  private subs: Subscription[] = [];

  constructor(protected correoService: CorreoService, private cargandoService: CargandoService) { }
  
  ngOnInit(): void {
    this.cargandoService.abrirCargando();
    this.subs.push(
      this.correoService.consultar().subscribe((correos) => {
        this.cargandoService.cerrarCargando();
        this.listaCorreos = correos;
      })
    );
  }
  
  ngOnDestroy(): void {
    this.subs.forEach(subscription => subscription.unsubscribe());
  }

  eliminarCorreo(correo: Correo): void {
    this.subs.push(
      this.correoService.eliminar(correo).subscribe(() => {})
    );

    // Como la API no soporta una persistencia real, se elimina de la lista de Correo previamente cargada, se restablece al recargar el componente
    this.listaCorreos = this.listaCorreos.filter(
      (item) => item !== correo
    );
  }

}
