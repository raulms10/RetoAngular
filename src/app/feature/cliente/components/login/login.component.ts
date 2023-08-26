import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarComponent } from '@core/components/snackbar/snackbar.component';
import { CookieService } from 'ngx-cookie-service';

const MENSAJE_SESION_INICIADA_CON_EXITO = 'Sesión iniciada, ahora puede ver los Correos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  token: string;
  loginForm: FormGroup;

  constructor(private cookieService: CookieService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.construirFormularioLogin();
    this.token = this.cookieService.get('token');
    const control = this.loginForm.get('tokenUsuario') as FormControl;
    control.setValue(this.token);
  }

  login() {
    const control = this.loginForm.get('tokenUsuario') as FormControl;
    this.cookieService.set('token', control.value);
    SnackBarComponent.abrirSnackBar(MENSAJE_SESION_INICIADA_CON_EXITO, this.snackBar);
    this.router.navigate(['/home']);
  }

  logout() {
    this.token = '';
    const control = this.loginForm.get('tokenUsuario') as FormControl;
    control.setValue(this.token);
    this.cookieService.set('token', control.value);
  }

  private construirFormularioLogin() {
    this.loginForm = new FormGroup({
      tokenUsuario: new FormControl('', Validators.required)
    });
  }
}
