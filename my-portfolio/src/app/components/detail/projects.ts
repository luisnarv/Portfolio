// import "../../../assets/Image/Design/proyecto2/"
export const projectsDesign = [
  {
    title: 'Ambrosía Española',
    author: 'Luis Narvaez',

    summaryProject: {
      summary: [
        {
          title: 'Problema',
          descripcion:
            'Los trabajadores ocupados y personas con Discapacidad que no tienen el tiempo o se les dificulta preparar una rica comida.',
        },
        {
          title: 'Objetivo',
          descripcion:
            'Diseño de Interfaz Intuitiva, Simplificar el Proceso de Pedido, Funciones de Comentarios y Valoraciones, Gestión de Reservas de Mesas.',
        },
        {
          title: 'Rol',
          descripcion:
            'Diseñador de UX a cargo de crear una aplicación de Restaurant Ap p desde la concepción hasta la entrega.',
        },
        {
          title: 'Responsabilidades',
          descripcion:
            'Realización de entrevistas, esquemas en papel y digitales, creación de prototipos de baja y alta fidelidad, realización de estudios de facilidad de uso, accesibilidad e iteración de diseños.',
        },
      ],
      descripcion: [
        ' "Ambrosía Española" es un auténtico restaurante de cocina española que se enorgullece de brindar a sus clientes una experiencia culinaria española de primera calidad. Con la visión de expandir sus servicios, estamos desarrollando una aplicación que permitirá a los usuarios realizar pedidos y reservar mesas de manera eficiente, opción de entrega a domicilio y la posibilidad de recoger los pedidos en el local para una mayor comodidad.',
        'Nuestra extensa selección de platos, acompañada de precios altamente competitivos, garantiza una oferta gastronómica que satisface diversos gustos y presupuestos. Esta aplicación está diseñada pensando en familias, individuos y profesionales ocupados que valoran la diversidad culinaria y desean mantener un estilo de vida saludable, o simplemente aquellos que buscan una solución conveniente para sus comidas familiares. Con "Ambrosía Española", la autenticidad de la cocina española se adapta a tu ritmo de vida.',
      ],
      time: 'Julio 2023 - Agosto 2023',
      image: '../../../assets/Image/Design/proyecto1/home-screen.webp',
      width: 300,
      height: 300,
    },

    users: {
      title: 'Entender al usuario',
      descripcion: [
        'Realicé entrevistas exhaustivas y generé mapas de empatía con el objetivo de comprender en profundidad a los usuarios para quienes estoy diseñando. En el transcurso de esta investigación, se identificó un grupo primario de usuarios: adultos con empleos a tiempo completo que, lamentablemente, no disponen del tiempo necesario para cocinar en casa.',
        'Los adultos que trabajan enfrentan una constante falta de tiempo que dificulta la preparación de comidas caseras. Además, hemos observado que las plataformas de pedidos de alimentos carecen de características de accesibilidad necesarias para atender a las necesidades de este grupo. En particular, los menús extensos y con abundante texto en las aplicaciones a menudo resultan difíciles de leer y utilizar al realizar un pedido, lo que añade otra capa de complejidad a su experiencia. Estamos comprometidos en abordar estos desafíos y diseñar una solución que simplifique y mejore la forma en que este grupo de usuarios ordena su comida.',
        'Si bien nuestras suposiciones iniciales se vieron respaldadas por las experiencias de este grupo de usuarios, la investigación arrojó una perspicaz revelación. Descubrimos que la limitación de tiempo no era el único obstáculo que enfrentaban estos usuarios al intentar preparar sus propias comidas. Otros factore',
        'Otros factores, como responsabilidades adicionales, intereses diversos y desafíos personales, también obstaculizaban sus esfuerzos por adquirir ingredientes frescos para cocinar en casa o visitar restaurantes físicamente.',
      ],
      weakPoints: [''],
      person1: {
        title: 'Persona',
        name: 'Martha',
        descripcion: [
          'Martha es una profesional ocupada y comprometida con su estilo de vida vegano. Busca una experiencia de usuario en la aplicación que le brinde comodidad, velocidad y precisión en la entrega de sus pedidos, así como notificaciones oportunas para mantenerla informada. La aplicación debe ser capaz de adaptarse a sus restricciones dietéticas y ofrecerle opciones veganas claras y personalizables para satisfacer sus necesidades alimenticias.',
          'En resumen, Martha busca una experiencia de usuario ágil y adaptable que se integre perfectamente con su ajetreada vida laboral y su estilo de vida vegano.',
        ],
        image: '../../../assets/Image/Design/proyecto1/Persona-martha.webp',
        width: 200,
        height: 400,
      },
    },

    mapSite: {
      title: '',
      descripcion: [''],
      img: '',
    },

    design: {
      0: {
        title: 'Esquemas de página en papel',
        descripcion: [
          'Tomarse el tiempo para elaborar en papel iteraciones de cada pantalla de la aplicación garantizó que los elementos que llegaron a convertirse en esquemas de página digitales fueran los correctos para abordar las dificultades del usuario. Para la pantalla de inicio, prioricé un proceso de pedidos rápido y simple para evitar que los usuarios perdieran tiempo. ',
        ],
        image: '../../../assets/Image/Design/proyecto1/essquemas.webp',
        width: 494,
        height: 671,
      },
      1: {
        title: 'Esquemas de página digitales',
        descripcion: [
          'A medida que la fase inicial del diseño continuaba, me aseguré de realizar los diseños de las pantallas según los comentarios y los resultados de la investigación de usuarios.',
        ],
        image:
          '../../../assets/Image/Design/proyecto1/home-screen-digital.webp',
        width: 400,
        height: 600,
      },
      2: {
        title: 'prototipo de baja fidelidad',
        descripcion: [
          'Invertir tiempo en la creación de iteraciones para cada pantalla de la aplicación fue esencial para garantizar que los elementos finales, que se transformaron en los diseños digitales de las páginas, fueran los adecuados para abordar las necesidades del usuario. En el caso de la pantalla de inicio, mi principal enfoque se centró en desarrollar un proceso de pedido rápido y sencillo, con el propósito de evitar que los usuarios perdieran tiempo innecesario.',
        ],
        image: '../../../assets/Image/Design/proyecto1/proto-baja.webp',
        // image: "../../../assets/Image/Design/proyecto1/prototipo-bajafidelidad.png",
        // width: 600,
        width: 900,
        height: 626,
        link: 'https://www.figma.com/proto/mU4Z696yjsdTIfKnV9xQJT/Restaurant-prototipo-1?type=design&node-id=1-2&t=jry1h3xhBzE2C8lt-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2',
      },
      3: {
        title: 'Estudio de facilidad de uso: hallazgos ',
        descripcion: [
          'Realicé dos rondas de estudios de facilidad de uso.',
          'Los hallazgos del primer estudio ayudaron a guiar los diseños para convertirlos de esquemas de página en maquetas. El segundo estudio utilizó un prototipo de alta fidelidad y reveló qué aspectos de las maquetas necesitaban refinarse.',
        ],

        width: 400,
        height: 400,
      },
      4: {
        rond1: {
          title: 'Hallazgos Ronda 1',
          descripcion: [
            'Los usuarios quieren ordenar rápidamente.',
            'La función para seguir el pedido.',
            'Los usuarios quieren tener  a la mano la función de la cesta para los pedidos.',
          ],
        },
        rond2: {
          title: 'Hallazgos Ronda 2',
          descripcion: [
            'Los usuarios quieren una opción que permita ver la información de los alimentos.',
            ' Los usuarios quieren más opciones de personalización como cantidad.',
          ],
        },
      },
    },

    improveDesign: {
      maquetas: {
        title: 'Maquetas',
        0: {
          descripcion:
            'En los diseños iniciales, se ofrecía un cierto nivel de personalización; sin embargo, tras realizar estudios de facilidad de uso, se implementaron nuevas funciones, como la posibilidad de verificar los ingredientes utilizados en la preparación. Además, se incorporaron las opiniones y comentarios de los usuarios.',
          image1: '../../../assets/Image/Design/proyecto1/paella.webp',
          width: 800,
          height: 546,
        },
        1: {
          descripcion: '',
          image1: '',
          width: 0,
          height: 0,
        },
      },

      hiFiPrototype: {
        title: 'prototipo de alta fidelidad',
        descripcion:
          'El prototipo final de alta fidelidad se caracterizó por flujos de usuario más simplificados y cumplió satisfactoriamente con las demandas de los usuarios, ofreciendo opciones tanto de recogida como de entrega, además de una mayor capacidad de personalización.',
        image: '../../../assets/Image/Design/proyecto1/proto-alta.webp',
        //image: "../../../assets/Image/Design/proyecto1/prototipo de alta fidelidad.png",
        width: 900,
        height: 626,
        link: 'https://www.figma.com/proto/pVf0X97OSvg6zZJDb4wOW5/Restaurant-prototipo-2?type=design&node-id=359-244&t=weHYs8UWbgyQzXUJ-1&scaling=scale-down&page-id=359%3A133&starting-point-node-id=359%3A244&show-proto-sidebar=1&mode=design',
      },

      accesibility: {
        title: 'Accesibilidad',
        descripcion: [
          'Se incorporó texto alternativo a las imágenes para lectores de pantalla para proporcionar acceso a los usuarios con problemas de visión.',
          'Los usuarios quieren más opciones de personalización como cantidad.',
          'Se usaron imágenes detalladas de los alimentos para ayudar a todos los usuarios a comprender mejor los diseños.',
        ],
      },
    },

    stickerSheets: {
      title: 'Hoja de pegatinas',
      img: [
        '../../../assets/Image/Design/proyecto1/TV - 3.webp',
        '../../../assets/Image/Design/proyecto1/TV - 4.webp',
      ],
    },

    next: {
      conclusions: [
        'La aplicación hace que los usuarios sientan que "Ambrosía Española" realmente piensa en cómo satisfacer sus necesidades.',
        'Mientras diseñaba la aplicación, aprendí que las primeras ideas para la aplicación son solo el comienzo del proceso. Los estudios de facilidad de uso y el feedback de los compañeros influyeron en cada iteración de los diseños de la aplicación. ',
      ],

      nextSteps: [
        'Realizar otra ronda de estudios de facilidad de uso para validar si las dificultades experimentadas por los usuarios se abordaron de manera efectiva.',
        'Realizar más investigaciones de usuarios para identificar nuevas necesidades.',
      ],
    },

    thanks: {
      descripcion:
        '¡Gracias por tomarte el tiempo de revisar mi trabajo con la aplicación de "Ambrosía Española" ! Si quieres ver más de mi trabajo o comunicarte conmigo, esta es mi información de contacto.',
      email: 'luiskendornarvaez@gmail.com',
    },
  },
  //  ------------------------------ next project ------------------------------------
  {
    title: 'Pet shop',
    author: 'Luis Narvaez',

    summaryProject: {
      summary: [
        {
          title: 'Problema',
          descripcion:
            'Es común encontrar que los sitios web de adopción de mascotas presentan diseños caóticos, procesos de pago confusos y falta de información clara.',
        },
        {
          title: 'Objetivo',
          descripcion:
            'Diseñar un sitio web que simplifique el proceso de adopción para los usuarios, ofreciendo una navegación intuitiva y un proceso de pago ágil.',
        },
        {
          title: 'Rol',
          descripcion: 'Diseñador líder de UX del sitio web de Pet Shop.',
        },
        {
          title: 'Responsabilidades',
          descripcion:
            'Llevar a cabo entrevistas, elaborar esquemas en papel y digitales, desarrollar prototipos de baja y alta fidelidad, realizar estudios de usabilidad, considerar la accesibilidad, iterar en el diseño y adoptar un enfoque de diseño adaptable.',
        },
      ],
      descripcion: [
        'Pet Shop es una página web de un centro de adopción de mascotas diseñada para ser accesible a usuarios de edades comprendidas entre 19 y 65 años. El propósito de Pet Shop es brindar a los usuarios la posibilidad de iniciar el proceso de adopción desde cualquier lugar, con la facilidad de realizar compras de forma rápida y sencilla.',
        'Nuestra plataforma, una aplicación web completamente responsive, tiene como objetivo informar a los usuarios sobre los requisitos y pasos necesarios para adoptar una mascota. Ofrecemos la opción de agendar una cita o completar un formulario si desean comenzar el proceso de adopción. Dado que este proceso puede ser prolongado, permitimos a los usuarios avanzar en el papeleo desde la comodidad de su hogar.',
        'Además de nuestros servicios de adopción, Pet Shop cuenta con una tienda en línea donde los amantes de las mascotas pueden adquirir productos y accesorios de alta calidad. Nuestra misión es facilitar la adopción responsable y mejorar la vida de las mascotas y sus dueños.',
      ],
      time: 'Agosto de 2023 - Agosto de 2023',
      image: '../../../assets/Image/Design/proyecto2/Fondo copia 6.webp',
      width: 600,
      height: 300,
    },

    users: {
      title: 'Entender al usuario',
      descripcion: [
        'Entrevisté a diversos usuarios y luego transformé sus experiencias en mapas de empatía para obtener una comprensión más profunda de nuestros usuarios objetivo y sus necesidades. Durante este proceso, descubrí que muchos individuos desean adoptar una mascota, pero se encuentran perdidos en cuanto a los requisitos y cómo dar inicio al proceso.',
        'La falta de claridad en la información y el diseño confuso de numerosos sitios web de adopción de mascotas ha generado frustración entre los usuarios. Esta frustración ha resultado en que la idea de adoptar una mascota no sea una experiencia placentera, lo que en última instancia obstaculiza el proceso de adopción.',
      ],
      weakPoints: [
        'Los diseños de las páginas de adopción de mascotas suelen estar sobrecargados de información desorganizada, lo que resulta en una experiencia de navegación confusa.',
        'Muchas páginas que ofrecen opciones de donación o compra se limitan a un solo método de pago y presentan múltiples botones de pago ineficaces, lo que obstaculiza la finalización del proceso de compra por parte de los usuarios.',
        'Los sitios web carecen de una experiencia de navegación atractiva, mostrando imágenes de baja resolución en un tamaño desproporcionado.',
        'Los sitios web no ofrecen funcionalidades de lector de pantalla ni un diseño adaptable que se adapte a diferentes tamaños de pantalla.',
      ],

      person1: {
        title: 'Persona',
        name: 'Roberto',
        descripcion: [
          'Roberto, un joven de 25 años, está emocionado por la idea de adoptar una mascota. Sin embargo, se siente abrumado por la falta de información clara en los sitios web de adopción y la preocupación por la seguridad. Roberto busca un sitio web que le permita encontrar mascotas compatibles con su estilo de vida. Desea recibir notificaciones para estar al tanto de las nuevas mascotas disponibles. Para él, es fundamental que el proceso de adopción sea agradable y rápido, ya que le preocupa no saber cómo comenzar. Está en busca de una experiencia que le brinde confianza y facilidad, asegurándose de que la adopción sea segura y satisfactoria.',
        ],
        image: '../../../assets/Image/Design/proyecto2/persona.webp',
        width: 300,
        height: 250,
      },
    },

    mapSite: {
      title: 'Mapa del sitio',
      descripcion: [
        'La dificultad de navegación del sitio web fue uno de los puntos débiles para los usuarios, me dedique a crear un mapa del sitio.',
        'Mi objetivo fue mejorar la navegación general de la página, la estructura elegida se diseño para ser simple y fácil.',
      ],
      img: '../../../assets/Image/Design/proyecto2/mpaSitio.webp',
    },

    design: {
      0: {
        title: 'Esquemas de página en papel',
        descripcion: [
          'Acopntinuación esbocé esquemas de página en papel para las pantallas, teniendo en cuenta los puntos débiles de navegación.',
          'Las variaciónes de esquema de página en papel de la pantalal de inicio, se enfoca en optimizar la experiencia de navegación de lso usuarios',
        ],
        image: '../../../assets/Image/Design/proyecto2/Capa 2.webp',
        width: 497,
        height: 663,
      },
      1: {
        title: 'Esquemas de página digitales',
        descripcion: [
          'Pasar los esquemas de página en papel a esquemas digitales, fácilito la comprensión de como el rediseño pudo ayudar lso puntos debiles del usuario y a mejorar la experiencia de usuario.',
        ],
        image: '../../../assets/Image/Design/proyecto2/paginasDigitales.webp',
        width: 400,
        height: 369,
      },
      2: {
        title: 'prototipo de baja fidelidad',
        descripcion: [
          'Para este prototipo de baja fidelidad, conecté todas las pantallas involucradas en el flujo principal del usuario, Completar un formulario de adopción.',
        ],
        image: '../../../assets/Image/Design/proyecto2/proto-baja.webp',
        width: 900,
        height: 633,
        link: 'https://xd.adobe.com/view/cfb0e9a6-a305-4c4e-b704-212238f80319-9ae3/?fullscreen&hints=off',
      },
      3: {
        title: 'Estudio de facilidad de uso: hallazgos ',
        descripcion: [
          'Realicé dos rondas de estudios de facilidad de uso. Los hallazgos del primer estudio ayudaron a guiar los diseños para convertirlos de esquemas de página en maquetas. El segundo estudio utilizó un prototipo de alta fidelidad y reveló qué aspectos de las maquetas necesitaban refinarse.',
        ],
        width: 400,
        height: 400,
      },
      4: {
        rond1: {
          title: 'Hallazgos',
          descripcion: [
            'Los usuarios no saben que resuelve en concreto la función de agendar una cita.',
            'Los usuarios no veían obligatorio agendar una cita al momento de llenar el formulario.',
            'Durante la prueba de facilidad de uso, los usuarios se encontraron con problemas al momento de buscar el botón para llenar un formulario.',
          ],
        },
        rond2: {
          title: '',
          descripcion: [''],
        },
      },
    },

    improveDesign: {
      maquetas: {
        title: 'Maquetas',
        0: {
          descripcion:
            'Basándome en las conclusiones del estudio de facilidad de uso, realicé cambios, haciendo los textos más claros y mas visibles para el usuario, uno de los cambios realizados fue agregar la función de llenar un formulario de adopción al inicio de la pantalla y agregarle un texto más marcado para que resaltara.',
          image1: '../../../assets/Image/Design/proyecto2/maquetas1.webp',
          width: 800,
          height: 511,
        },
        1: {
          descripcion:
            'Para que fuera más fácil para los usuarios se les agrego una opción de pregunta si requieren agendar una cita previa, además se agrego información relevante sobro el formulario de adopción.',
          image1: '../../../assets/Image/Design/proyecto2/maquetas1.webp',
          width: 800,
          height: 511,
        },
      },

      hiFiPrototype: {
        title: 'prototipo de alta fidelidad',
        descripcion:
          'El prototipo de alta fidelidad siguió el mismo flujo de usuario que el prototipo de baja fidelidad, agregue cambios que se hicieron luego de el estudio de facilidad de uso, a si como otros cambios sugeridos por el equipo.',
        image:
          '../../../assets/Image/Design/proyecto2/prototipo de alta fidelidad.webp',
        width: 900,
        height: 633,
        link: 'https://xd.adobe.com/view/43604d7b-37b4-4369-8258-ca89f5df369e-1633/',
      },

      accesibility: {
        title: 'Accesibilidad',
        descripcion: [
          'Agregue encabezados de textos con distintos tamaños y cambiando un poco la tonalidad de color  para lograr una jerarquía visual clara.',
          'Usé puntos de referencia para ayudar  a los usuarios  a navegar por el sitio.',
          'Diseñe el sitio con alternativas disponibles en cada página para un acceso fluido de lectores de pantalla.',
        ],
      },
    },

    stickerSheets: {
      title: 'Hoja de pegatinas',
      img: [
        '../../../assets/Image/Design/proyecto1/TV - 4.webp',
        '../../../assets/Image/Design/proyecto1/TV - 3.webp',
      ],
    },
    next: {
      conclusions: [
        'Nuestros usuarios afirmaron que el diseño contaba con una navegación fácil, con texto claro e imágenes atractivas.',
        'Aprendí que nuestro producto siempre puede mejorar, un cambio minio o un cambio grande todo marca una diferencia, hay que proyectar nuestro producto siempre pensando en las necesidades de nuestros usuarios.',
      ],

      nextSteps: [
        'Realizar pruebas de facilidad de uso de seguimiento en el nuevo diseño del sitio web.',
        'Identificar nuevas necesidades y funciones.',
      ],
    },

    thanks: {
      descripcion:
        '¡Gracias por tomarte el tiempo de revisar mi trabajo con la aplicación de Restaurant Ap p ! Si quieres ver más de mi trabajo o comunicarte conmigo, esta es mi información de contacto.',
      email: 'luiskendornarvaez@gmail.com',
    },
  },
  //  ------------------------------ next project ------------------------------------
  {
    title: 'Veteran for Job',
    author: 'Luis Narvaez',

    summaryProject: {
      summary: [
        {
          title: 'Problema',
          descripcion:
            'Los veteranos de guerra a menudo enfrentan desafíos particulares al buscar empleo como civiles debido a las experiencias y circunstancias únicas asociadas con su servicio militar.',
        },
        {
          title: 'Objetivo',
          descripcion:
            'Diseñar una aplicación móvil que se a una herramienta valiosa para la búsqueda de empleo con una navegación clara y un diseño agradable.',
        },
        {
          title: 'Rol',
          descripcion: 'Diseñador/UX',
        },
        {
          title: 'Responsabilidades',
          descripcion:
            'Realizar entrevistas, esquemas en papel y digitales, crear prototipos de baja y alta fidelidad, realizar estudios de facilidad de uso, tener en cuenta la accesibilidad, repetir los diseños y el diseño adaptable.',
        },
      ],
      descripcion: [
        'Veteran for job es una aplicación móvil, con múltiples formas de acceso para los usuarios a través de un móvil, web y un diseño responsive, que proporciona asesoramiento y recursos para ayudar a los veteranos a postularse para trabajos adecuados a  sus habilidades y experiencias.',
      ],
      time: 'Septiembre 2023 - Septiembre 2023',
      image: '../../../assets/Image/Design/proyecto3/TV - 4.webp',
      width: 700,
      height: 400,
    },

    users: {
      title: 'Entender al usuario',
      descripcion: [
        'Realice entrevistas a usuarios, transformándolos en mapas de empatía para comprender mejor a los usuarios y sus necesidades. Se encontró que aunque hay muchas formas de ayuda para los veteranos de guerra, las cifras de veteranos en desempleo es muy alta y las aplicaciones móviles o web que ayudan a contrarrestar estas cifras son muy pocas y requieren de mucho tiempo o interacción algo que puede estresar al usuario.',
      ],
      weakPoints: [''],

      person1: {
        title: 'Persona',
        name: 'María Sánchez',
        descripcion: [
          'María es una veterana retirada, que necesita incorporarse a la vida laboral civil, porque quiere continuar ayudando a las personas.',
        ],
        image: '../../../assets/Image/Design/proyecto3/martha.webp',
        width: 400,
        height: 400,
      },
    },

    mapSite: {
      title: 'Mapa del sitio',
      descripcion: [
        'La dificultad de navegación del sitio web fue uno de los puntos débiles para los usuarios, me dedique a crear un mapa del sitio.',
        'Mi objetivo fue mejorar la navegación general de la página, la estructura elegida se diseño para ser simple y fácil.',
      ],
      img: '../../../assets/Image/Design/proyecto2/mpaSitio.webp',
      width: 800,
      height: 563,
    },

    design: {
      0: {
        title: 'Esquemas de página en papel',
        descripcion: [
          'Hice un ejercicio rápido de ideación “crazy eight”  para generar ideas basándome en los puntos identificadas en la auditoría competitiva. Mi atención se centró específicamente en el flujo del usuario para la búsqueda de empleo.',
        ],
        image: '../../../assets/Image/Design/proyecto3/esquemasPapel.webp',
        width: 900,
        height: 400,
      },
      1: {
        title: 'Esquemas de página digitales',
        descripcion: [
          'Directamente a la búsqueda de empleo, compartir, comentar o contactar con el reclutador.',
        ],
        image: '../../../assets/Image/Design/proyecto3/Android Large - 1.webp',
        width: 200,
        height: 500,
      },
      2: {
        title: 'prototipo de baja fidelidad',
        descripcion: [
          'Creé un prototipo de baja fidelidad que conectaba el flujo de usuario. Elegir una publicación, postularse y ver los datos del usuario.',
        ],
        image: '../../../assets/Image/Design/proyecto3/protobajafidelidad.webp',
        width: 700,
        height: 400,
        link: 'https://www.figma.com/proto/Kjfms3YGz40lxcqFMpNVAp/Veteran-app?type=design&node-id=1-2&t=Vh2YkUIuoBqc6VaQ-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1',
      },
      3: {
        title: 'Estudio de facilidad de uso: hallazgos ',
        descripcion: [''],
        width: 400,
        height: 400,
      },
      4: {
        rond1: {
          title: 'Hallazgos',
          descripcion: [
            'Filtrar la búsqueda.',
            'Botón para regresar al flujo.',
            'Permitir editar el about antes de enviar la postulación.',
          ],
        },
        rond2: {
          title: '',
          descripcion: [''],
        },
      },
    },

    improveDesign: {
      maquetas: {
        title: 'Maquetas',
        0: {
          descripcion:
            'En la pantalla de perfil del usuario fue confuso para el usuario la interacción con la pantalla agregue opciones adicionales para ubicar al usuario en la pantalla y el flujo fuera más fácil.',
          image1: '../../../assets/Image/Design/proyecto3/TV - 5.webp',
          width: 400,
          height: 400,
        },
        1: {
          descripcion:
            'Agregue un botón que permite editar el about en caso de querer modificar sin cortar el flujo del usuario.',
          image1: '../../../assets/Image/Design/proyecto3/TV - 6.webp',
          width: 400,
          height: 400,
        },
      },

      hiFiPrototype: {
        title: 'prototipo de alta fidelidad',
        descripcion:
          'El prototipo de alta fidelidad siguió el mismo flujo de usuario que el prototipo de baja fidelidad, presentó flujos de usuario más limpios, a si como otros cambios sugeridos por el equipo.',
        image: '../../../assets/Image/Design/proyecto3/prototipo.webp',
        width: 700,
        height: 400,
        link: 'https://xd.adobe.com/view/43604d7b-37b4-4369-8258-ca89f5df369e-1633/',
      },

      accesibility: {
        title: 'Accesibilidad',
        descripcion: [
          'Compatibilidad con lectores de pantalla.',
          'Filtros de búsqueda.',
          'Agregue encabezados de textos con distintos tamaños y cambiando un poco la tonalidad de color  para lograr una jerarquía visual clara.',
        ],
      },
    },
    stickerSheets: {
      title: 'Hoja de pegatinas',
      img: [
        '../../../assets/Image/Design/proyecto1/TV - 4.webp',
        '../../../assets/Image/Design/proyecto1/TV - 3.webp',
      ],
    },
    next: {
      conclusions: [
        'Veterans for Jobs ofrece un diseño simple y fácil Nuestros usuarios afirmaron que el diseño contaba con una navegación fácil, con texto claro.',
        'Aprendí que nuestro producto siempre puede mejorar, un cambio minio o un cambio grande todo marca una diferencia, hay que proyectar nuestro producto siempre pensando en las necesidades de nuestros usuarios.',
      ],

      nextSteps: [
        'Realizar pruebas de facilidad de uso de seguimiento en el nuevo diseño del sitio web.',
        'Realizar otra ronda de estudios de usabilidad para validar si los puntos débiles experimentados por los usuarios se han abordado de manera efectiva.',
        'Identificar nuevas necesidades y funciones.',
      ],
    },

    thanks: {
      descripcion:
        '¡Gracias por tomarte el tiempo de revisar mi trabajo con la aplicación de Restaurant Ap p ! Si quieres ver más de mi trabajo o comunicarte conmigo, esta es mi información de contacto.',
      email: 'luiskendornarvaez@gmail.com',
    },
  },
];
