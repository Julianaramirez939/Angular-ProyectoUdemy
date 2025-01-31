import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-sesionstorage2',
  standalone: true,
  imports: [],
  templateUrl: './sesionstorage2.component.html',
  styleUrl: './sesionstorage2.component.css'
})
export class Sesionstorage2Component implements OnInit {
  tamilaSesion: any;


  constructor(private router: Router){}
ngOnInit(): void {

  if(sessionStorage.getItem('tamilaSesion')!=null){
    this.tamilaSesion = sessionStorage.getItem('tamilaSesion');
  }else{

    this.router.navigate(['/']);
  }
  
}
borrar(){
  //sessionStorage.clear() //Limpia todo el storagen
  sessionStorage.removeItem('tamilaSesion');
  swal.fire({
    icon: 'success',
    title: 'OK',
    text: 'Se borró el token'
  });
  this.router.navigate(['/']);
}
}
