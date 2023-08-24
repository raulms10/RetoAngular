import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../shared/model/post';
import { Subscription } from 'rxjs';
import { PostService } from '../../shared/service/post.service';

@Component({
  selector: 'app-listar-post',
  templateUrl: './listar-post.component.html',
  styleUrls: ['./listar-post.component.scss']
})
export class ListarPostComponent implements OnInit, OnDestroy {
  listaPosts: Post[];
  private subs: Subscription[] = [];

  constructor(protected postService: PostService) { }
  
  ngOnInit(): void {
    this.subs.push(
      this.postService.consultar().subscribe((posts) => {
        this.listaPosts = posts;
      })
    );
  }
  
  ngOnDestroy(): void {
    this.subs.forEach(subscription => subscription.unsubscribe());
  }

  eliminarPost(post: Post): void {
    this.subs.push(
      this.postService.eliminar(post).subscribe((resultado) => {
        console.log('Producto eliminado: ' + resultado);
      })
    );

    // Como la API no soporta una persistencia real, se elimina de la lista de Post previamente cargada, se restablece al recargar el componente
    this.listaPosts = this.listaPosts.filter(
      (item) => item !== post
    );
  }

}
