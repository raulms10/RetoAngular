import { Component, OnInit, OnDestroy } from '@angular/core';
import { Correo } from '../../shared/model/correo';
import { Subscription } from 'rxjs';
import { CorreoService } from '../../shared/service/correo.service';

@Component({
  selector: 'app-listar-correo',
  templateUrl: './listar-correo.component.html',
  styleUrls: ['./listar-correo.component.scss']
})
export class ListarCorreoComponent implements OnInit, OnDestroy {
  listaCorreos: Correo[];
  private subs: Subscription[] = [];

  constructor(protected correoService: CorreoService) { }
  
  ngOnInit(): void {
    this.subs.push(
      this.correoService.consultar().subscribe((correos) => {
        this.listaCorreos = correos;
      })
    );
  }
  
  ngOnDestroy(): void {
    this.subs.forEach(subscription => subscription.unsubscribe());
  }

  eliminarCorreo(correo: Correo): void {
    this.subs.push(
      this.correoService.eliminar(correo).subscribe((resultado) => {
        console.log('Producto eliminado: ' + resultado);
      })
    );

    // Como la API no soporta una persistencia real, se elimina de la lista de Correo previamente cargada, se restablece al recargar el componente
    this.listaCorreos = this.listaCorreos.filter(
      (item) => item !== correo
    );
  }

}
