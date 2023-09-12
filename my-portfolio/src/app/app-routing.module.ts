import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjetcsComponent } from './components/projetcs/projetcs.component';
import { DesingProjectsComponent } from './components/desing-projects/desing-projects.component';

const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"back", component:ProjetcsComponent},
  {path:"desingProjects", component:DesingProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
