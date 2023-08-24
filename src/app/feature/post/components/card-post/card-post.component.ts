import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../shared/model/post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent {
  @Input() post: Post;
  @Output() eventEleminarPost = new EventEmitter<void>();

  constructor(private router: Router, private route: ActivatedRoute) { }

  //ngOnInit(): void {
  //  const o = 2;
  //}

  eliminarPost(): void {
    this.eventEleminarPost.emit();
  }

  detallePost(): void{
    this.router.navigate(['detalle',this.post.id], {relativeTo: this.route});
  }

}
