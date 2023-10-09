import { Component } from '@angular/core';
import { LocalDataService } from 'src/app/service/local-data.service';
//import "../../../assets/Image/Desing/proyecto2"


@Component({
  selector: 'app-desing-projects',
  templateUrl: './desing-projects.component.html',
  styleUrls: ['./desing-projects.component.css']
})
export class DesingProjectsComponent {

  left = 0 
  right = 1

  constructor(private service:LocalDataService){}

  getID(name:string){
    console.log("id ",name)
    const id = this.service.setItem("project", name);
  }

  changueCardRight(){
    this.right = this.right +1 ;
    this.left = this.left +1 ;
    if (this.right > this.projects.length ){
      this.right = 1;
      this.left = 0;
    }
  }

  changueCardLeft(){
    this.right = this.right -1
    this.left = this.left  -1

    if (this.left < 0 ){
      this.right = this.projects.length;
      this.left = this.projects.length - 1;
    }
  }


  projects= [{
    title:"Ambrosía Española",
    img:[
      "../../../assets/Image/Design/proyecto1/Login screen - 2.svg",
      "../../../assets/Image/Design/proyecto1/Android Small - 1.svg",
      "../../../assets/Image/Design/proyecto1/Carrito- Screen- 4.svg"],
    descripcion:'Este proyecto tiene como objetivo fundamental crear una aplicación móvil de alta calidad que refleje la esencia de "Ambrosía Española" y brinde a los usuarios una experiencia memorable y satisfactoria mientras exploran y disfrutan de la deliciosa comida española que ofrece el restaurante.'
  },
  {
    title:"Pet shop",
    img:[
      // "../../../assets/Image/Desing/proyecto2/Logo.svg",
      "../../../assets/Image/Design/proyecto2/Web 1920 – 20.svg",
    // "../../../assets/Image/Desing/proyecto2/Web 1920 – 28.svg",
    "../../../assets/Image/Design/proyecto2/Samsung Galaxy S10 – 2.svg",
   
   ],
    descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad."
  },
  {
    title:"Veteran for Job",
    img:[
      "../../../assets/Image/Design/proyecto3/Screen-1-login.svg",
      "../../../assets/Image/Design/proyecto3/TV - 1.svg",
      "../../../assets/Image/Design/proyecto3/Home-not-login-screen.svg",
  ],
  descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad."
  },
] 

}
