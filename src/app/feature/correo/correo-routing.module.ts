import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCorreoComponent } from './components/listar-correo/listar-correo.component';
import { DetalleCorreoComponent } from './components/detalle-correo/detalle-correo.component';
import { CrearCorreoComponent } from './components/crear-correo/crear-correo.component';

const routes: Routes = [
  {
    path: 'detalle/:id',
    component: DetalleCorreoComponent
  },
  {
    path: 'crear',
    component: CrearCorreoComponent
  },
  {
    path: '',
    component: ListarCorreoComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorreoRoutingModule { }
