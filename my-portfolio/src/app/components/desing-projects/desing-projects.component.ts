import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
//import "../../../assets/Image/Desing/proyecto1"


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
      "../../../assets/Image/Desing/proyecto1/Login screen - 2.png",
      "../../../assets/Image/Desing/proyecto1/Android Small - 1.png",
      "../../../assets/Image/Desing/proyecto1/Carrito- Screen- 4.png"],
    descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad."
  },
  {
    title:"titulo2",
    img:[""],
    descripcion:"infor"
  },
  {
    title:"titulo3",
    img:[""],
    descripcion:"infor"
  },
] 

}
