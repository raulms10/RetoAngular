/**
 * Directiva de validación de errores automáticamente (FromControl,FormControlName, NgModel)
 * @Version : 2.3
 *
 * Para que la directiva funcione y haga las respectivas validaciones es necesaria la etiqueta "validar"
 * al nivel igual o superior de los atributos(FromControl,FormControlName, NgModel)
 * - Ejemplo:
 *    <div validar>
 *      <input  [(ngModel)]="variable" [validaciones]="validaciones">
 *    </div>
 *    O
 *    <input validar [formControl]="variable" >
 *
 * La etiqueta "validar" puede ser remplazada en el archivo input-mensaje-errores-contenedor.directive.ts
 * una vez se encuentra un error agrega una clase al nivel del atributo "validar", el nombre de la clase de estilos
 * esta en a variable @nombreClaseError la por defecto es 'clase-invalido'
 *
 * Una vez encontrado el error es necesaria la lista estandarizada con cada uno de los errores y sus respectivos mensajes
 * la cual se encuentra en el archivo lista-errores
 *
 * Para poder renderizar en el HTMl es necesario el componente MensajeErrorPlantillaComponent
 * el cual contiene el aspecto de error
 *
 *
 * Parametros  de entrada
 * @errores => @Json
 * - Descripción: Json de con los nombres de los errores, también soporta anotaciones HTML
 * - Ejemplo:     {required: 'Elemento <b>requerido</b>'}
 * @validacionInicial => @Boolean
 * - Descripción: Es una bandera para validar si se quiere validar el input una vez renderizado el HTML
 *                por defecto @true
 * @validaciones =>
 * - Descripción: Debido a que un NgModel no tiene validaciones, por medio de esta variable le se envía
 *                un array de validaciones las cuales se le aplican normalmente a los formularios reactivos
 * - Ejemplo:     [Validators.required]
 *
 * Parametros de configuracion
 * @nombreClaseError => @string
 * - Descripción: Nombre de la clase de estilo que se agrega al encontrar un error
 *
 */

import {
  AfterViewChecked,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Host,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { AbstractControl, NgControl, NgModel, ValidatorFn } from '@angular/forms';
import { EMPTY, merge, Observable, Subscription } from 'rxjs';
import { MensajeErrorCamposContenedorDirective } from './mensaje-error-campos-contenedor.directive';
import { MensajeErrorCamposSubmitDirective } from './mensaje-error-campos-submit.directive';
import { FORM_ERRORS } from '../errores/lista-errores';
import { ErrorCamposPlantillaComponent } from '../componente/error-campos-plantilla.component';
/* eslint-disable @angular-eslint/directive-selector */

@Directive({
  selector: '[ngModel], [formControlName], [formControl]',
})
export class MensajeErrorCamposDirective implements OnInit, OnDestroy, AfterViewChecked {
  @Input() private errores = {};
  @Input() private validacionInicial = true;
  @Input() private validaciones: ValidatorFn[];
  private nombreClaseError = 'clase-invalido';
  private componente: ComponentRef<ErrorCamposPlantillaComponent>;
  private container: ViewContainerRef;
  private estado: Subscription;
  private submit: Observable<Event>;

  constructor(
    public vcr: ViewContainerRef,
    @Optional() controlErrorContainer: MensajeErrorCamposContenedorDirective,
    @Optional() @Host() private form: MensajeErrorCamposSubmitDirective,
    @Inject(FORM_ERRORS) private errors,
    private resolver: ComponentFactoryResolver,
    private renderer: Renderer2,
    private control: NgControl,
  ) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : null;
    this.submit = this.form ? this.form.submit : EMPTY;
  }

  public get validarEstadoInicial(): boolean {
    if (this.validacionInicial) {
      return this.validacionInicial;
    } else {
      return this.formControl.dirty || this.formControl.touched;
    }
  }
  
  private get formControl(): AbstractControl {
    return this.control.control;
  }


  ngOnInit(): void {
    this.agregarValidaciones();
    this.escucharEstados();
  }

  ngAfterViewChecked(): void {
    this.validarErrores();
  }

  ngOnDestroy(): void {
    this.estado.unsubscribe();
  }

  private agregarValidaciones(): void {
    if (this.control instanceof NgModel && this.validaciones) {
      this.control.control.setValidators(this.validaciones);
    }
  }

  private pintarErrorEnPantalla(texto: string = null): void {
    try {
      if (!this.componente) {
        const factory = this.resolver.resolveComponentFactory(ErrorCamposPlantillaComponent);
        this.componente = this.container.createComponent(factory);
      }
      this.componente.instance.text = texto;
      this.claseError(true);
    } catch (error) {
      console.error(error);
    }
  }

  private claseError(aplicarClase: boolean): void {
    if (this.container) {
      const contenedor = this.container.element.nativeElement;
      if (aplicarClase) {
        this.renderer.addClass(contenedor, this.nombreClaseError);
      } else {
        this.renderer.removeClass(contenedor, this.nombreClaseError);
      }
    }
  }

  private validarErrores(): void {
    try {
      if (this.formControl.invalid && this.validarEstadoInicial && this.formControl.touched) {
        const primerValor = Object.keys(this.formControl.errors)[0];
        const obtenerError = this.errors[primerValor];
        const texto =
          this.errores[primerValor] || obtenerError(this.formControl.errors[primerValor]);
        this.pintarErrorEnPantalla(texto);
        this.claseError(true);
      } else {
        this.pintarErrorEnPantalla();
        this.claseError(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  private escucharEstados(): void {
    this.estado = merge(this.submit, this.formControl.valueChanges).subscribe(() =>
      this.validarErrores(),
    );
  }
}
