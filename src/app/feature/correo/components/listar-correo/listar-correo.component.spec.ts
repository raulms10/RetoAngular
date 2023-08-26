import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCorreoComponent } from './listar-correo.component';
import { HttpService } from '@core/services/http.service';
import { CorreoService } from '../../shared/service/correo.service';
import { CargandoService } from '@core/services/cargando.service';
import { HttpClientModule } from '@angular/common/http';

describe('ListarCorreoComponent', () => {
  let component: ListarCorreoComponent;
  let fixture: ComponentFixture<ListarCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCorreoComponent ],
      imports: [HttpClientModule],
      providers: [HttpService, CorreoService, CargandoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
