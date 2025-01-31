import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sesionstorage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sesionstorage.component.html',
  styleUrl: './sesionstorage.component.css',
})
export class SesionstorageComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.crear();
  }

  crear() {
    sessionStorage.setItem('tamilaSesion', '1091202939');
  }
}
