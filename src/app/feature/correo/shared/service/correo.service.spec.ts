import { TestBed } from '@angular/core/testing';

import { CorreoService } from './correo.service';
import { HttpService } from '@core/services/http.service';
import { HttpClientModule } from '@angular/common/http';

describe('CorreoService', () => {
  let service: CorreoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpService, CorreoService]
    });
    service = TestBed.inject(CorreoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
