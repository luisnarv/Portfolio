import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjetcsComponent } from './components/projetcs/projetcs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DesingProjectsComponent } from './components/desing-projects/desing-projects.component';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjetcsComponent,
    NavbarComponent,
    DesingProjectsComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
