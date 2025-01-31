import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-cookie2',
  standalone: true,
  imports: [],
  templateUrl: './cookie2.component.html',
  styleUrl: './cookie2.component.css'
})
export class Cookie2Component implements OnInit{

tamila: string;
constructor(private cookieService: CookieService, private router: Router){}
  ngOnInit(): void {
    if(this.cookieService.check('tamilaCookie'))
      {
        this.tamila=this.cookieService.get('tamilaCookie');

    }else{
      this.router.navigate(['/']);

    }
  }

  borrar()
  {
    this.cookieService.delete('tamilaCookie');
    swal.fire({
      icon: 'success',
      title: 'OK',
      text: 'Se borró la cookie'
    });
    this.router.navigate(['/']);
  }
  }


