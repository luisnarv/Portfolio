import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjetcsComponent } from './components/projetcs/projetcs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailComponent } from './components/detail/detail.component';
import { DesignProjectsComponent } from './design-projects/design-projects.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjetcsComponent,
    NavbarComponent,
    DetailComponent,
    DesignProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
