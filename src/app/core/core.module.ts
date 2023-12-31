import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityGuard } from './guard/security.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token-interceptor';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpService } from './services/http.service';
import { ManejadorError } from './interceptor/manejador-error';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CargandoComponent } from './components/cargando/cargando.component';

@NgModule({
  declarations: [ToolbarComponent, NavbarComponent, CargandoComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [ToolbarComponent, NavbarComponent, CargandoComponent  ],
  providers: [
    HttpService,
    SecurityGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: ErrorHandler, useClass: ManejadorError }
  ]
})
export class CoreModule { }
