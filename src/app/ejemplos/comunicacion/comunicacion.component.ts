import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Comunicacion2Component } from '../comunicacion2/comunicacion2.component';

@Component({
  selector: 'app-comunicacion',
  standalone: true,
  imports: [CommonModule, Comunicacion2Component],
  templateUrl: './comunicacion.component.html',
  styleUrl: './comunicacion.component.css',
})
export class ComunicacionComponent implements OnInit {
  texto1: string = 'texto1';
  texto2: string = 'texto2';
  hijo: string;
  constructor() {}
  ngOnInit(): void {}
  actualizarHijo(value: string) {
    this.hijo = value;
  }
}
