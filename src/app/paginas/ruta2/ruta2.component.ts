import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ruta2.component.html',
  styleUrl: './ruta2.component.css',
})
export class Ruta2Component implements OnInit {
  id: string; //Declara las variables de los parametros path que se van a mandar.
  slug: string;
  //Parametros de tipo query string, se declaran las variables
  page: 1;
  page2: 2;
  // Inyecta el servicio ActivatedRoute, para acceder a los parametros path de la ruta activa
  //Para el titulo dinámico tambien debemos inyectarlo en el constructor para que se inicializarlo.
  //Esto del Title dinamico es util para trabajar routing con lazy load.
  constructor(private route: ActivatedRoute, private titleServive: Title) {}

  ngOnInit(): void {
    this.cambiarTitle('Curso Angular - Ruta2');
    //let {id, slug} = this.route.snapshot.params;
    //this.id=id;
    //this.slug=slug;

    let params: any = this.route.snapshot.params; //Obtiene los parametros path de la ruta activa
    let queryparams: any = this.route.snapshot.queryParams; //Variable para los parametros query string.
    this.page = queryparams.page ? queryparams.page : 1;
    this.page2 = queryparams.page2 ? queryparams.page2 : 2;
    //__________________________
    this.id = params.id; //Guarda los parametros
    this.slug = params.slug;
    //console.log('id=' + this.id+'| slug = ' + this.slug); //Imprime los parametros path enviados por la URL
  }
  public cambiarTitle(titulo: string) {
    this.titleServive.setTitle(titulo);
  }
}
