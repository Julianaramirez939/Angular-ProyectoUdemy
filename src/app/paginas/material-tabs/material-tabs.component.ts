import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-material-tabs',
  standalone: true,
  imports: [RouterModule, MatTabsModule, MatIconModule],
  templateUrl: './material-tabs.component.html',
  styleUrl: './material-tabs.component.css'
})
export class MaterialTabsComponent {

}
