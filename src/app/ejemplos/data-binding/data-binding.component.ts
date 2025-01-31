import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule], //Implementar el CommonModule
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent implements OnInit {
  //implementar OnInit
  color: string = 'pink';
  texto: string = 'mi muñeca me habló';
  img: string = 'candy.jpg';
  ancho: number = 250;
  alto: number = 250;
  disable: boolean = false;

  constructor() {}
  //Agregar el constructor
  ngOnInit(): void {}
  //También el ngOnInit
  cambiar() {
    this.img = 'lulu.jpg';
    this.ancho = 500;
    this.alto = 500;
  }
}
