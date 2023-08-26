import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCorreoComponent } from './detalle-correo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CorreoService } from '../../shared/service/correo.service';
import { CargandoService } from '@core/services/cargando.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '@core/services/http.service';

describe('DetalleCorreoComponent', () => {
  let component: DetalleCorreoComponent;
  let fixture: ComponentFixture<DetalleCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleCorreoComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [HttpService, CorreoService, CargandoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
