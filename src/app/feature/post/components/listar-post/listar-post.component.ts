import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/model/post';
import { Observable } from 'rxjs';
import { PostService } from '../../shared/service/post.service';

@Component({
  selector: 'app-listar-post',
  templateUrl: './listar-post.component.html',
  styleUrls: ['./listar-post.component.scss']
})
export class ListarPostComponent implements OnInit {
  public listaPosts: Observable<Post[]>;

  constructor(protected postService: PostService) { }

  ngOnInit(): void {
    this.listaPosts = this.postService.consultar();
  }

}
