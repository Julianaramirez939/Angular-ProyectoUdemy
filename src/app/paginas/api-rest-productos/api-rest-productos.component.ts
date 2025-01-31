import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiRestService } from '../../servicios/api-rest.service';
import { ProductosResponse } from '../../interfaces/productos_response';
import { CommonModule } from '@angular/common';
import { FormateaNumerosPipe } from '../../utilidades/formatea-numeros.pipe';
import { ApiRestProductosPorCategoriaComponent } from '../api-rest-productos-por-categoria/api-rest-productos-por-categoria.component';

@Component({
  selector: 'app-api-rest-productos',
  standalone: true,
  imports: [RouterModule, CommonModule, FormateaNumerosPipe],
  templateUrl: './api-rest-productos.component.html',
  styleUrl: './api-rest-productos.component.css',
})
export class ApiRestProductosComponent implements OnInit {
  datos: Array<ProductosResponse>;
  total: any;
  por_pagina: any;
  page = 1;
  links: number;
  paginas: Array<any> = [];
  constructor(
    private servicio: ApiRestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    let params: any = this.route.snapshot.queryParams;
    this.page = parseInt(params.page ? params.page : 1);
    this.hacerPeticion(this.page);
  }
  hacerPeticion(pagina: any) {
    this.servicio.getProductos(pagina).subscribe({
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
  eliminar(id: any){}
}
