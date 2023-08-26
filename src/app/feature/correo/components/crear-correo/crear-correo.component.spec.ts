import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCorreoComponent } from './crear-correo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CorreoService } from '../../shared/service/correo.service';
import { CookieService } from 'ngx-cookie-service';
import { CargandoService } from '@core/services/cargando.service';
import { HttpService } from '@core/services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('CrearCorreoComponent', () => {
  let component: CrearCorreoComponent;
  let fixture: ComponentFixture<CrearCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCorreoComponent ], 
      imports: [RouterTestingModule, HttpClientModule, MatSnackBarModule],
      providers: [HttpService, CorreoService, CookieService, CargandoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
