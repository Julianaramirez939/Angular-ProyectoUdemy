import { Component, OnInit } from '@angular/core';
import { ChartType, GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [GoogleChartsModule],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css',
})
export class GraficosComponent implements OnInit {
  titulo = 'Mi gráfico';
  datos = [
    ['PHP', 1000],
    ['Java', 2000],
    ['Python', 2500],
    ['JavaScript', 1524],
    ['C#', 1900],
  ];
  columnas = ['Lenguajes', 'Profesionales'];
  opciones = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    is3D: true,
  };
  tipo: ChartType = ChartType.AreaChart;
  constructor() {}
  ngOnInit(): void {}
}
