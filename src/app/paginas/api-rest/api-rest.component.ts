import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-api-rest',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CommonModule],
  templateUrl: './api-rest.component.html',
  styleUrl: './api-rest.component.css'
})
export class ApiRestComponent {

}
