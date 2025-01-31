import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.css'
})
export class Error404Component implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }

}
