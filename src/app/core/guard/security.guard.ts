import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private cookieService: CookieService, private router: Router) {}

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
    return !(!token) || this.router.parseUrl('/home');
  }
 
}
