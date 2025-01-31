import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../servicios/api-rest.service';
import swal from 'sweetalert2';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoriasRequest } from '../../interfaces/categoria_request';

@Component({
  selector: 'app-api-rest-categorias-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './api-rest-categorias-edit.component.html',
  styleUrl: './api-rest-categorias-edit.component.css',
})
export class ApiRestCategoriasEditComponent implements OnInit {
  datos: any = {};
  id: string;
  formulario!: FormGroup;

  form = {
    nombre: '',
  };

  constructor(
    private servicio: ApiRestService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let params: any = this.route.snapshot.params;
    this.id = params.id;
    this.hacerPeticion(this.id);
    this.formulario = new FormGroup({
      nombre: new FormControl(this.form.nombre, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }
  get nombre() {
    return this.formulario.get('nombre')!;
  }

  hacerPeticion(id: any) {
    this.servicio.getCategoriasPorId(id).subscribe({
      next: (data) => {
        this.datos = data;
        this.formulario.get('nombre')?.setValue(this.datos.nombre);
      },
      error: (error) => {
        this.router.navigate(['/error']).then(() => {
          window.location.reload();
        });
        //console.error('Error', error);
      },
    });
  }

  enviar() {
    let modelo: CategoriasRequest = { nombre: this.formulario.value.nombre };
    this.servicio.editCategorias(modelo, this.id).subscribe({
      next: (data) => {
        swal.fire({
          icon: 'success',
          timer: 2000,
          title: 'OK',
          text: 'Se modificó el registro exitosamente',
        });
      },
      error: (error) => {
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Se produjo un error, por favor vuelve a intentar.',
        });
      },
    });
  }
}
