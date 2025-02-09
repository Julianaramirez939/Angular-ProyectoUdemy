import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormateaNumerosPipe } from '../../utilidades/formatea-numeros.pipe';
import { ProductosResponse } from '../../interfaces/productos_response';
import { ApiRestService } from '../../servicios/api-rest.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-api-rest-productos-por-categoria',
  standalone: true,
  imports: [CommonModule, FormsModule, FormateaNumerosPipe, RouterModule],
  templateUrl: './api-rest-productos-por-categoria.component.html',
  styleUrl: './api-rest-productos-por-categoria.component.css',
})
export class ApiRestProductosPorCategoriaComponent implements OnInit {
  categoria: any = {};
  datos: Array<ProductosResponse>;
  total: any;
  por_pagina: any;
  page = 1;
  links: number;
  paginas: Array<any> = [];
  slug: string;
  constructor(
    private servicio: ApiRestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    let params: any = this.route.snapshot.queryParams;
    this.page = parseInt(params.page ? params.page : 1);
    let params_get: any = this.route.snapshot.params;
    this.slug = params_get.slug;
    this.hacerPeticion(this.slug, this.page);
    this.getCategoria(this.slug);
  }
  hacerPeticion(slug: any, pagina: any) {
    this.servicio.getProductosCategoria(slug, pagina).subscribe({
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
  getCategoria(slug: any) {
    this.servicio.getCategoriasPorSlug(slug).subscribe({
      next: (data) => {
        this.categoria = data;
      },
      error: (error) => {
        console.error('Error', error);
      },
    });
  }
  eliminar(id: any) {}
}
