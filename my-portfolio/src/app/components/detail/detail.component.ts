import { Component, Input } from '@angular/core';
import { LocalDataService } from 'src/app/service/local-data.service';
import { projectsDesign } from './projects';
//import "../../../assets/Image/GitHub-Mark.png"

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {


  constructor(private service: LocalDataService) { }

  projects = {
    title: "",
    author: "",

    summaryProject: {
      summary: [
        {
          title: "",
          descripcion: ""
        },
        {
          title: "",
          descripcion: ""
        },
        {
          title: "",
          descripcion: ""
        },
        {
          title: "",
          descripcion: ""
        }],

        descripcion: [""],
      time: "",
      image: "",
      width: 0,
      height: 0,
    },

    users: {
      title: "",
      descripcion: [""],
      weakPoints: [""],
      person1: {
        title: "",
        name: "",
        descripcion: "",
        image: "",
        width: 0,
        height: 0,
      }
    },

    design: {
      0: {
        title: "",
        descripcion: [""],
        image: "",
        width: 400,
        height: 400,
      },
      1: {
        title: "",
        descripcion: [""],
        image: "",
        width: 400,
        height: 400,
      },
      2: {
        title: "",
        descripcion: [""],
        image: "",
        width: 400,
        height: 400,
        link: ""
      },
      3: {
        title: "",
        descripcion: [""],
        width: 400,
        height: 400,
      },
      4: {
        rond1: {
          title: "",
          descripcion: [
            "",
            "",
            "",
          ],
        },
        rond2: {
          title: "",
          descripcion: [""],
        }
      }

    },

    improveDesign: {
      maquetas: {
        title: "",
        0: {
          descripcion: "",
          image1: "",
          width: 400,
          height: 400,
        },
        1: {
          descripcion: "",
          image1: "",
          width: 400,
          height: 400,
        },
      },

      hiFiPrototype: {
        title: "",
        descripcion: "",
        image: "",
        width: 400,
        height: 400,
        link: ""
      },
      accesibility: {
        title: "",
        descripcion: [""]
      },
    },

    next: {
      conclusions: [""],

      nextSteps: [""]
    },

    thanks: {
      descripcion: "",
      email: "luiskendornarvaez@gmail.com",
    },

  };

  ngOnInit() {
    const id = this.service.getItem("project")
    console.log("este es el id", id, " s ", projectsDesign.length)

    for (let i = 0; i < projectsDesign.length; i++) {
      if (projectsDesign[i].title === id) { this.projects = projectsDesign[i] }
    }

  }
}