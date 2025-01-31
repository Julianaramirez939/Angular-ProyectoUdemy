import { Injectable } from '@angular/core';
//Injectable que permite inyectar en los componentes el servicio, se debe inyectar en el constructor del componente
@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  constructor() { }


  getDato(){

    return "hola desde el servicio";
  }
  otroMetodo(nombre: string, apellido: string, edad: number)
  {
    return `Tu nombre es ${nombre} ${apellido} y tienes ${edad} años`

  }
}
