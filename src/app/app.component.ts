import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BasicosComponent } from './ejemplos/basicos/basicos.component';
import { DataBindingComponent } from './ejemplos/data-binding/data-binding.component';
import { CicloDeVidaComponent } from './ejemplos/ciclo-de-vida/ciclo-de-vida.component';
import { ComunicacionComponent } from './ejemplos/comunicacion/comunicacion.component';
import { Comunicacion2Component } from './ejemplos/comunicacion2/comunicacion2.component';
import { HomeComponent } from './paginas/home/home.component';
import { Ruta2Component } from './paginas/ruta2/ruta2.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { MaterialComponent } from './paginas/material/material.component';
import { Error404Component } from './paginas/error-404/error-404.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formulario2Component } from './paginas/formulario2/formulario2.component';
import { ValidaSelectDirective } from './validaciones/valida-select.directive';
import { MaterialBotonesComponent } from './paginas/material-botones/material-botones.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//material

import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import { MaterialInputComponent } from './paginas/material-input/material-input.component';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MaterialTabsComponent } from './paginas/material-tabs/material-tabs.component';
import { MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule} from '@angular/material/dialog';
import { MaterialDialogComponent } from './paginas/material-dialog/material-dialog.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { MaterialCardComponent } from './paginas/material-card/material-card.component';
import { MatCardModule} from '@angular/material/card';
import { ModalComponent } from './paginas/modal/modal.component';
import { MomentComponent } from './paginas/moment/moment.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicosComponent, DataBindingComponent, CicloDeVidaComponent, ComunicacionComponent,
    Comunicacion2Component, HomeComponent, Ruta2Component, FormulariosComponent, MaterialComponent, RouterModule
  , Error404Component, CabeceroComponent, FooterComponent, FormsModule, ReactiveFormsModule, Formulario2Component,
   ValidaSelectDirective, MaterialBotonesComponent, MatButtonModule, MatIconModule, MaterialInputComponent,
  MatInputModule, MatSlideToggleModule, MaterialTabsComponent, MatTabsModule, MatDialogModule, MaterialDialogComponent,
MatExpansionModule, MaterialCardComponent, MatCardModule, ModalComponent, MomentComponent],
    //Para manejar routerLink, se debe importar RouterModule
  providers: [CookieService, HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})  
export class AppComponent {
  title = 'proyecto';
}
