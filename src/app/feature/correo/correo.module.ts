import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorreoRoutingModule } from './correo-routing.module';
import { ListarCorreoComponent } from './components/listar-correo/listar-correo.component';
import { SharedModule } from '@shared/shared.module';
import { DetalleCorreoComponent } from './components/detalle-correo/detalle-correo.component';
import { CorreoService } from './shared/service/correo.service';
import { CardCorreoComponent } from './components/card-correo/card-correo.component';
import { CrearCorreoComponent } from './components/crear-correo/crear-correo.component';


@NgModule({
  declarations: [
    ListarCorreoComponent,
    DetalleCorreoComponent,
    CardCorreoComponent,
    CrearCorreoComponent
  ],
  imports: [
    CommonModule,
    CorreoRoutingModule,
    SharedModule
  ],
  providers: [CorreoService]
})
export class CorreoModule { }
