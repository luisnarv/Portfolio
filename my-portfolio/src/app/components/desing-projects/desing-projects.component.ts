import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
//import "../../../assets/Image/Desing/proyecto2"


@Component({
  selector: 'app-desing-projects',
  templateUrl: './desing-projects.component.html',
  styleUrls: ['./desing-projects.component.css']
})
export class DesingProjectsComponent {


  left = 0 
  right = 1

  constructor(private sanitiezer: DomSanitizer){
    const imagen1 =  "../../../assets/Image/GithubIcon.png";
    // this.projects[1].img= this.sanitiezer.bypassSecurityTrustResourceUrl(imagen1);
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
