import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { MaterialComponent } from './paginas/material/material.component';
import { Ruta2Component } from './paginas/ruta2/ruta2.component';
import { Error404Component } from './paginas/error-404/error-404.component';
import { Formulario2Component } from './paginas/formulario2/formulario2.component';
import { MaterialBotonesComponent } from './paginas/material-botones/material-botones.component';
import { MaterialInputComponent } from './paginas/material-input/material-input.component';
import { MaterialTabsComponent } from './paginas/material-tabs/material-tabs.component';
import { MaterialDialogComponent } from './paginas/material-dialog/material-dialog.component';
import { MaterialExpansionComponent } from './paginas/material-expansion/material-expansion.component';
import { MaterialCardComponent } from './paginas/material-card/material-card.component';
import { ModalComponent } from './paginas/modal/modal.component';
import { MomentComponent } from './paginas/moment/moment.component';
import { GraficosComponent } from './paginas/graficos/graficos.component';
import { MapasComponent } from './paginas/mapas/mapas.component';
import { MapasGoogleComponent } from './paginas/mapas-google/mapas-google.component';
import { MapasMapboxComponent } from './paginas/mapas-mapbox/mapas-mapbox.component';
import { ServicioComponent } from './paginas/servicio/servicio.component';
import { LocalstorageComponent } from './paginas/localstorage/localstorage.component';
import { Localstorage2Component } from './paginas/localstorage2/localstorage2.component';
import { SesionstorageComponent } from './paginas/sesionstorage/sesionstorage.component';
import { Sesionstorage2Component } from './paginas/sesionstorage2/sesionstorage2.component';
import { CookieComponent } from './paginas/cookie/cookie.component';
import { Cookie2Component } from './paginas/cookie2/cookie2.component';
import { ApiRestComponent } from './paginas/api-rest/api-rest.component';
import { ApiRestCategoriasComponent } from './paginas/api-rest-categorias/api-rest-categorias.component';
import { ApiRestCategoriasAddComponent } from './paginas/api-rest-categorias-add/api-rest-categorias-add.component';
import { ApiRestCategoriasEditComponent } from './paginas/api-rest-categorias-edit/api-rest-categorias-edit.component';
import { ApiRestProductosComponent } from './paginas/api-rest-productos/api-rest-productos.component';
import { ApiRestProductosPorCategoriaComponent } from './paginas/api-rest-productos-por-categoria/api-rest-productos-por-categoria.component';
import { ApiRestProductosBuscadorComponent } from './paginas/api-rest-productos-buscador/api-rest-productos-buscador.component';
import { ApiRestProductosAddComponent } from './paginas/api-rest-productos-add/api-rest-productos-add.component';
import { ApiRestProductosEditComponent } from './paginas/api-rest-productos-edit/api-rest-productos-edit.component';
import { ApiRestProductosFotosComponent } from './paginas/api-rest-productos-fotos/api-rest-productos-fotos.component';
import { AccesoLoginComponent } from './paginas/acceso-login/acceso-login.component';
import { AccesoRegistroComponent } from './paginas/acceso-registro/acceso-registro.component';
import { AccesoRestringidoComponent } from './paginas/acceso-restringido/acceso-restringido.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, //Si no se pone nada, es la ruta principal del proyecto
  { path: 'formularios', component: FormulariosComponent },
  { path: 'formulario2', component: Formulario2Component },
  { path: 'material', component: MaterialComponent },
  { path: 'material/botones', component: MaterialBotonesComponent },
  { path: 'material/input', component: MaterialInputComponent },
  { path: 'material/tabs', component: MaterialTabsComponent },
  { path: 'material/dialog', component: MaterialDialogComponent },
  { path: 'material/expansion', component: MaterialExpansionComponent },
  { path: 'material/card', component: MaterialCardComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'moment', component: MomentComponent },
  { path: 'graficos', component: GraficosComponent },
  { path: 'mapas', component: MapasComponent },
  { path: 'mapas/google', component: MapasGoogleComponent },
  { path: 'mapas/mapbox', component: MapasMapboxComponent },
  { path: 'servicios', component: ServicioComponent },
  { path: 'localstorage', component: LocalstorageComponent },
  { path: 'localstorage2', component: Localstorage2Component },
  { path: 'sesionstorage', component: SesionstorageComponent },
  { path: 'sesionstorage2', component: Sesionstorage2Component },
  { path: 'cookie', component: CookieComponent },
  { path: 'cookie2', component: Cookie2Component },
  { path: 'ruta-2/:id/:slug', component: Ruta2Component }, //Pasar parametros path a ruta2

  { path: 'api-rest', component: ApiRestComponent },
  { path: 'api/categorias', component: ApiRestCategoriasComponent },
  { path: 'api/categorias/add', component: ApiRestCategoriasAddComponent },
  {
    path: 'api/categorias/edit/:id',
    component: ApiRestCategoriasEditComponent,
  },

  { path: 'api/productos', component: ApiRestProductosComponent },
  {
    path: 'api/productos-categoria/:slug',
    component: ApiRestProductosPorCategoriaComponent,
  },
  { path: 'api/productos-buscar', component: ApiRestProductosBuscadorComponent },
  { path: 'api/productos/add', component: ApiRestProductosAddComponent },
  { path: 'api/productos/editar/:id', component: ApiRestProductosEditComponent},
  { path: 'api/productos/fotos/:id', component: ApiRestProductosFotosComponent},

  { path: 'login', component: AccesoLoginComponent},
  { path: 'registro', component: AccesoRegistroComponent},
  { path: 'restringido', component: AccesoRestringidoComponent},


  { path: '**', component: Error404Component }, //Cualquiera de esas paginas no encontradas, van a parar aquí y siempre debe estar de último de todos los path
];
