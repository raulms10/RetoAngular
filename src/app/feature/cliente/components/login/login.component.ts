import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  token: string;
  loginForm = new FormGroup({
    tokenUsuario: new FormControl('', Validators.required)
  });

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.token = this.cookieService.get('token');
    const control = this.loginForm.get('tokenUsuario') as FormControl;
    control.setValue(this.token);
  }

  login() {
    const control = this.loginForm.get('tokenUsuario') as FormControl;
    this.cookieService.set('token', control.value);
    this.router.navigate(['/home']);
  }

}
