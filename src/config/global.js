export default {
  global: {
    Name: 'Desarrollo de patrones digitales para billetera',
    Description:
      'Este componente formativo orienta al aprendiz en la elaboración de patrones digitales de billeteras, aplicando principios técnicos del patronaje en marroquinería. Incluye la construcción de moldes para tarjeteros, billeteras de hombre y dama, con actividades que abarcan trazado, despiece, referenciado, impresión y organización técnica. También incorpora el diseño de patrones con vistas y la creación de una maqueta, la cual permite validar proporciones, funcionalidad y compartimentos. De esta manera, el aprendiz desarrolla competencias para transformar diseños en moldes técnicos precisos, viables y de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Elaboración de patrones para tarjetero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Guardado de archivos en Rhinoceros ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Construcción del patrón',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Despiece moldes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Referenciado de moldes',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Impresión de moldes',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Elaboración de patrones de tarjetero con vistas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Construcción del patrón',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Despiece moldes',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Elaboración patrones para billetera hombre',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Construcción patrón',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Despiece moldes',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Elaboración patrones billetera dama',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Molde patrón',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Despiece moldes',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Elaboración de la maqueta',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Elaboración Tarjetero',
      referencia:
        'Fontecha, E. F. (2015). Instructivo tarjetero 2 [Vídeo]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=quRS37RqW3w',
    },
    {
      tema: 'Elaboración Billetera Hombre',
      referencia:
        'Fontecha, E. F.  (2015). Video Instructivo Billetera Hombre [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/kQ_ecwZad8I',
    },
  ],
  glosario: [
    {
      termino: 'Capa',
      significado:
        'nivel o sección en el archivo donde se organizan y agrupan objetos para facilitar su manejo y visualización.',
    },
    {
      termino: 'Comando',
      significado:
        'instrucción que se ejecuta para realizar acciones dentro de Rhino, como crear, modificar o analizar objetos.',
    },
    {
      termino: 'Cota',
      significado:
        'medida anotada en un modelo para indicar distancia, ángulo o tamaño entre elementos.',
    },
    {
      termino: 'Molde',
      significado:
        'diseño o plantilla que sirve de guía para corte o fabricación de partes físicas.',
    },
    {
      termino: 'Polilínea',
      significado:
        'secuencia de segmentos lineales conectados formando una curva abierta o cerrada.',
    },
    {
      termino: 'Ribete',
      significado: 'borde añadido para acabado o refuerzo en piezas.',
    },
  ],
  referencias: [
    {
      referencia: 'Asensio, O. (2011). El gran libro del cuero. Lexus.',
      link: '',
    },
    {
      referencia:
        'Colombia. Ministerio de Comercio, Industria y Turismo, & Artesanías de Colombia. (2020). Técnica del oficio del cuero. Artesanías de Colombia.',
      link: '',
    },
    {
      referencia: 'Fogg, M. (2009). Bolsos vintage. Parramón.',
      link: '',
    },
    {
      referencia:
        'Johnson, A. (2005). Bolsos: El poder de un accesorio. Konemann.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
