import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPostComponent } from './components/listar-post/listar-post.component';
import { DetallePostComponent } from './components/detalle-post/detalle-post.component';

const routes: Routes = [
  {
    path: 'detalle/:id',
    component: DetallePostComponent
  },
  {
    path: '',
    component: ListarPostComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
