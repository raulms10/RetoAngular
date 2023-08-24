import { NgModule } from '@angular/core';

import { ClienteRoutingModule } from './cliente-routing.module';
import { BorrarClienteComponent } from './components/borrar-cliente/borrar-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { SharedModule } from '@shared/shared.module';
import { ClienteService } from './shared/service/cliente.service';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    CrearClienteComponent,
    ListarClienteComponent,
    BorrarClienteComponent,
    ClienteComponent,
    LoginComponent
  ],
  imports: [
    ClienteRoutingModule,
    SharedModule
  ],
  providers: [ClienteService]
})
export class ClienteModule { }
