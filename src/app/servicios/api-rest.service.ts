import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriasRequest } from '../interfaces/categoria_request';

@Injectable({
  providedIn: 'root',
})
export class ApiRestService {
  api: string;
  cabecero = {
    'content-type': 'application/json',
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYsImlhdCI6MTczNzQ3MTgyMiwiZXhwIjoxNzQwMDYzODIyfQ.36Lc9_v040_G63giyrnxtomlYlgRt3JqcCzjKNsNsQk',
  };

  constructor(private http: HttpClient) {
    this.api = environment.api;
  }
  getCategorias(): Observable<any> {
    return this.http.get(`${this.api}categorias`, { headers: this.cabecero });
  }

  getCategoriasPorId(id: any): Observable<any> {
    return this.http.get(`${this.api}categorias/${id}`, {
      headers: this.cabecero,
    });
  }
  getCategoriasPorSlug(slug: any): Observable<any> {
    return this.http.get(`${this.api}categorias-slug/${slug}`, {
      headers: this.cabecero,
    });
  }
  addCategorias(modelo: CategoriasRequest): Observable<any> {
    return this.http.post(`${this.api}categorias`, modelo, {
      headers: this.cabecero,
    });
  }

  editCategorias(modelo: CategoriasRequest, id: any): Observable<any> {
    return this.http.put(`${this.api}categorias/${id}`, modelo, {
      headers: this.cabecero,
    });
  }
  deleteCategorias(id: any): Observable<any> {
    return this.http.delete(`${this.api}categorias/${id}`, {
      headers: this.cabecero,
    });
  }

  //################PRODUCTOS

  getProductos(page: any): Observable<any> {
    return this.http.get(`${this.api}productos?page=${page}`, {
      headers: this.cabecero,
    });
  }

  getProductosCategoria(slug: any, page: any): Observable<any> {
    return this.http.get(`${this.api}productos-buscar/${slug}?page=${page}`, {
      headers: this.cabecero,
    });
  }
}
