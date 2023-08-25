import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule), 
    canActivateChild: [SecurityGuard], canLoad: [SecurityGuard] },
  { path: 'login', loadChildren: () => import('@cliente/cliente.module').then(mod => mod.ClienteModule) },
  { path: 'correo', loadChildren: () => import('./feature/correo/correo.module').then(mod => mod.CorreoModule), 
    canActivateChild: [SecurityGuard], canLoad: [SecurityGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
