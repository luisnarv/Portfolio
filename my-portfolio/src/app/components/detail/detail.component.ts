import { Component } from '@angular/core';
//import "../../../assets/Image/GitHub-Mark.png"

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
      descripcion: [
        "Es una aplicación para un restaurante de comida española, para ampliar su área de trabajo quieren tener una aplicación que permita ordenar un pedido que se pueda reservar una mesa, también quieren agregar una función para ordenar un domicilio o ir a recoger al local, ofrecen una amplia gama de alimentos y precios competitivos."
        , "Apunta a clientes como Familias, personas o trabajadores que prefieren variar y mantener su salud o aquellos que no tienen el tiempo o la capacidad para preparar una cena familiar.",
      ],
      time: "Julio 2023 - Agosto 2023",
      image: "../../../assets/Image/GitHub-Mark.png",
      0: {
        title: "Problema",
        descripcion: "Los trabajadores ocupados y personas con Discapacidad que no tienen el tiempo o se les dificulta preparar una rica comida."
      },
      1: {
        title: "Objetivo",
        descripcion: "Diseñar una aplicación para que permita a los usuarios, reservar, pedir y recoger fácilmente platos frescos y saludables."
      },
      2: {
        title: "Rol",
        descripcion: "Diseñador de UX a cargo de crear una aplicación de Restaurant Ap p desde la concepción hasta la entrega.",
      },
      3: {
        title: "Responsabilities",
        descripcion: "Realización de entrevistas, esquemas en papel y digitales, creación de prototipos de baja y alta fidelidad, realización de estudios de facilidad de uso, accesibilidad e iteración de diseños."
      },
    },

    users: {
      title: "Entender al usuario",
      descripcion: [
        "Realicé entrevistas y creé mapas de empatía para entender a los usuarios para quienes diseño, así como sus necesidades. Un grupo de usuarios primario identificado a través de la investigación fueron los adultos trabajadores que no tienen tiempo para cocinar.",
        "Este grupo de usuarios confirmó las suposiciones iniciales sobre las personas que suelen tener poco tiempo y muchas responsabilidades, pero la investigación ",
        "también reveló que el tiempo no era el único factor que limitaba a los usuarios a la hora de cocinar en casa. Los usuarios también tenían otros problemas, como obligaciones, intereses o desafíos que hacían que fuera difícil conseguir los comestibles para cocinar o ir a restaurantes en persona."
      ], weakPoints: {
        0: "Los adultos que trabajan están demasiado ocupados para dedicar tiempo a preparar comidas.",
        1: "Las plataformas para pedir comida no están equipadas con tecnologías de asistencia.",
        2: "Los menús con mucho texto en las aplicaciones suelen ser difíciles de leer y usar para pedir.",
      },
      person1: {
        title: "Persona",
        name: "Martha",
        descripcion: "Martha es un adulto que no tiene mucho tiempo para prepararce la cena, necesita fácil acceso a opciones de entrega de alimentos saludables porque en varias ocaciones suele tomarce más tiempo salir del trabajo.",
        image: "../../../assets/Image/GitHub-Mark.png",
      }
    },

    design: {
      0: {
        title: "Esquemas de página en papel",
        descripcion: "Tomarse el tiempo para elaborar en papel iteraciones de cada pantalla de la aplicación garantizó que los elementos que llegaron a convertirse en esquemas de página digitales fueran los correctos para abordar las dificultades del usuario. Para la pantalla de inicio, prioricé un proceso de pedidos rápido y simple para evitar que los usuarios perdieran tiempo. ",
        image: "../../../assets/Image/GitHub-Mark.png"
      },
      1: {
        title: "Esquemas de página digitales",
        descripcion: "A medida que la fase inicial del diseño continuaba, me aseguré de realizar los diseños de las pantallas según los comentarios y los resultados de la investigación de usuarios.",
        image: "../../../assets/Image/GitHub-Mark.png"
      },
      2: {
        title: "prototipo de baja fidelidad",
        descripcion: "Usando el conjunto completo de esquemas de página digitales, creé un prototipo de baja fidelidad. El flujo de usuario principal que conecté fue el de construir y pedir una pizza, por lo que el prototipo podría usarse en un estudio de facilidad de uso.",
        image: "../../../assets/Image/GitHub-Mark.png",
        link: "https://www.figma.com/proto/mU4Z696yjsdTIfKnV9xQJT/Restaurant-prototipo-1?type=design&node-id=1-2&t=jry1h3xhBzE2C8lt-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2"
      },
      3: {
        title: "Estudio de facilidad de uso: hallazgos ",
        descripcion: "Realicé dos rondas de estudios de facilidad de uso. Los hallazgos del primer estudio ayudaron a guiar los diseños para convertirlos de esquemas de página en maquetas. El segundo estudio utilizó un prototipo de alta fidelidad y reveló qué aspectos de las maquetas necesitaban refinarse.",
        image: "../../../assets/Image/GitHub-Mark.png",
      },
      4: {
        rond1: {
          title: "Hallazgos",
          descripcion: [
            "Los usuarios quieren ordenar rápidamente.",
            "La función para seguir el pedido.",
            "Los usuarios quieren tener  a la mano la función de la cesta para los pedidos.",
          ],
        },
        rond2: {
          title: "Hallazgos",
          descripcion: [
            "Los usuarios quieren una opción que permita ver la información de los alimentos.",
           " Los usuarios quieren más opciones de personalización como cantidad."
          ],
         }
      }

    },

    improveDesign: {
      maquetas: {
        title: "Maquetas",
        0: {
          descripcion:"Los primeros diseños permitían cierto nivel de personalización, pero, después de los estudios de facilidad de uso, agregué otras funciones como con que ingredientes fue prepado. También agrego comentarios de los usuarios.",
          image1: "../../../assets/Image/GitHub-Mark.png",
          image2: "../../../assets/Image/GitHub-Mark.png"
        },
        1: {
          descripcion: "El segundo estudio de usabilidad reveló frustración al no encontrar la funcion de mapa y el historial de pedidos. Para agilizar este flujo, agrege estas funicones a la pantalla principal. ",
          image1: "../../../assets/Image/GitHub-Mark.png",
          image2: "../../../assets/Image/GitHub-Mark.png"
        },
      },

      hiFiPrototype: {
        title: "prototipo de alta fidelidad",
        descripcion: "El prototipo final de alta fidelidad presentó flujos de usuario más limpios para crear una pizza y pagar. También satisfizo las necesidades de los usuarios de contar con una opción de recogida o entrega, así como de una mayor personalización.",
        image: "../../../assets/Image/GitHub-Mark.png",
        link: "https://www.figma.com/proto/pVf0X97OSvg6zZJDb4wOW5/Restaurant-prototipo-2?type=design&node-id=224-220&t=00gmvFFwXsc69xCo-1&scaling=scale-down&page-id=224%3A54&starting-point-node-id=224%3A220",
      },

      accesibility: {
        title: "Accesibilidad",
        descripcion: [
          "Se incorporó texto alternativo a las imágenes para lectores de pantalla para proporcionar acceso a los usuarios con problemas de visión.",
         "Los usuarios quieren más opciones de personalización como cantidad.",
         "Se usaron imágenes detalladas de los alimentos para ayudar a todos los usuarios a comprender mejor los diseños."
        ]
       },
    },

    next: {
      conclusions: {
        impact: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        learn: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
      },

      nextSteps: {
        0: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
        2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
      }
    },

    thanks: {
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla optio odit natus deserunt magni dolor rem enim! Voluptatibus, asperiores. Sequi recusandae veritatis pariatur dolorem nisi sint rem debitis vitae ad.",
      email: "luiskendornarvaez@gmail.com",
    },

  }]

}
