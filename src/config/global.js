export default {
  global: {
    componenteFormativo: 'Diseño de piezas gráficas ',
    descripcionCurso:
      'Una pieza gráfica es una composición visual de diseño que se compone, por lo general, de texto, imagen y logo de la marca; su objetivo es transmitir un mensaje al consumidor o usuario, a través de estos elementos integrados en un concepto creativo que genere recordación y una respuesta por parte del público objetivo de la marca.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },

      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Desarrollo creativo de las piezas gráficas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estructura del anuncio publicitario',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Uso del color en los anuncios publicitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Orígenes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Bases de la teoría del color',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Teoría del color de Eva Heller',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Significado de los colores',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Composición gráfica en los anuncios publicitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Leyes de la composición',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'La sección áurea',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Layout',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Tipografías',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Desarrollo de la pieza gráfica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Primer paso, el esbozo ',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Construcción de la pieza gráfica',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Definición.de. (2021). Boceto.',
      link:
        'https://definicion.de/boceto/#:~:text=Derivado%20del%20t%C3%A9rmino%20italiano%20bozzetto,de%20bosquejo%20para%20cualquier%20obra.&text=Por%20lo%20general%2C%20un%20boceto,los%20casos%2C%20no%20posee%20terminaciones',
    },
    {
      referencia:
        'Desarrollo web. (2014). Propiedades de los colores. desarrolloweb.com.',
      link:
        'https://desarrolloweb.com/articulos/1503.php#:~:text=Matiz%20(Hue),mezcla%20de%20las%20ondas%20luminosas',
    },
    {
      referencia:
        'Estudio Mique. (2020). ¿Qué es la composición en diseño gráfico? mique.es',
      link: 'https://www.mique.es/que-es-composicion-diseno-grafico/',
    },
    {
      referencia: 'FotoNostra. (2020). La escala. fotonostra.com.',
      link: 'https://www.fotonostra.com/grafico/escala.htm',
    },
    {
      referencia:
        'Goodwill Community Foundation. (2021). ¿Qué es tipografía y cómo elegir un tipo de letra? GCFGlobal.',
      link:
        'https://edu.gcfglobal.org/es/conceptos-basicos-de-diseno-grafico/que-es-tipografia-y-como-elegir-un-tipo-de-letra/1/ ',
    },
    {
      referencia:
        'Guijarro, J. M. (2002). Técnico en Publicidad. Vol. 1 y 2. Editorial Cultural S.A.',
    },
    {
      referencia: 'Lexico.com. (2021). Diccionario Oxford.',
      link: 'https://www.lexico.com/',
    },
    {
      referencia:
        'Marketing capacitación. (2017). ¿Qué es redacción publicitaria? marketingcapacitacion.com.',
      link:
        'https://www.Marketingcapacitacion.com/que-es-redaccion-publicitaria/',
    },
    {
      referencia:
        'Martínez, D., Munguía, M. y García, S. (2019). Elementype. Una guía práctica del uso tipográfico. Ediciones del Lirio.',
    },
    {
      referencia:
        'Morales, A. (2016, Febrero 24). La importancia de la tipografía en el diseño gráfico. [Web log post]. andresmorales.es',
      link:
        'https://andresmorales.es/blog/importancia-tipografia-diseno-grafico/',
    },
    {
      referencia:
        'Pato Giacomino. (2014). Leyes de composición visual o “cómo hacer dibujitos”. patogiacomino.com.',
      link:
        'https://patogiacomino.com/2013/12/07/leyes-de-composicion-visual-o-como-hacer-dibujitos/',
    },
    {
      referencia: 'Pix, A. C. (2013). El espacio en el mensaje publicitario.',
      link: 'https://es.slideshare.net/andreacherrypix/layout-26712653',
    },
    {
      referencia:
        'Pixel creativo. (2014). Técnicas creativas para realizar publicidad. [Web log post].',
      link:
        'http://pixel-creativo.blogspot.com/2011/04/tecnicas-creativas-para-realizar.html',
    },
    {
      referencia:
        'Rodríguez, C. (2020). Qué es la proporción áurea y su importancia en el diseño. Market In House.',
      link: 'https://www.marketinhouse.es/que-es-la-proporcion-aurea/',
    },
    {
      referencia: 'Significados. (2020). Qué es layout.',
      link:
        'https://www.significados.com/layout/#:~:text=La%20palabra%20Layout%20sirve%20para,disposi%C3%B3n%2C%20plan%20o%20dise%C3%B1o%22',
    },
    {
      referencia: 'UNAYTA. (2018). Teoría del color: guía básica del color.',
      link:
        'https://unayta.es/teoria-del-color/#:~:text=Seg%C3%BAn%20la%20Real%20Academia%20de,Es%20una%20percepci%C3%B3n',
    },
    {
      referencia:
        'Viviendo la salud. (2020). Significado de los colores: la psicología del color de Eva Heller. viviendolasalud.com',
      link:
        'https://viviendolasalud.com/psicologia/significado-de-los-colores-psicologia-del-color#:~:text=Eva%20Heller%20fue%20una%20soci%C3%B3loga,%E2%80%9CLa%20Psicolog%C3%ADa%20del%20Color%E2%80%9D',
    },
    {
      referencia:
        'Weber, M. (2007). The layout look book. Guía visual de diseño y maquetación. Instituto Monsa de Ediciones.',
    },
  ],
  glosario: [
    {
      termino: 'Boceto',
      significado:
        'Esquema o proyecto que contiene solamente los rasgos principales de una obra artística o técnica (lexico.com, 2021).',
    },
    {
      termino: 'Diseño',
      significado:
        'Actividad creativa que tiene por fin proyectar objetos que sean útiles y estéticos (lexico.com, 2021).',
    },
    {
      termino: 'Mensaje publicitario',
      significado:
        'Es una forma de comunicación a través de la cual se pretende dar a conocer un producto, su elemento principal es el mensaje publicitario. Dentro del texto del anuncio es habitual utilizar determinadas frases que pueden resumir o facilitar que el mensaje y su contenido sean recordados.',
    },
    {
      termino: 'Mercado meta',
      significado:
        'Conjunto de miembros del mercado que tienen como característica principal el tener necesidades, gustos y conductas aptas para adquirir un producto o servicio.',
    },
    {
      termino: 'Publicidad',
      significado:
        'Difusión o divulgación de información, ideas u opiniones de carácter político, religioso, comercial, etc., con la intención de que alguien actúe de una determinada manera, piense según unas ideas o adquiera un determinado producto (lexico.com, 2021).',
    },
    {
      termino: 'Tipografía',
      significado:
        'Se le denomina a la tarea, oficio e industria que se ocupa de la elección y el uso de tipos (letras diseñadas con unidad de estilo) para los textos en piezas gráficas..',
    },
  ],

  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Manuel Augusto Arias López',
        cargo: 'Instructor - Experto temático',
        centro: 'Centro de Comercio y Servicios Regional Quindío',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Perilla Méndez',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Andrea Velásquez Torres',
        cargo: 'Apoyo Experto temático',
        centro: 'Centro de Comercio y Servicios – Regional Quindío',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capitalo',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Sandra Carolina Duran Lopez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martinez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },

      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
