import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-localstorage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './localstorage.component.html',
  styleUrl: './localstorage.component.css'
})
export class LocalstorageComponent implements OnInit {

constructor(){}

  ngOnInit(): void {
    this.crearLocal();
  }

  crearLocal(){

    if (typeof(Storage)!=='undefined') {

      localStorage.setItem("TamilaMiVariable", "123456");

    }else{
      console.log("no se puede");
    }
  }
}
