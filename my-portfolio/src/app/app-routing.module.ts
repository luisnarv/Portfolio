import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjetcsComponent } from './components/projetcs/projetcs.component';
import { DetailComponent } from './components/detail/detail.component';
import { DesignProjectsComponent } from './design-projects/design-projects.component';

const routes: Routes = [
  {path:"", component:HomePageComponent},
 
  {path:"back", component:ProjetcsComponent},
  {path:"designProjects", component:DesignProjectsComponent, children: [
    { path: 'detail/:', component: DetailComponent }]},
  // {path:"detail/:", component:DetailComponent}, 
  {path:"**", component:HomePageComponent},//en caso de que la ruata no exista nos dirige al home
  // { path: 'ruta-especifica', component: RutaEspecificaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// const routes: Routes = [
//   // Otras rutas...
//   { path: 'ruta-especifica', component: RutaEspecificaComponent },
//   // Otras rutas...
// ];