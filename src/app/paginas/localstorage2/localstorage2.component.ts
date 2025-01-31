import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-localstorage2',
  standalone: true,
  imports: [],
  templateUrl: './localstorage2.component.html',
  styleUrl: './localstorage2.component.css'
})
export class Localstorage2Component implements OnInit{
public tamila: any;
constructor(private router:Router){}


ngOnInit(): void {
  if(localStorage.getItem('TamilaMiVariable')!=null){
    this.tamila=localStorage.getItem('TamilaMiVariable');

  }else{
    this.router.navigate(['/'])

  }
}
evento(){
//localStorage.clear() //limpiar todo el storage
  localStorage.removeItem('TamilaMiVariable');
  swal.fire({
    icon: 'success',
    title: 'OK',
    text: 'Se borró el token'
  });

  this.router.navigate(['/'])
}
}
