import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, CanActivateChild, CanLoad, Router, UrlTree } from '@angular/router';
import { SnackBarComponent } from '@core/components/snackbar/snackbar.component';
import { CookieService } from 'ngx-cookie-service';

const MENSAJE_NO_PERMISO_RUTA = 'Para ingresar a esta opción, primero debes Iniciar sesión';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private cookieService: CookieService, private router: Router, private snackBar: MatSnackBar) {}

  canLoad(): true | UrlTree {
    return this.loginValido();
  }

  canActivateChild(): true | UrlTree {
    return this.loginValido();
  }

  canActivate(): true | UrlTree {
    return this.loginValido();
  }

  private loginValido() {
    const token = this.cookieService.get('token');
    if (!token) {
      SnackBarComponent.abrirSnackBar(MENSAJE_NO_PERMISO_RUTA, this.snackBar);
    }
    return !(!token) || this.router.parseUrl('/home');
  }
 
}
