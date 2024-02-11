import { Component } from '@angular/core';
import { LocalDataService } from 'src/app/service/local-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design-projects',
  templateUrl: './design-projects.component.html',
  styleUrls: ['./design-projects.component.css'],
})
export class DesignProjectsComponent {
  left = 0;
  right = 1;

  constructor(private service: LocalDataService, private router: Router) {}

  isActive(): boolean {
    // console.log(this.router.url)
    return this.router.url.length > 22;
  }
  getID(name: string) {
    // console.log("id ",name)
    this.service.setItem('project', name);
  }

  changueCardRight() {
    this.right = this.right + 1;
    this.left = this.left + 1;
    if (this.right > this.projects.length) {
      this.right = 1;
      this.left = 0;
    }
  }

  changueCardLeft() {
    this.right = this.right - 1;
    this.left = this.left - 1;

    if (this.left < 0) {
      this.right = this.projects.length;
      this.left = this.projects.length - 1;
    }
  }

  projects = [
    {
      title: 'Ambrosía Española',
      img: ['../../../assets/Image/Design/proyecto1/main-project1.webp'],
      descripcion:
        'Este proyecto tiene como objetivo fundamental crear una aplicación móvil de alta calidad que refleje la esencia de "Ambrosía Española" y brinde a los usuarios una experiencia memorable y satisfactoria mientras exploran y disfrutan de la deliciosa comida española que ofrece el restaurante.',
    },
    {
      title: 'Pet shop',
      img: ['../../../assets/Image/Design/proyecto2/main-project2.webp'],
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.',
    },
    {
      title: 'Veteran for Job',
      img: [
        '../../../assets/Image/Design/proyecto3/Screen-1-login.svg',
        '../../../assets/Image/Design/proyecto3/TV - 1.svg',
        '../../../assets/Image/Design/proyecto3/Home-not-login-screen.svg',
      ],
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.',
    },
  ];
}
