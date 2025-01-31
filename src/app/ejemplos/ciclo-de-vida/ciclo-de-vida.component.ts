import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ciclo-de-vida.component.html',
  styleUrl: './ciclo-de-vida.component.css',
})
export class CicloDeVidaComponent implements OnInit {
  texto: string = 'incial';
  constructor() {
    //Se ejecuta al inicio de la clase
    console.log('ejecución desde el constuctor');
  }

  ngOnInit(): void {
    console.log('ejecución desde el OnInit');
    //metodo para el ciclo de vida de los componentes.
  }
  ngDoCheck() {
    //Se ejecuta cuando el componente es afectado por algun cambio
    console.log('se ejecuta el metodo ngDoCheck');
  }
  ngOnDestroy() {
    //Se ejecuta cuando se cierra el componente.
  }
  cambiarTexto() {
    this.texto = 'otro valor';
    console.log('se ejecuta en el metodo ngDoCheck cambiando el texto');
  }
}
