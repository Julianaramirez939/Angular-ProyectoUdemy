import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../servicios/api-rest.service';
import swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CategoriasRequest } from '../../interfaces/categoria_request';
@Component({
  selector: 'app-api-rest-categorias-add',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './api-rest-categorias-add.component.html',
  styleUrl: './api-rest-categorias-add.component.css'
})
export class ApiRestCategoriasAddComponent implements OnInit{
formulario!: FormGroup;

form = {
  nombre: ''
};

constructor(private servicio: ApiRestService, private router: Router){}

  ngOnInit(): void {
    this.formulario = new FormGroup({

      nombre: new FormControl
      (
        this.form.nombre,
        [
          Validators.required,
          Validators.minLength(4)
        ]
      )
    });
  }
  get nombre () { return this.formulario.get('nombre')!;}
  enviar()
  {
    let modelo: CategoriasRequest={nombre: this.formulario.value.nombre};
    this.servicio.addCategorias(modelo).subscribe({
      next:data=>
        {
          swal.fire({
            icon: 'success',
            timer: 2000,
            title: 'OK',
            text: 'Se creó la categoria exitosamente'
          });

        },
        error:error=>
        {
          swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'Se produjo un error, por favor vuelve a intentarlo.'
          });
          this.router.navigate(['/api/categorias/add']).then(()=>{
            window.location.reload();
          });
        }
    });
  }
}
