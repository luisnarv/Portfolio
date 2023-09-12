import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {


  projects = [{
    title: "Restaurant App",
    author: "Luis Narvaez",

    summaryProject: {
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
      Time: "Julio 2023 - Agosto 2023",
      image: "imagen",
      problem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
      object: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
      rol: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
      responsabilities: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
    },

    users: {
      userResearch: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
      weakPoints: {
        1: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        2: "Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores",
        3: "Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
      },
      person1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
      image: "image",
    },

    design: {
      1: {
        title: "Esquemas de página en papel",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        image: "imagen"
      },
      2: {
        title: "Esquemas de página digitales",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        image: "imagen"
      },
      3: {
        title: "prototipo de baja fidelidad",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        image: "imagen",
        link: "link"
      },
      4: {
        title: "EEstudio de facilidad de uso: hallazgos ",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        image: "imagen",
        Ronda1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        Ronda2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
      }
    },

    improveDesign: {
      maquetas: {
        title: "Maquetas",
        1:{
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        image1: "image1",
        image2: "image2"
        },
        2:{
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        image1: "image1",
        image2: "image2"
        },
      },

      hiFiPrototype:{
        title:"prototipo de alta fidelidad",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        image:"image",
        link:"link",
      },

      accesibility:{
        1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
      }
    },

    next:{
      conslusions:{
        impact:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        learn:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
      },

      nextSteps:{
        1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
      }
    },

    thanks:{
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
       email:"luiskendornarvaez@gmail.com", 
    },

  }]

}
