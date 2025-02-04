import { Component, OnInit } from '@angular/core';
import { ProductosResponse } from '../../interfaces/productos_response';
import { ApiRestService } from '../../servicios/api-rest.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormateaNumerosPipe } from '../../utilidades/formatea-numeros.pipe';

@Component({
  selector: 'app-api-rest-productos-buscador',
  standalone: true,
  imports: [RouterModule, CommonModule, FormateaNumerosPipe],
  templateUrl: './api-rest-productos-buscador.component.html',
  styleUrl: './api-rest-productos-buscador.component.css',
})
export class ApiRestProductosBuscadorComponent implements OnInit {
  datos: Array<ProductosResponse>;
  total: any;
  por_pagina: any;
  page = 1;
  links: number;
  paginas: Array<any> = [];
  busqueda: string;
  constructor(
    private servicio: ApiRestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    let params: any = this.route.snapshot.queryParams;
    this.page = parseInt(params.page ? params.page : 1);
    this.busqueda = params.search ? params.search : '';
    this.hacerPeticion(this.page, this.busqueda);
  }
  hacerPeticion(pagina: any, busqueda: any) {
    this.servicio.getProductosBuscar(pagina, busqueda).subscribe({
      next: (data) => {
        this.datos = data.datos;
        this.total = data.total;
        this.por_pagina = data.por_pagina;
        this.links = data.links;
        for (let i = 1; i <= this.links; i++) {
          this.paginas[i] = i;
        }
      },
      error: (error) => {
        console.error('Error', error);
      },
    });
  }
  eliminar(id: any) {}
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

function hacerPeticion(pagina: any, any: any) {
  throw new Error('Function not implemented.');
}
