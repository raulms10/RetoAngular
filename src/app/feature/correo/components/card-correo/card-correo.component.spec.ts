import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCorreoComponent } from './card-correo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LimiteCaracteresPipe } from '@shared/pipe/limite-caracteres.pipe';
import { Correo } from '../../shared/model/correo';

describe('CardCorreoComponent', () => {
  let component: CardCorreoComponent;
  let fixture: ComponentFixture<CardCorreoComponent>;

  beforeEach(async () => {
    const correo: Correo = {id: 'id', userId: 'userId', title: 'title', body: 'body'};
    await TestBed.configureTestingModule({
      declarations: [LimiteCaracteresPipe, CardCorreoComponent ],
      //declarations: [CardCorreoComponent, LimiteCaracteresPipe],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCorreoComponent);
    component = fixture.componentInstance;
    component.correo = correo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
