export default {
  global: {
    Name: 'Fundamentos del manejo fitosanitario en cultivos bajo cubierta',
    Description:
      'El componente formativo tiene como propósito brindar los conocimientos básicos para la prevención, el diagnóstico y el control de plagas y enfermedades en sistemas de producción protegidos, como invernaderos o casas malla. En él se abordan los principales agentes causales, las condiciones ambientales que influyen en su desarrollo y las estrategias de manejo integrado, las cuales combinan métodos culturales, biológicos y químicos.',
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
        titulo: 'Cultivos bajo cubierta',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Enfermedades del cultivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diagnóstico y monitoreo fitopatológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Técnicas y herramientas utilizadas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Indicadores de alerta temprana',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Manejo Integrado de Plagas y Enfermedades (MIPE)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Métodos culturales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Control biológico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Control mecánico y físico',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Control químico',
            hash: 't_4_4',
          },
        ],
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
      tema: 'Diagnóstico y monitoreo fitopatológico',
      referencia:
        'Rivas Figueredo, E., De Armas Vargas, Y., Elías Barreto, R.R., Alonso Hernández, L., Ramírez Medina, M.V., Drake Espinosa, L., Medina Salas, R. (2008). El diagnóstico y su papel en la fitoprotección. Temas de Ciencia y Tecnología, 12 (35), 47-54.',
      tipo: 'PDF',
      link: 'https://www.utm.mx/edi_anteriores/temas035/3%20nota-35.pdf',
    },
    {
      tema: 'Diagnóstico y monitoreo fitopatológico',
      referencia:
        'FERTILAB ANÁLISIS AGRÍCOLAS. (2022). ¿Cómo realizo un muestreo para diagnóstico fitosanitario?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sLjKC33wvf4',
    },
    {
      tema: 'Cultivos bajo cubierta',
      referencia:
        'SENA. (2012). Empresa Colombia Cap 4-4: cultivos alternativos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9ns_5PQKSfA',
    },
  ],
  glosario: [
    {
      termino: 'Agente causal',
      significado:
        'organismo o factor responsable de una enfermedad o daño en las plantas.',
    },
    {
      termino: 'Ambiente controlado',
      significado:
        'espacio donde se regulan variables como temperatura, humedad y luz para optimizar el cultivo.',
    },
    {
      termino: 'Antagonismo',
      significado:
        'interacción entre microorganismos donde uno inhibe el desarrollo del otro.',
    },
    {
      termino: 'Aplicación foliar',
      significado:
        'método de aplicación de productos fitosanitarios directamente sobre las hojas.',
    },
    {
      termino: 'Bacteriosis',
      significado:
        'enfermedad causada por bacterias que afectan tejidos vegetales.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'medidas preventivas que evitan la introducción y propagación de plagas y enfermedades.',
    },
    {
      termino: 'Biocontrol',
      significado: 'uso de organismos vivos para controlar plagas o patógenos.',
    },
    {
      termino: 'Bioplaguicida',
      significado:
        'producto biológico usado para el control de plagas o enfermedades.',
    },
    {
      termino: 'Casa malla',
      significado:
        'estructura cubierta con malla que regula entrada de plagas y radiación solar.',
    },
    {
      termino: 'Condensación',
      significado:
        'acumulación de humedad en forma de gotas dentro de estructuras protegidas.',
    },
    {
      termino: 'Eficiencia biológica',
      significado:
        'capacidad de un organismo benéfico para controlar una plaga o patógeno.',
    },
    {
      termino: 'Entomología',
      significado:
        'ciencia que estudia los insectos, incluyendo los fitófagos.',
    },
    {
      termino: '<em>Escouting</em>',
      significado:
        'monitoreo sistemático y registro de plagas y enfermedades en el cultivo.',
    },
    {
      termino: 'Fertirriego',
      significado:
        'aplicación simultánea de agua y nutrientes mediante el sistema de riego.',
    },
    {
      termino: 'Grado de infestación',
      significado:
        'nivel o porcentaje de presencia de una plaga en un área de cultivo.',
    },
    {
      termino: 'Hospedero',
      significado:
        'planta que sirve de alimento o refugio a una plaga o patógeno.',
    },
    {
      termino: 'Humedad relativa',
      significado:
        'cantidad de vapor de agua presente en el aire respecto a su máximo posible.',
    },
    {
      termino: 'Inoculación',
      significado:
        'introducción de un patógeno o agente benéfico en el cultivo.',
    },
    {
      termino: 'Microclima',
      significado:
        'condiciones climáticas específicas dentro de una estructura protegida.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'observación y registro periódico del estado sanitario del cultivo.',
    },
    {
      termino: 'Nematodo',
      significado:
        'organismo microscópico del suelo, algunos dañan raíces de plantas.',
    },
    {
      termino: 'Parásito',
      significado:
        'organismo que vive a expensas de otro sin causarle la muerte inmediata.',
    },
    {
      termino: 'Patógeno',
      significado: 'agente biológico que provoca enfermedades en las plantas.',
    },
    {
      termino: 'Trips',
      significado:
        'son pequeños insectos de entre 1 y 3 mm que se alimentan básicamente de hongos y vegetales. Son tan diminutos que normalmente es necesario utilizar una lupa para observarlos con detalle.',
    },
  ],
  referencias: [
    {
      referencia:
        'ASINTAGRO. (2024). Manejo integrado de plagas y enfermedades (MIPE).',
      link:
        'https://asintagro.com/2024/07/09/manejo-integrado-de-plagas-y-enfermedades-mipe/',
    },
    {
      referencia:
        'FAO. (2025). Codex Alimentarius: Normas internacionales de los alimentos. Límites máximos de residuos (LMR).',
      link:
        'https://www.fao.org/fao-who-codexalimentarius/codex-texts/maximum-residue-limits/es/',
    },
    {
      referencia:
        'Fischer, G., & Buitrago, S. (2017). Figura 4 A. Planta con retraso en crecimiento y color verde pálido; 4B. Hojas maduras con clorosis leve generalizada. En Estudio de síntomas y crecimiento de plantas de feijoa (Acca sellowiana [O. Berg] Burret) en respuesta a los elementos faltantes N, P, K, Ca, Mg y B [Tesis]. ResearchGate.',
      link:
        'https://www.researchgate.net/figure/Figura-4-A-Planta-con-retraso-en-crecimiento-y-color-verde-palido-4B-Hojas-maduras_fig2_341105369',
    },
    {
      referencia:
        'Gamboa, S. B., & Fernández Acevedo, V. (2020). Guía didáctica: Cultivos protegidos [PDF]. Universidad Nacional de La Plata.',
      link:
        'https://aulavirtual.agro.unlp.edu.ar/pluginfile.php/60743/mod_folder/content/0/3.%20Guia%20de%20Cultivos%20Protegidos%202020.pdf',
    },
    {
      referencia:
        'InfoAgrónomo. (2024). Guía visual: diagnóstico de enfermedades en las plantas.',
      link:
        'https://infoagronomo.net/guia-visual-diagnostico-de-enfermedades-en-las-plantas/',
    },
    {
      referencia:
        'MundoCacao. (s.f.). Manejo integrado de plagas y enfermedades (MIPE).',
      link:
        'https://www.mundocacao.com.co/page-bpa/c/0/i/49894263/manejo-integrado-de-plagas-y-enfermedades-mipe',
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
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jenny Rocio Reyes Acevedo',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
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
