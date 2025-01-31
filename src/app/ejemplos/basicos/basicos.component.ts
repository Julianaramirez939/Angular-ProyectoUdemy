import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { FormateaFechaPipe } from '../../utilidades/formatea-fecha.pipe';
import { FormateaNumerosPipe } from '../../utilidades/formatea-numeros.pipe';

@Component({
  selector: 'app-basicos',
  standalone: true,
  imports: [CommonModule, FormateaFechaPipe, FormateaNumerosPipe],
  templateUrl: './basicos.component.html',
  styleUrl: './basicos.component.css',
})
export class BasicosComponent implements OnInit {
  nombre: string = 'Juliana';
  correo: string = 'julianamolina317gmail.com';
  numero: number = 19; //any, en caso de que no se sepa el tipo de dato
  edad: number = 19;
  fecha: Date;
  html: string = `<strong>hola</strong>`; //el html es con comillas magicas (alt 96) y strong es texto en negrilla.
  paises: Array<any>;
  ejemplo: string;
  cantidad: number = 1234567;
  texto: string =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.';

  constructor() {
    this.fecha = new Date();
    this.paises = [
      { nombre: 'chile', dominio: 'cl' },
      { nombre: 'colombia', dominio: 'cn' },
      { nombre: 'china', dominio: 'ca' },
    ];
  }

  ngOnInit(): void {}
}
