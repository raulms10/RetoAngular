import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Correo } from '../model/correo';

@Injectable()
export class CorreoService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet(`${environment.endpoint}/posts`)
      .pipe(map((response: any) => response as Correo[]));
  }

  public consultarPorId(correoId: string) {
    return this.http.doGet(`${environment.endpoint}/posts/${correoId}`)
      .pipe(map((response: any) => response as Correo));
  }

  public guardar(correo: Correo) {
    return this.http.doPost<Correo, boolean>(`${environment.endpoint}/posts`, correo);
  }

  public eliminar(correo: Correo) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/posts/${correo.id}`);
  }
}
