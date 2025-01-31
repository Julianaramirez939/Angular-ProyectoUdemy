import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-material-input',
  standalone: true,
  imports: [MatInputModule, FormsModule, MatSlideToggle, RouterModule],
  templateUrl: './material-input.component.html',
  styleUrl: './material-input.component.css',
})
export class MaterialInputComponent implements OnInit {
  numero1: number;
  numero2: number;
  opcion1 = false;
  opcion2 = false;
  opcion3 = false;
  opcion4 = false;
  resultado: any;

  constructor() {}

  ngOnInit(): void {}
  calcular() {
    this.resultado = '';
    if (this.opcion1) {
      let result = this.numero1 + this.numero2;
      this.resultado += `La suma es ${result}`;
    }
    if (this.opcion2) {
      let result = this.numero1 - this.numero2;
      this.resultado += `La resta es ${result}`;
    }
    if (this.opcion3) {
      let result = this.numero1 * this.numero2;
      this.resultado += `La multiplicación es ${result}`;
    }
    if (this.opcion4) {
      let result = this.numero1 / this.numero2;
      this.resultado += `La división es ${result}`;
    }
  }
}
