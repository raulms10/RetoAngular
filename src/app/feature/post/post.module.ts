import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { ListarPostComponent } from './components/listar-post/listar-post.component';
import { SharedModule } from '@shared/shared.module';
import { DetallePostComponent } from './components/detalle-post/detalle-post.component';
import { PostService } from './shared/service/post.service';
import { CardPostComponent } from './components/card-post/card-post.component';
import { CrearPostComponent } from './components/crear-post/crear-post.component';


@NgModule({
  declarations: [
    ListarPostComponent,
    DetallePostComponent,
    CardPostComponent,
    CrearPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule
  ],
  providers: [PostService]
})
export class PostModule { }
