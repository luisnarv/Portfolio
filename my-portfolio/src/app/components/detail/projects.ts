// import "../../../assets/Image/Design/proyecto2/"
export const projectsDesign = [{
    title: "Restaurant App",
    author: "Luis Narvaez",

    summaryProject: {
        descripcion: [
            "Es una aplicación para un restaurante de comida española, para ampliar su área de trabajo quieren tener una aplicación que permita ordenar un pedido que se pueda reservar una mesa, también quieren agregar una función para ordenar un domicilio o ir a recoger al local, ofrecen una amplia gama de alimentos y precios competitivos."
            , "Apunta a clientes como Familias, personas o trabajadores que prefieren variar y mantener su salud o aquellos que no tienen el tiempo o la capacidad para preparar una cena familiar.",
        ],
        time: "Julio 2023 - Agosto 2023",
        image: "../../../assets/Image/GitHub-Mark.png",
        width: 1000,
        height: 400,
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
        ], weakPoints: [
            "Los adultos que trabajan están demasiado ocupados para dedicar tiempo a preparar comidas.",
            "Las plataformas para pedir comida no están equipadas con tecnologías de asistencia.",
            "Los menús con mucho texto en las aplicaciones suelen ser difíciles de leer y usar para pedir.",
        ],
        person1: {
            title: "Persona",
            name: "Martha",
            descripcion: "Martha es un adulto que no tiene mucho tiempo para prepararce la cena, necesita fácil acceso a opciones de entrega de alimentos saludables porque en varias ocaciones suele tomarce más tiempo salir del trabajo.",
            image: "../../../assets/Image/GitHub-Mark.png",
            width: 700,
            height: 400,
        }
    },

    design: {
        0: {
            title: "Esquemas de página en papel",
            descripcion: ["Tomarse el tiempo para elaborar en papel iteraciones de cada pantalla de la aplicación garantizó que los elementos que llegaron a convertirse en esquemas de página digitales fueran los correctos para abordar las dificultades del usuario. Para la pantalla de inicio, prioricé un proceso de pedidos rápido y simple para evitar que los usuarios perdieran tiempo. "],
            image: "../../../assets/Image/GitHub-Mark.png",
            width: 400,
            height: 400,
        },
        1: {
            title: "Esquemas de página digitales",
            descripcion: ["A medida que la fase inicial del diseño continuaba, me aseguré de realizar los diseños de las pantallas según los comentarios y los resultados de la investigación de usuarios."],
            image: "../../../assets/Image/GitHub-Mark.png",
            width: 400,
            height: 400,
        },
        2: {
            title: "prototipo de baja fidelidad",
            descripcion: ["Usando el conjunto completo de esquemas de página digitales, creé un prototipo de baja fidelidad. El flujo de usuario principal que conecté fue el de construir y pedir una pizza, por lo que el prototipo podría usarse en un estudio de facilidad de uso."],
            image: "../../../assets/Image/GitHub-Mark.png",
            width: 400,
            height: 400,
            link: "https://www.figma.com/proto/mU4Z696yjsdTIfKnV9xQJT/Restaurant-prototipo-1?type=design&node-id=1-2&t=jry1h3xhBzE2C8lt-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2"
        },
        3: {
            title: "Estudio de facilidad de uso: hallazgos ",
            descripcion: ["Realicé dos rondas de estudios de facilidad de uso. Los hallazgos del primer estudio ayudaron a guiar los diseños para convertirlos de esquemas de página en maquetas. El segundo estudio utilizó un prototipo de alta fidelidad y reveló qué aspectos de las maquetas necesitaban refinarse."],

            width: 400,
            height: 400,
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
                descripcion: "Los primeros diseños permitían cierto nivel de personalización, pero, después de los estudios de facilidad de uso, agregué otras funciones como con que ingredientes fue prepado. También agrego comentarios de los usuarios.",
                image1: "../../../assets/Image/GitHub-Mark.png",
                image2: "../../../assets/Image/GitHub-Mark.png",
                width: 400,
                height: 400,
            },
            1: {
                descripcion: "El segundo estudio de usabilidad reveló frustración al no encontrar la funcion de mapa y el historial de pedidos. Para agilizar este flujo, agrege estas funicones a la pantalla principal. ",
                image1: "../../../assets/Image/GitHub-Mark.png",
                image2: "../../../assets/Image/GitHub-Mark.png",
                width: 400,
                height: 400,
            },
        },

        hiFiPrototype: {
            title: "prototipo de alta fidelidad",
            descripcion: "El prototipo final de alta fidelidad presentó flujos de usuario más limpios para crear una pizza y pagar. También satisfizo las necesidades de los usuarios de contar con una opción de recogida o entrega, así como de una mayor personalización.",
            image: "../../../assets/Image/GitHub-Mark.png",
            width: 400,
            height: 400,
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
        conclusions: [
            "La aplicación hace que los usuarios sientan que Restaurant Ap p realmente piensa en cómo satisfacer sus necesidades.",
            "Mientras diseñaba la aplicación, aprendí que las primeras ideas para la aplicación son solo el comienzo del proceso. Los estudios de facilidad de uso y el feedback de los compañeros influyeron en cada iteración de los diseños de la aplicación. ",
        ],

        nextSteps: [
            "Realizar otra ronda de estudios de facilidad de uso para validar si las dificultades experimentadas por los usuarios se abordaron de manera efectiva.",
            "Realizar más investigaciones de usuarios para identificar nuevas necesidades.",
        ]
    },

    thanks: {
        descripcion: "¡Gracias por tomarte el tiempo de revisar mi trabajo con la aplicación de Restaurant Ap p ! Si quieres ver más de mi trabajo o comunicarte conmigo, esta es mi información de contacto.",
        email: "luiskendornarvaez@gmail.com",
    },

},
//  ------------------------------ next project ------------------------------------
{
    title: "Pet shop",
    author: "Luis Narvaez",

    summaryProject: {
        descripcion: [
            "Pet shop es una página web de un centro de adopción accesible para usuarios de 19 a 65 años, el objetivo de Pet shop es permitir a los usuarios iniciar el proceso de adopción desde cualquier lugar, permite comprar de manera fácil y rapida"
        ],
        time: "Agosto 2023 - Agosto 2023",
        image: "../../../assets/Image/Design/proyecto2/Web 1920 – 20.webp",
        width: 700,
        height: 400,
        0: {
            title: "Problema",
            descripcion: "Los Sitios web de adopción para mascotas tienen diseños desordenados, procesos de pagos e información confusos."
        },
        1: {
            title: "Objetivo",
            descripcion: "Diseñar un sitio web que facilite el proceso de adopcón para los usuarios, que permita una navegación clara y procesos de pago rápido."
        },
        2: {
            title: "Rol",
            descripcion: "Diseñador de UX, líder de diseño del sitio web de Pet shop."
        },
        3: {
            title: "Responsabilities",
            descripcion: "Realizar entrevistas, esquemas en papel y digitales, crear prototipos de baja y alta fidelidad, realizar estudios de facilidad de uso, tener en cuenta la accesibilidad, repetir los diseños y el diseño adaptable."
        },
    },

    users: {
        title: "Entender al usuario",
        descripcion: [
            "Realice entrevistas a usuarios, siguiente a esto, las convertí en mapas de empatía para comprender mejor a los usuarios objetivos y sus necesidades.",
            "Descubrí que varios usuarios quieren adoptar una mascota, pero no saben cuáles son los requisitos, no saben como empezar el proceso o a donde ir para informarse, muchos sitios web de información de adopción no son claros y tienen un diseño desordenado, muchos usuarios se frustraron por esto, esto provoco que la idea de querer adoptar una mascota no sea una experiencia agradable terminando a si el proceso de adopción"
        ], weakPoints:
            [
                "Los diseños de páginas de adopción para mascotas tienden a estar cargados de mucha información sin un orden esto hace que la navegación sea confusa",
                "Varias páginas que cuentan con la opción de donaciones o compras, solo cuentan con un método de pago, además de tener muchos botones de pago que no cumplen su funcionalidad, esto no permite que los usuarios terminen su proceso de compra.",
                "Los sitios web no cuentan con una experiencia de navegación atractiva, imágenes de baja resolución con un tamaño muy grande.",
                "Los sitios web no cuentan con la funcionalidad de lector de pantalla o un diseño responsive para diferentes pantallas."
            ],

        person1: {
            title: "Persona",
            name: "Roberto",
            descripcion: "Roberto es un adulto que quiere adoptar una mascota, necesita un sitio web que le permita muestre mascotas que sea compatible con el, le brinde la información necesaria del proceso de adopción y que permita iniciar el proceso desde cualquier lugar, por que quiere que el proceso de adopción sea agradable y rápido",
            image: "../../../assets/Image/Design/proyecto2/persona.webp",
            width: 400,
            height: 400,
        }
    },

    design: {
        0: {
            title: "Esquemas de página en papel",
            descripcion: ["Acopntinuación esbocé esquemas de página en papel para las pantallas, teniendo en cuenta los puntos débiles de navegación.",
                "Las variaciónes de esquema de página en papel de la pantalal de inicio, se enfoca en optimizar la experiencia de navegación de lso usuarios"],
            image: "../../../assets/Image/GitHub-Mark.png",
            width: 400,
            height: 400,
        },
        1: {
            title: "Esquemas de página digitales",
            descripcion: ["Pasar los esquemas de página en papel a esquemas digitales, fácilito la comprensión de como el rediseño pudo ayudar lso puntos debiles del usuario y a mejorar la experiencia de usuario."],
            image: "../../../assets/Image/Design/proyecto2/Web 1920 – 1.webp",
            width: 400,
            height: 400,
        },
        2: {
            title: "prototipo de baja fidelidad",
            descripcion: ["Para este prototipo de baja fidelidad, conecté todas las pantallas involucradas en el flujo principal del usuario, Completar un formulario de adopción."],
            image: "../../../assets/Image/Design/proyecto2/protobajafidelidad.webp",
            width: 400,
            height: 400,
            link: "https://xd.adobe.com/view/cfb0e9a6-a305-4c4e-b704-212238f80319-9ae3/?fullscreen&hints=off"
        },
        3: {
            title: "Estudio de facilidad de uso: hallazgos ",
            descripcion: ["Realicé dos rondas de estudios de facilidad de uso. Los hallazgos del primer estudio ayudaron a guiar los diseños para convertirlos de esquemas de página en maquetas. El segundo estudio utilizó un prototipo de alta fidelidad y reveló qué aspectos de las maquetas necesitaban refinarse."],
            width: 400,
            height: 400,
        },
        4: {
            rond1: {
                title: "Hallazgos",
                descripcion: [
                    "Los usuarios no saben que resuelve en concreto la función de agendar una cita.",
                    "Los usuarios no veían obligatorio agendar una cita al momento de llenar el formulario.",
                    "Durante la prueba de facilidad de uso, los usuarios se encontraron con problemas al momento de buscar el botón para llenar un formulario.",
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
            title: "Maquetas",
            0: {
                descripcion: "Basándome en las conclusiones del estudio de facilidad de uso, realicé cambios, haciendo los textos más claros y mas visibles para el usuario, uno de los cambios realizados fue agregar la función de llenar un formulario de adopción al inicio de la pantalla y agregarle un texto más marcado para que resaltara.",
                image1: "../../../assets/Image/Design/proyecto2/TV - 1.webp",
                width: 400,
                height: 400,
            },
            1: {
                descripcion: "Para que fuera más fácil para los usuarios se les agrego una opción de pregunta si requieren agendar una cita previa, además se agrego información relevante sobro el formulario de adopción.",
                image1: "../../../assets/Image/Design/proyecto2/TV - 2.webp",
                width: 400,
                height: 400,
            },
        },

        hiFiPrototype: {
            title: "prototipo de alta fidelidad",
            descripcion: "El prototipo de alta fidelidad siguió el mismo flujo de usuario que el prototipo de baja fidelidad, agregue cambios que se hicieron luego de el estudio de facilidad de uso, a si como otros cambios sugeridos por el equipo.",
            image: "../../../assets/Image/Design/proyecto2/TV - 3.webp",
            width: 400,
            height: 400,
            link: "https://xd.adobe.com/view/43604d7b-37b4-4369-8258-ca89f5df369e-1633/"
        },

        accesibility: {
            title: "Accesibilidad",
            descripcion: [
                "Agregue encabezados de textos con distintos tamaños y cambiando un poco la tonalidad de color  para lograr una jerarquía visual clara.",
                "Usé puntos de referencia para ayudar  a los usuarios  a navegar por el sitio.",
                "Diseñe el sitio con alternativas disponibles en cada página para un acceso fluido de lectores de pantalla."
            ]
        },
    },

    next: {
        conclusions: [
            "Nuestros usuarios afirmaron que el diseño contaba con una navegación fácil, con texto claro e imágenes atractivas.",
            "Aprendí que nuestro producto siempre puede mejorar, un cambio minio o un cambio grande todo marca una diferencia, hay que proyectar nuestro producto siempre pensando en las necesidades de nuestros usuarios."
        ],

        nextSteps: [
            "Realizar pruebas de facilidad de uso de seguimiento en el nuevo diseño del sitio web.",
            "Identificar nuevas necesidades y funciones."
        ]
    },

    thanks: {
        descripcion: "¡Gracias por tomarte el tiempo de revisar mi trabajo con la aplicación de Restaurant Ap p ! Si quieres ver más de mi trabajo o comunicarte conmigo, esta es mi información de contacto.",
        email: "luiskendornarvaez@gmail.com",
    },

},
//  ------------------------------ next project ------------------------------------
{
    title: "Veteran for Job",
    author: "Luis Narvaez",

    summaryProject: {
        descripcion: [
            "Veteran for job es una aplicación móvil, con múltiples formas de acceso para los usuarios a través de un móvil, web y un diseño responsive, que proporciona asesoramiento y recursos para ayudar a los veteranos a postularse para trabajos adecuados a  sus habilidades y experiencias."
        ],
        time: "Septiembre 2023 - Septiembre 2023",
        image: "../../../assets/Image/Design/proyecto3/TV - 4.webp",
        width: 700,
        height: 400,
        0: {
            title: "Problema",
            descripcion: "Los veteranos de guerra a menudo enfrentan desafíos particulares al buscar empleo como civiles debido a las experiencias y circunstancias únicas asociadas con su servicio militar."
        },
        1: {
            title: "Objetivo",
            descripcion: "Diseñar una aplicación móvil que se a una herramienta valiosa para la búsqueda de empleo con una navegación clara y un diseño agradable."
        },
        2: {
            title: "Rol",
            descripcion: "Diseñador/UX"
        },
        3: {
            title: "Responsabilities",
            descripcion: "Realizar entrevistas, esquemas en papel y digitales, crear prototipos de baja y alta fidelidad, realizar estudios de facilidad de uso, tener en cuenta la accesibilidad, repetir los diseños y el diseño adaptable."
        },
    },

    users: {
        title: "Entender al usuario",
        descripcion: [
            "Realice entrevistas a usuarios, transformándolos en mapas de empatía para comprender mejor a los usuarios y sus necesidades. Se encontró que aunque hay muchas formas de ayuda para los veteranos de guerra, las cifras de veteranos en desempleo es muy alta y las aplicaciones móviles o web que ayudan a contrarrestar estas cifras son muy pocas y requieren de mucho tiempo o interacción algo que puede estresar al usuario."
        ],
        weakPoints:
            [""],

        person1: {
            title: "Persona",
            name: "María Sánchez",
            descripcion: "María es una veterana retirada, que necesita incorporarse a la vida laboral civil, porque quiere continuar ayudando a las personas.",
            image: "../../../assets/Image/Design/proyecto3/martha.webp",
            width: 400,
            height: 400,
        }
    },

    design: {
        0: {
            title: "Esquemas de página en papel",
            descripcion: ["Hice un ejercicio rápido de ideación “crazy eight”  para generar ideas basándome en los puntos identificadas en la auditoría competitiva. Mi atención se centró específicamente en el flujo del usuario para la búsqueda de empleo."],
            image: "../../../assets/Image/Design/proyecto3/esquemasPapel.webp",
            width: 400,
            height: 400,
        },
        1: {
            title: "Esquemas de página digitales",
            descripcion: ["Directamente a la búsqueda de empleo, compartir, comentar o contactar con el reclutador."],
            image: "../../../assets/Image/Design/proyecto3/Android Large - 1.webp",
            width: 300,
            height: 500,
        },
        2: {
            title: "prototipo de baja fidelidad",
            descripcion: ["Creé un prototipo de baja fidelidad que conectaba el flujo de usuario. Elegir una publicación, postularse y ver los datos del usuario."],
            image: "../../../assets/Image/Design/proyecto3/protobajafidelidad.webp",
            width: 400,
            height: 400,
            link: "https://www.figma.com/proto/Kjfms3YGz40lxcqFMpNVAp/Veteran-app?type=design&node-id=1-2&t=Vh2YkUIuoBqc6VaQ-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
        },
        3: {
            title: "Estudio de facilidad de uso: hallazgos ",
            descripcion: [""],
            width: 400,
            height: 400,
        },
        4: {
            rond1: {
                title: "Hallazgos",
                descripcion: [
                    "Filtrar la búsqueda.",
                    "Botón para regresar al flujo.",
                    "Permitir editar el about antes de enviar la postulación.",
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
            title: "Maquetas",
            0: {
                descripcion: "En la pantalla de perfil del usuario fue confuso para el usuario la interacción con la pantalla agregue opciones adicionales para ubicar al usuario en la pantalla y el flujo fuera más fácil.",
                image1: "../../../assets/Image/Design/proyecto3/TV - 5.webp",
                width: 400,
                height: 400,
            },
            1: {
                descripcion: "Agregue un botón que permite editar el about en caso de querer modificar sin cortar el flujo del usuario.",
                image1: "../../../assets/Image/Design/proyecto3/TV - 6.webp",
                width: 400,
                height: 400,
            },
        },

        hiFiPrototype: {
            title: "prototipo de alta fidelidad",
            descripcion: "El prototipo de alta fidelidad siguió el mismo flujo de usuario que el prototipo de baja fidelidad, presentó flujos de usuario más limpios, a si como otros cambios sugeridos por el equipo.",
            image: "../../../assets/Image/Design/proyecto3/prototipo.webp",
            width: 400,
            height: 400,
            link: "https://xd.adobe.com/view/43604d7b-37b4-4369-8258-ca89f5df369e-1633/"
        },

        accesibility: {
            title: "Accesibilidad",
            descripcion: [
                "Compatibilidad con lectores de pantalla.",
                "Filtros de búsqueda.",
                "Agregue encabezados de textos con distintos tamaños y cambiando un poco la tonalidad de color  para lograr una jerarquía visual clara.",
                
            ]
        },
    },

    next: {
        conclusions: [
            "Veterans for Jobs ofrece un diseño simple y fácil Nuestros usuarios afirmaron que el diseño contaba con una navegación fácil, con texto claro.",
            "Aprendí que nuestro producto siempre puede mejorar, un cambio minio o un cambio grande todo marca una diferencia, hay que proyectar nuestro producto siempre pensando en las necesidades de nuestros usuarios."
        ],

        nextSteps: [
            "Realizar pruebas de facilidad de uso de seguimiento en el nuevo diseño del sitio web.",
            "Realizar otra ronda de estudios de usabilidad para validar si los puntos débiles experimentados por los usuarios se han abordado de manera efectiva.", 
            "Identificar nuevas necesidades y funciones."
        ]
    },

    thanks: {
        descripcion: "¡Gracias por tomarte el tiempo de revisar mi trabajo con la aplicación de Restaurant Ap p ! Si quieres ver más de mi trabajo o comunicarte conmigo, esta es mi información de contacto.",
        email: "luiskendornarvaez@gmail.com",
    },

}
]

