import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-material-expansion',
  standalone: true,
  imports: [RouterModule, MatExpansionModule],
  templateUrl: './material-expansion.component.html',
  styleUrl: './material-expansion.component.css'
})
export class MaterialExpansionComponent implements OnInit{
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(){}

ngOnInit(): void {}
}
