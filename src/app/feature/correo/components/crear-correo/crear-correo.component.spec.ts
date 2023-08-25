import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCorreoComponent } from './crear-correo.component';

describe('CrearCorreoComponent', () => {
  let component: CrearCorreoComponent;
  let fixture: ComponentFixture<CrearCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCorreoComponent ]
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
