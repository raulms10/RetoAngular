import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Correo } from '../../shared/model/correo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-correo',
  templateUrl: './card-correo.component.html',
  styleUrls: ['./card-correo.component.scss']
})
export class CardCorreoComponent {
  @Input() correo: Correo;
  @Output() eventEleminarCorreo = new EventEmitter<void>();

  constructor(private router: Router, private route: ActivatedRoute) { }

  //ngOnInit(): void {
  //  const o = 2;
  //}

  eliminarCorreo(): void {
    this.eventEleminarCorreo.emit();
  }

  detalleCorreo(): void{
    this.router.navigate(['detalle',this.correo.id], {relativeTo: this.route});
  }

}
