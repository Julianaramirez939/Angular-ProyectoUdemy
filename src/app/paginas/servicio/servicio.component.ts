import { Component, OnInit } from '@angular/core';
import { EjemploService } from '../../servicios/ejemplo.service';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent implements OnInit{
  texto: string;
  mensaje: any;
//Se inyecta el servicio en el constructor del componente
  constructor(private ejemploService: EjemploService){
  
  }

  ngOnInit(): void {
    this.texto= this.ejemploService.getDato();
    this.mensaje= this.ejemploService.otroMetodo('Juliana','Molina', 18);
  }

}
