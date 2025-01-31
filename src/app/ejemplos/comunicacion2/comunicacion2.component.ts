import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comunicacion2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comunicacion2.component.html',
  styleUrl: './comunicacion2.component.css',
})
export class Comunicacion2Component implements OnInit {
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Output() valordelhijo = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.valordelhijo.emit('valor desde el hijo'); //No se asigna el valor con = sino con . porque esto pasa a ser un objeto de la clase EvenEmitter
  }
}
