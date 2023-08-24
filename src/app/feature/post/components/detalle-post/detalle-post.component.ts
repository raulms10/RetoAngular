import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.scss']
})
export class DetallePostComponent implements OnInit, OnDestroy {
  postId: String;
  private subs: Subscription;
  tokenId$: Observable<string | null> = this.route.paramMap.pipe(
    map((paramMap) => paramMap.get('id'))
  );
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.subs = this.tokenId$.subscribe(paramMap => {
      this.postId = paramMap;
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
