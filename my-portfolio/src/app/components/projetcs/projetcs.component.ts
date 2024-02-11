import { Component } from '@angular/core';

@Component({
  selector: 'app-projetcs',
  templateUrl: './projetcs.component.html',
  styleUrls: ['./projetcs.component.css'],
})
export class ProjetcsComponent {
  left = 0;
  right = 1;

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
      title: 'titulo1',
      img: ['img'],
      descripcion: 'información',
    },
    {
      title: 'titulo2',
      img: ['image2'],
      descripcion: 'infor',
    },
    {
      title: 'titulo3',
      img: ['image2'],
      descripcion: 'infor',
    },
    {
      title: 'titulo4',
      img: ['image2'],
      descripcion: 'infor',
    },
    {
      title: 'titulo5',
      img: ['image2'],
      descripcion: 'infor',
    },
  ];
}
