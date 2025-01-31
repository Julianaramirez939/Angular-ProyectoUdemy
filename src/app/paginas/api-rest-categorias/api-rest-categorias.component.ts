import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CategoriasResponse } from '../../interfaces/categorias_response';
import { ApiRestService } from '../../servicios/api-rest.service';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-api-rest-categorias',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule], // Asegúrate de incluir HttpClientModule
  templateUrl: './api-rest-categorias.component.html',
  styleUrls: ['./api-rest-categorias.component.css'],
})
export class ApiRestCategoriasComponent implements OnInit {
  datos: Array<CategoriasResponse>;
  largo: any;

  constructor(private servicio: ApiRestService, private router: Router) {}

  ngOnInit(): void {
    this.hacerPeticion();
  }

  hacerPeticion() {
    this.servicio.getCategorias().subscribe({
      next: (data) => {
        //console.log(data);
        this.datos = data;
        this.largo = Object.keys(this.datos).length;
      },
      error: (error) => {
        console.log('Error: ' + error);
      },
    });
  }
  eliminar(id: any) {
    Swal.fire({
      title: '¿Realmente desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'NO',
      confirmButtonText: 'SI',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.deleteCategorias(id).subscribe({
          next: (data) => {
            if (data.estado == 'ok') {
              Swal.fire({
                icon: 'success',
                timer: 2000,
                title: 'OK',
                text: 'Se eliminó el registro exitosamente',
              });
              this.router.navigate(['/api/categorias']).then(() => {
                window.location.reload();
              });
            } else {
              Swal.fire({
                icon: 'error',
                timer: 2000,
                title: 'Ups!',
                text: 'No es posible eliminar el registro',
              });
            }
            this.router.navigate(['/api/categorias']).then(() => {
              window.location.reload();
            });
          },
          error: (error) => {
            console.error('Error', error);
          },
        });
      }
    });
  }
}
