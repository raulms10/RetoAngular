import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { PostService } from '../../shared/service/post.service';
import { Post } from '../../shared/model/post';

@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.scss']
})
export class DetallePostComponent implements OnInit, OnDestroy {
  tokenId$: Observable<string | null> = this.route.paramMap.pipe(
    map((paramMap) => paramMap.get('id'))
  );
  postId: string;
  post: Post;
  private subs: Subscription[] = [];
  
  constructor(private route: ActivatedRoute, protected postService: PostService) { }
  
  ngOnInit(): void {
    this.subs.push(
      this.tokenId$.subscribe(paramMap => {
        this.postId = paramMap;
      })
    );

    this.subs.push(
      this.postService.consultarPorId(this.postId).subscribe((post) => {
        this.post = post;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(subscription => subscription.unsubscribe());
  }

}
