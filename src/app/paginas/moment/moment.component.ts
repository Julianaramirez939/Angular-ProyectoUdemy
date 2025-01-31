import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent implements OnInit{
fecha= new Date();
fechaCorta:any;
dia: string;
diaSemana: string;
mes: string;
anio: string;
hora: string;



fechaDias: any;
fechaMenosDias: any;
fechaMes: any;
fechaMenosMes: any;
fechaAnio: any;
fechaMenosAnio: any;

constructor(){}
  ngOnInit(): void {
    this.ejecutar();
    
  }
  ejecutar(){
    moment.locale("es");
    this.fechaCorta= moment(this.fecha).format("DD/MM/YYYY HH:mm");
    this.dia = moment(this.fecha).format("DD");
    this.mes = moment(this.fecha).format("MMMM"); //Si se le pone MMMM pone el nombre del mes
    this.anio = moment(this.fecha).format("YYYY"); 
    let dia2 = moment(this.fecha).format("dddd"); //Obtener el dia de la semana
    dia2= dia2[0].toUpperCase() + dia2.slice(1);
    this.diaSemana = dia2;
    //cálculos

    this.fechaDias = moment(this.fecha).add(7, 'days').format('DD/MM/YYYY');
    this.fechaMenosDias = moment(this.fecha).subtract(7, 'days').format('DD/MM/YYYY');
    this.fechaAnio = moment(this.fecha).add(7, 'years').format('DD/MM/YYYY');
    this.fechaMenosAnio = moment(this.fecha).subtract(7, 'years').format('DD/MM/YYYY');
    this.fechaMes = moment(this.fecha).add(7, 'months').format('DD/MM/YYYY');
    this.fechaMenosMes = moment(this.fecha).subtract(7, 'months').format('DD/MM/YYYY');
  }

}
