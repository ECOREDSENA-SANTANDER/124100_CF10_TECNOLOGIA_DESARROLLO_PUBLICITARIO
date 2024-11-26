export default {
  global: {
    componenteFormativo: 'Diseño de piezas gráficas',
    descripcionCurso:
      'Una pieza gráfica es una composición visual de diseño que se compone, por lo general, de texto, imagen y logo de la marca; su objetivo es transmitir un mensaje al consumidor o usuario, a través de estos elementos integrados en un concepto creativo que genere recordación y una respuesta por parte del público objetivo de la marca.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Desarrollo creativo de las piezas gráficas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estructura del anuncio publicitario',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estilos en los anuncios publicitarios',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: 'Uso del color en los anuncios publicitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Orígenes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Bases de la teoría del color',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Teoría del color de Eva Heller',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Significado de los colores',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',

        numero: '3',
        titulo: 'Composición gráfica en los anuncios publicitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Leyes de la composición',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'La sección áurea',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: '<i>Layout</i>',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tipografías',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',

        numero: '4',
        titulo: 'Desarrollo de la pieza gráfica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Primer paso, el esbozo ',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Construcción de la pieza gráfica',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF10_124100_DU.pdf',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
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
  referencias: [
    {
      referencia:
        'Moares, B. (2018, diciembre 18). Teoría del color: Guía básica del color. Unayta. https://unayta.es/teoria-del-color/',
      link: 'https://unayta.es/teoria-del-color/',
    },
    {
      referencia: 'Definición.de. (2021). Boceto.',
      link:
        'https://definicion.de/boceto/#:~:text=Derivado%20del%20t%C3%A9rmino%20italiano%20bozzetto,de%20bosquejo%20para%20cualquier%20obra.&text=Por%20lo%20general%2C%20un%20boceto,los%20casos%2C%20no%20posee%20terminaciones',
    },
    {
      referencia:
        'Desarrollo <i>web</i>. (2014). Propiedades de los colores. desarrolloweb.com.',
      link:
        'https://desarrolloweb.com/articulos/1503.php#:~:text=Matiz%20(Hue),mezcla%20de%20las%20ondas%20luminosas',
    },
    {
      referencia:
        'Estudio Mique. (s.f). ¿Qué es la composición en diseño gráfico? mique.es',
      link: 'https://www.mique.es/que-es-composicion-diseno-grafico/',
    },
    {
      referencia: 'FotoNostra. (2020). La escala. fotonostra.com.',
      link: 'https://www.fotonostra.com/grafico/escala.htm',
    },
    {
      referencia:
        '<i>Goodwill Community Foundation</i>. (2021). ¿Qué es tipografía y cómo elegir un tipo de letra? GCFGlobal.',
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
        '<i>Marketing</i> capacitación. (2017). ¿Qué es redacción publicitaria? marketingcapacitacion.com.',
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
        '<i>Pixel</i> creativo. (2014). Técnicas creativas para realizar publicidad. [Web log post].',
      link:
        'http://pixel-creativo.blogspot.com/2011/04/tecnicas-creativas-para-realizar.html',
    },
    {
      referencia:
        'Rodríguez, C. (2020). Qué es la proporción áurea y su importancia en el diseño. Market In House.',
      link: 'https://www.marketinhouse.es/que-es-la-proporcion-aurea/',
    },
    {
      referencia: 'Significados. (2020). Qué es <i>layout</i>.',
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
        'Psicología del Color de Eva Heller. (2012, diciembre 25). Mini Manual; Mini Manuales.',
      link: 'https://minimanual.com/psicologia-del-color-de-eva-heller/',
    },
    {
      referencia:
        'Weber, M. (2007). The <i>layout</i> look book. Guía visual de diseño y maquetación. Instituto Monsa de Ediciones.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Manuel Augusto Arias López',
          cargo: 'Instructor - experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Quindío',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Andrea Velásquez Torres',
          cargo: 'Apoyo experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Quindío',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capitalo',
        },
        {
          nombre: 'Carolina Jiménez Suescun',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette González Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
