import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {


  projects= [{
    title:"Restaurant App",
    img:[
      "../../../assets/Image/Desing/proyecto1/Login screen - 2.svg",
      "../../../assets/Image/Desing/proyecto1/Android Small - 1.svg",
      "../../../assets/Image/Desing/proyecto1/Carrito- Screen- 4.svg"],
    descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad."
  },
  {
    title:"Pet shop",
    img:[
      // "../../../assets/Image/Desing/proyecto2/Logo.svg",
      "../../../assets/Image/Desing/proyecto2/Web 1920 – 20.svg",
    // "../../../assets/Image/Desing/proyecto2/Web 1920 – 28.svg",
    "../../../assets/Image/Desing/proyecto2/Samsung Galaxy S10 – 2.svg",
   
   ],
    descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad."
  },
  {
    title:"Veteran for Job",
    img:[
      "../../../assets/Image/Desing/proyecto3/Screen-1-login.svg",
      "../../../assets/Image/Desing/proyecto3/TV - 1.svg",
      "../../../assets/Image/Desing/proyecto3/Home-not-login-screen.svg",
  ],
  descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad."
  },
] 

}
