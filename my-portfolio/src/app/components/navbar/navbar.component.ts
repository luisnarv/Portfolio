import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  url: string = "";

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this.url = event.url
        console.log(this.url, "esto es url perros")
        
      }
    });
  }
  
  // isActive(route: string): boolean {
  //   console.log( this.router.url === route)
  //   return this.router.url === route;
  // }
 

}
