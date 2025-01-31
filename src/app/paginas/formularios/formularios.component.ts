import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent implements OnInit{
usuario:any;
users: Array<any>=[];
paises: Array<any>;
constructor(){
  this.usuario={
    nombre:"",
    correo:"",
    telefono:"",
    direccion:"",
    pais:"",
    
  };
}
ngOnInit(): void {
  this.paises=[{nombre: "chile",
    dominio: "cl"
  }, {nombre: "colombia", dominio: "cn"}, {nombre: "china", dominio: "ca"}];
  
}
checkboxMarca:boolean = false;
seleccionarCheck(evento:any){
  if(evento.target.checked){
    this.checkboxMarca=true;
    alert("si");

  }else{
    this.checkboxMarca=false;
    alert("no");
  }
}
enviar(){
  //console.log(this.usuario.nombre+" | "+this.usuario.correo+ " |" +this.usuario.telefono+ " | "+ this.usuario.direccion+
    //"|"+this.usuario.pais);
    this.users.push(
      {nombre: this.usuario.nombre,
      correo:this.usuario.correo,
      telefono:this.usuario.telefono,
      direccion:this.usuario.direccion,
      pais:this.usuario.pais}
    );
}
}
