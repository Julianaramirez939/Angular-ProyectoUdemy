import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cookie.component.html',
  styleUrl: './cookie.component.css'
})
export class CookieComponent implements OnInit {

constructor(private cookieService: CookieService){}
  ngOnInit(): void {
    this.crear();
  }
  crear(){
    this.cookieService.set('tamilaCookie', '4758villa', 1);
  }
}
