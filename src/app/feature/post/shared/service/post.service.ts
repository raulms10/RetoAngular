import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../model/post';

@Injectable()
export class PostService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet(`${environment.endpoint}/posts`)
      .pipe(map((response: any) => response as Post[]));
  }

  public guardar(post: Post) {
    return this.http.doPost<Post, boolean>(`${environment.endpoint}/posts`, post);
  }

  public eliminar(post: Post) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/posts/${post.id}`);
  }
}
