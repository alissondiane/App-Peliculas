import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'buscar', component:BuscarComponent},
  {path:'buscar/:termino', component:BuscarComponent},
  {path:'pelicula/:id/:page',component: PeliculaComponent},
  {path:'pelicula/:id/:page/:busqueda',component: PeliculaComponent},
  {path:'**',pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
