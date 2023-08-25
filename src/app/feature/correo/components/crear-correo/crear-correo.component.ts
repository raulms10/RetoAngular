import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CorreoService } from '../../shared/service/correo.service';
import { CookieService } from 'ngx-cookie-service';
import { Correo } from '../../shared/model/correo';

const LONGITUD_MINIMA_PERMITIDA_TITULO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TITULO = 40;
const LONGITUD_MINIMA_PERMITIDA_DESCRIPCION = 5;
const LONGITUD_MAXIMA_PERMITIDA_DESCRIPCION = 80;

@Component({
  selector: 'app-crear-correo',
  templateUrl: './crear-correo.component.html',
  styleUrls: ['./crear-correo.component.scss']
})
export class CrearCorreoComponent implements OnInit {
  correoForm: FormGroup;
  token: string; 

  constructor(protected correoService: CorreoService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.construirFormularioCorreo();
    this.token = this.cookieService.get('token');
  }

  crear() {
    const correo: Correo = {
      userId: this.token, 
      title: this.obtenerValorFormulario('title'),
      body: this.obtenerValorFormulario('body'),
      id: ''
    };
    this.correoService.guardar(correo).subscribe(()=>window.alert('usuario creado'));
  }

  private construirFormularioCorreo() {
    this.correoForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TITULO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TITULO)]),
      body: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_DESCRIPCION),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_DESCRIPCION)])
    });
  }

  private obtenerValorFormulario(nombreCampo: string) {
    const control = this.correoForm.get(nombreCampo) as FormControl;
    return control.value;
  }

}
