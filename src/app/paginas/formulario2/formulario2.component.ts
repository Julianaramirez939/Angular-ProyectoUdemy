import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidaSelectDirectiveValidator } from '../../validaciones/valida-select.directive';
import swal from 'sweetalert2';
@Component({
  selector: 'app-formulario2',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.css'
})
export class Formulario2Component implements OnInit{
  formulario:FormGroup;
  paises: Array<any>;
  usuario = 
  {
    nombre:"",
    correo:"",
    telefono:"",
    direccion:"",
    pais:"",
    
  };
  

  constructor(){}

  ngOnInit(): void {
    this.formulario= new FormGroup({
      nombre: new FormControl(
        this.usuario.nombre,
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ),
      correo: new FormControl(
        this.usuario.correo,
        
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
        ]
      ),
      telefono: new FormControl(
        this.usuario.telefono,
        
        [
          Validators.required,
          Validators.minLength(4),
          
        ]
      ),
      direccion: new FormControl(
        this.usuario.direccion,
        
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ),
      pais: new FormControl(
        )
    }, {validators: ValidaSelectDirectiveValidator});
    this.paises=[{nombre: "chile",
      dominio: "cl"
    }, {nombre: "colombia", dominio: "cn"}, {nombre: "china", dominio: "ca"}];
    
  }
  get nombre() { return this.formulario.get('nombre')!;}
  get correo() { return this.formulario.get('correo')!;}
  get telefono() { return this.formulario.get('telefono')!;}
  get direccion() { return this.formulario.get('direccion')!;}
  get pais() { return this.formulario.get('pais')!;}
  enviar(){
    let datos='Nombre: '+ this.formulario.value.nombre 
      + ' E-Mail: ' + this.formulario.value.correo 
      + ' Teléfono: '+ this.formulario.value.telefono 
      + ' Dirección: '+ this.formulario.value.direccion 
      + ' País: '+this.formulario.value.pais;
      swal.fire(
        {
        icon: 'success', //Puede ser error, info, question,etc
        timer:5000,
        title: 'Ups..',
        text:datos
      }); 
  }
}
