import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { CorreoService } from '../../shared/service/correo.service';
import { Correo } from '../../shared/model/correo';
import { CargandoService } from '@core/services/cargando.service';

@Component({
  selector: 'app-detalle-correo',
  templateUrl: './detalle-correo.component.html',
  styleUrls: ['./detalle-correo.component.scss']
})
export class DetalleCorreoComponent implements OnInit, OnDestroy {
  tokenId$: Observable<string | null> = this.route.paramMap.pipe(
    map((paramMap) => paramMap.get('id'))
  );
  correoId: string;
  correo: Correo;
  private subs: Subscription[] = [];
  
  constructor(private route: ActivatedRoute, protected correoService: CorreoService, private cargandoService: CargandoService) { }
  
  ngOnInit(): void {
    this.cargandoService.abrirCargando();
    this.subs.push(
      this.tokenId$.subscribe(paramMap => {
        this.correoId = paramMap;
      })
    );

    this.subs.push(
      this.correoService.consultarPorId(this.correoId).subscribe((correo) => {
        this.cargandoService.cerrarCargando();
        this.correo = correo;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(subscription => subscription.unsubscribe());
  }
}
