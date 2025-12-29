<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Manejo Integrado de Plagas y Enfermedades (MIPE)


    .bl1
      .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="fade-right") 
        .row.m-0.align-items-center.justify-content-center  
          .col-lg-8.mb-0.com
            .bloque-texto-a__texto.p-lg-5.p-4
              p.mb-4(data-aos="fade-left") El Manejo Integrado de Plagas y Enfermedades (MIPE) es una estrategia de gestión fitosanitaria que busca mantener las poblaciones de plagas y la incidencia de enfermedades por debajo del umbral económico de daño. Para lograrlo, combina de manera equilibrada métodos preventivos y correctivos, priorizando aquellos que sean seguros para el ambiente, la salud humana y la sostenibilidad del cultivo.
              p.mb-0(data-aos="fade-left") El propósito del MIPE no es eliminar por completo las plagas, sino mantenerlas en niveles que no generen pérdidas significativas. Esto permite conservar un equilibrio ecológico adecuado dentro del sistema productivo y asegurar una producción estable y responsable.
          .col-lg-4.col-md-6.mb-0
            img.enc.img-a(src='@/assets/curso/tema4/1.png', alt='')


    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema4/2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              p.mb-0.text-white Se presenta el tema #[b Manejo Integrado de Plagas y Enfermedades (MIPE),] destacando su importancia para mantener los cultivos sanos mediante estrategias preventivas y sostenibles. Para profundizar en este concepto y reforzar su comprensión, se invita a revisar el video de apoyo.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=viuap_gcFn0&ab_channel=FrancescFornieles" target="_blank")
                span Ir al sitio
                i.fas.fa-circle-play
   

    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Métodos culturales


    .bg14.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-0(data-aos="fade-right"): img(src='@/assets/curso/tema4/3.png', alt='')
        .col-lg-7(data-aos="fade-left")
          .p-4
            img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/4.svg', alt='')
            p.mb-0.text-white(data-aos="fade-left") Los métodos culturales son un conjunto de prácticas agronómicas que ayudan a prevenir, reducir o limitar la aparición y propagación de plagas y enfermedades mediante el manejo adecuado del ambiente de cultivo, del suelo y de las plantas. Estas prácticas son una parte fundamental del Manejo Integrado de Plagas y Enfermedades (MIPE), ya que permiten mantener un equilibrio ecológico, disminuir el uso de productos químicos y promover sistemas productivos más sostenibles.


    .titulo.mb-4(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Rotación y asociación de cultivos

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        .bg15.p-4
          p.mb-4 La rotación consiste en alternar diferentes especies en una misma área durante ciclos sucesivos. Esto interrumpe los ciclos biológicos de plagas y enfermedades que afectan a un solo grupo de plantas.
          p.mb-0 #[b Por ejemplo:] alternar cultivos de tomate o pimentón con maíz o sorgo reduce la presencia de #[em Fusarium spp., Rhizoctonia solani] y nematodos.
      .col-lg-3
        .bg16.p-4
            img(src='@/assets/curso/tema4/5.svg', alt='')
      .col-lg-4
        .p-4
          img.mb-0.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/6.svg', alt='')
          p.mb-0(data-aos="fade-left") La asociación de cultivos combina dos o más especies en el mismo espacio. Esta práctica puede disminuir la colonización de plagas, generar barreras físicas y atraer insectos benéficos. Algunas combinaciones útiles incluyen maíz con frijol o tomate con albahaca.


    .tarjetaf.p-4.p-lg-5.mb-0(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-lg-5.mb-4 a) Beneficios principales
            p.mb-4 La aplicación adecuada de los métodos culturales dentro del manejo del cultivo aporta ventajas clave para la sostenibilidad del sistema productivo. Estas prácticas, además de ser preventivas, fortalecen el equilibrio del agroecosistema y mejoran las condiciones del suelo y de las plantas, lo que contribuye directamente al desarrollo saludable del cultivo.
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Disminución de plagas y enfermedades.
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Mejora de la fertilidad y estructura del suelo.
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Diversificación de la producción.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema4/7.png")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-12
            .row.justify-content-center.align-items-top.mb-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-lg-5.mb-4 b) Selección de variedades resistentes
                p.mb-4 El uso de variedades resistentes es una estrategia preventiva muy eficiente. Estas plantas poseen características genéticas que limitan el desarrollo de enfermedades sin necesidad de aplicaciones frecuentes de productos químicos.
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-check
                    p.mb-0 Tomates resistentes a #[em Fusarium oxysporum] o al virus TSWV.
                  li.d-flex.mb-2
                    i.fas.fa-check
                    p.mb-0 Pepinos resistentes a oídio.
                  li.d-flex.mb-0
                    i.fas.fa-check
                    p.mb-0 Arroz tolerante a #[em Pyricularia oryzae.]
              .col-lg-5.col-md-8
                img.mb-0(alt="" src="@/assets/curso/tema4/8.png")
            p.mb-0.mx-lg-5 Es fundamental seleccionar semillas certificadas y adaptadas al clima y al sistema de producción.
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-lg-5.mb-4 c) Control de humedad y ventilación
            p.mb-4 La humedad elevada y la mala ventilación favorecen la aparición de enfermedades. En ambientes bajo cubierta se recomienda:
            ul.lista-ul.mb-4
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Mantener ventilación cruzada.
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Evitar riegos por aspersión en horas de baja temperatura.
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Controlar la condensación en paredes y techos del invernadero.
            p.mb-0 El objetivo es crear condiciones desfavorables para los patógenos, pero apropiadas para el crecimiento del cultivo.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema4/9.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-lg-5.mb-4 d) Desinfección y limpieza
            p.mb-0 La higiene es clave para evitar la entrada o permanencia de patógenos.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema4/10.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-lg-5.mb-4 e) Uso de sustratos estériles y agua tratada
            p.mb-0 Utilizar sustratos limpios evita la introducción de patógenos desde la etapa de germinación.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema4/11.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-lg-5.mb-4 f) Manejo de densidad de siembra: 
            p.mb-0 El espaciamiento adecuado entre plantas permite una buena ventilación y entrada de luz, lo cual reduce la humedad acumulada y dificulta el desarrollo de hongos y bacterias.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema4/12.png")



    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2 Control biológico


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(alt="" src="@/assets/curso/tema4/13.png")
      .col-lg-7
        p.mb-4 El control biológico es una estrategia fundamental dentro del Manejo Integrado de Plagas y Enfermedades (MIPE) que consiste en la utilización de organismos benéficos (depredadores, parasitoides o microorganismos antagonistas) para mantener las poblaciones de plagas y patógenos por debajo de niveles que causen daño económico.
        .bg17.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2
              img(alt="" src="@/assets/curso/tema4/14.svg")
            .col-lg-10
              p.mb-0.text-white A diferencia de los métodos químicos, el control biológico se caracteriza por ser ecológicamente sustentable, selectivo y compatible con otras prácticas agrícolas. Promueve el equilibrio natural del ecosistema agrícola, contribuyendo a la reducción de residuos tóxicos y a la preservación de la biodiversidad.


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items.p-0.mb-0(titulo="a) Depredadores naturales")
            .col-lg-11.mb-0
              p.mb-4 Los depredadores naturales son organismos que capturan y consumen directamente a sus presas, regulando así las poblaciones de insectos o ácaros plaga. Se menciona los más comunes en sistemas agrícolas. 
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-4
                  img(alt="" src="@/assets/curso/tema4/15.svg")
                .col-lg-8
                  ul.lista-ul.mb-0
                    li.d-flex.mb-3
                      i.fas.fa-check
                      p.mb-0 #[b Crisopas (#[em Chrysoperla spp.]):] sus larvas, conocidas como “leones de los áfidos”, devoran pulgones, trips, huevos de lepidópteros y mosca blanca.
                    li.d-flex.mb-3
                      i.fas.fa-check
                      p.mb-0 #[b Mariquitas o coccinélidos (#[em Coccinella septempunctata, Hippodamia convergens]):] consumen grandes cantidades de áfidos, cochinillas y otros insectos de cuerpo blando.
                    li.d-flex.mb-3
                      i.fas.fa-check
                      p.mb-0 #[b Ácaros fitoseidos (#[em Phytoseiulus persimilis, Amblyseius swirskii]):] son eficaces controladores de ácaros tetraníquidos y trips en cultivos hortícolas y ornamentales.
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 #[b #[em Orius] spp. (chinches depredadoras):] se alimentan de huevos y larvas pequeñas de trips y mosca blanca.
              .bg18.p-4
                p.mb-0 Estos depredadores pueden encontrarse naturalmente en el agroecosistema o ser liberados de manera controlada mediante programas de control biológico aumentativo, con dosis ajustadas según el nivel de infestación y las condiciones ambientales, proporcionan un control inmediato y directo de las plagas sin generar resistencia ni afectar organismos no objetivo.
          .row.justify-content-center.align-items.p-0.mb-0(titulo="b) Parasitoides")
            .col-lg-11.mb-0
              p.mb-4 Los parasitoides son insectos, generalmente de los órdenes #[em Hymenoptera] (avispas) o #[em Diptera] (moscas), que depositan sus huevos dentro o sobre el cuerpo de una plaga. Al desarrollarse, la larva del parasitoide se alimenta del huésped, provocando finalmente su muerte. Se mencionan algunos ejemplos.
              .bg18.p-4.mb-4
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-8
                    ul.lista-ul.mb-0
                      li.d-flex.mb-3
                        i.fas.fa-check
                        p.mb-0 #[b #[em Encarsia formosa y Eretmocerus eremicus:]] parasitoides de la mosca blanca (Bemisia tabaci, Trialeurodes vaporariorum), ampliamente utilizados en cultivos de tomate, pepino y ornamentales.
                      li.d-flex.mb-3
                        i.fas.fa-check
                        p.mb-0 #[b #[em Aphidius colemani y Diaeretiella rapae:]] controlan poblaciones de pulgones en hortalizas y cereales.
                      li.d-flex.mb-3
                        i.fas.fa-check
                        p.mb-0 #[b #[em Diglyphus isaea:]] eficaz contra minadores de hoja (Liriomyza spp).
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 #[b #[em Trichogramma spp:]] parasitoide de huevos de lepidópteros (gusanos cogolleros, barrenadores, polillas).
                  .col-lg-4
                    img.img-t.img-a(alt="" src="@/assets/curso/tema4/16.svg")
              p.mb-0 El éxito del control biológico con parasitoides depende del momento de liberación, la densidad de la plaga y las condiciones ambientales (temperatura, humedad, luz), su ventaja principal es el control específico, sin daños colaterales sobre insectos benéficos o polinizadores.
          .row.justify-content-center.align-items.p-0.mb-0(titulo="c) Microorganismos antagonistas")
            .col-lg-11.mb-0
              p.mb-4 Los microorganismos antagonistas son hongos, bacterias o virus capaces de inhibir el crecimiento, infección o reproducción de patógenos y plagas mediante mecanismos de competencia, antibiosis o parasitismo directo. Se mencionan los más destacados.
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-8
                  ul.lista-ul.mb-0
                    li.d-flex.mb-3
                      i.fas.fa-check
                      p.mb-0 #[b #[em Trichoderma harzianum y T. viride:]] hongos del suelo que actúan como antagonistas de #[em Fusarium, Rhizoctonia y Sclerotium], compitiendo por espacio y nutrientes o produciendo enzimas líticas que degradan el micelio del patógeno.
                    li.d-flex.mb-3
                      i.fas.fa-check
                      p.mb-0 #[b #[em Beauveria bassiana y Metarhizium anisopliae:]] hongos entomopatógenos que infectan insectos por contacto, atravesando su cutícula y colonizando su cuerpo. Son eficaces contra trips, escarabajos, chinches y moscas blancas.
                    li.d-flex.mb-3
                      i.fas.fa-check
                      p.mb-0 #[b #[em Bacillus thuringiensis (Bt):]] bacteria que produce toxinas cristalinas (δ-endotoxinas) letales para larvas de lepidópteros y dípteros, ampliamente utilizada en formulaciones biopesticidas y en cultivos transgénicos Bt.
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 #[b #[em Pseudomonas fluorescens y Bacillus subtilis:]] bacterias rizosféricas que suprimen patógenos mediante producción de antibióticos naturales y estimulación del crecimiento vegetal.
                .col-lg-4
                  img.img-t.img-a(alt="" src="@/assets/curso/tema4/17.svg")
              .bg18.p-4
                p.mb-0 #[b Nota:] estos agentes no solo reducen la presión de enfermedades y plagas, sino que también mejoran la salud del suelo y la resistencia sistémica de las plantas.
          .row.justify-content-center.align-items.p-0.mb-0(titulo="d) Promoción del equilibrio biológico")
            .col-lg-11.mb-0
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-7
                  p.mb-4 El principio fundamental del control biológico es mantener un equilibrio dinámico entre organismos benéficos y nocivos, sin eliminar completamente las poblaciones de plagas, sino manteniéndolas por debajo del umbral económico de daño.
                  p.mb-4 El uso continuo y racional de productos biológicos (como extractos naturales, bioinsecticidas y biofungicidas) favorece:
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 La preservación de enemigos naturales y polinizadores.
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 La reducción de residuos químicos en frutos y suelos.
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 La recuperación del equilibrio ecológico en ambientes agrícolas intensivos.
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 La sostenibilidad productiva a largo plazo, al prevenir el desarrollo de resistencia en plagas.
                .col-lg-5
                  img(alt="" src="@/assets/curso/tema4/18.png")
              p.mb-0 Para potenciar la eficacia del control biológico, es fundamental combinarlo con buenas prácticas culturales, monitoreo constante y condiciones ambientales adecuadas para el desarrollo de los agentes benéficos. 
    

    separador
    #t_4_3.titulo-segundo.mb-5
      h2 4.3 Control mecánico y físico


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(alt="" src="@/assets/curso/tema4/19.png")
      .col-lg-7
        p.mb-4 El control mecánico y físico comprende un conjunto de medidas no químicas orientadas a prevenir la entrada, dispersión o proliferación de plagas y patógenos mediante barreras, manipulación directa o modificación de las condiciones ambientales.
        p.mb-0 Estas prácticas son componentes esenciales, ya que actúan de forma preventiva, reducen la presión de plagas sin generar residuos tóxicos y son compatibles con métodos biológicos o culturales. A diferencia de los controles biológicos o químicos, los métodos mecánicos y físicos se basan en acciones directas y tangibles sobre el entorno del cultivo, con el objetivo de interrumpir los ciclos de vida de los organismos dañinos o crear condiciones adversas para su supervivencia.

    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .titulo.mb-4(data-aos="fade-left")
          img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
          h3.mb-0 Barreras físicas
        p.mb-4.mt-lg-2 Son estructuras diseñadas para impedir el ingreso de plagas al área de cultivo, especialmente en sistemas protegidos como invernaderos, casas malla o túneles plásticos.
        .bg19.p-5
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-angle-right.t4
              p.mb-0 Mallas anti-insectos, se fabrican con materiales sintéticos (como polietileno o poliéster) y aberturas calibradas según el tamaño del insecto objetivo. Por ejemplo, mallas de 50 #[em mesh] (malla monofilamento fabricada en polietileno de alta densidad con aditivo UV. Brinda una barrera protectora física contra insectos como áfidos o pulgones) bloquean la entrada de mosca blanca (#[em Bemisia tabaci]), trips y áfidos.
            li.d-flex.mb-2
              i.fas.fa-angle-right.t4
              p.mb-0 Cortinas térmicas: además de regular la temperatura interna, actúan como una segunda barrera frente al ingreso de insectos durante la ventilación.
            li.d-flex.mb-0
              i.fas.fa-angle-right.t4
              p.mb-0 Doble puerta sanitaria o esclusa de acceso, evita el ingreso accidental de plagas o patógenos adheridos a la ropa, herramientas o materiales, reforzando las medidas de bioseguridad.
      .col-lg-4
        img(alt="" src="@/assets/curso/tema4/20.png")

    
    p.mb-5 El beneficio principal es la prevención del ingreso de plagas vectores de virus y reducción de la necesidad de tratamientos fitosanitarios posteriores.


    .titulo.mb-4(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Trampas

    
    p.mb-5 Las trampas son dispositivos que permiten monitorear y controlar poblaciones de insectos voladores mediante atracción visual o lumínica.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5 
        img(src='@/assets/curso/tema4/21.png' alt='')
      .col-lg-7.clp
        TabsA.color-acento-botones.mb-0(data-aos="fade-right")
          .tarjeta.color-a.p-lg-5.p-4(titulo="Trampas adhesivas")
            .row.justify-content-center
              .col-lg-12
                p.mb-0 Se basan en el color y la pegajosidad. Las amarillas son eficaces para mosca blanca, trips y pulgones; las azules, para trips; y las negras, para ciertos dípteros.
          .tarjeta.color-a.p-lg-5.p-4(titulo="Trampas luminosas")
            .row.justify-content-center
              .col-lg-12
                p.mb-0 Utilizan luz ultravioleta (UV) para atraer insectos nocturnos como polillas o mosquitos. Una vez atraídos, los insectos quedan adheridos o son electrocutados.
          .tarjeta.color-a.p-lg-5.p-4(titulo="Uso combinado")
            .row.justify-content-center
              .col-lg-12
                p.mb-0 Las trampas sirven tanto para monitorear la presencia y abundancia de plagas como para realizar capturas masivas en momentos de alta presión poblacional.

    
    p.mb-5 Son de gran importancia porque permiten tomar decisiones basadas en datos reales del campo, ajustando estrategias de control preventivo o curativo con mayor precisión.


    .titulo.mb-4(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Eliminación manual de hojas o frutos afectados
    

    p.mb-5 La remoción mecánica o manual de material vegetal dañado constituye una medida simple pero altamente efectiva para disminuir la fuente de inóculo y los puntos de reproducción de plagas y patógenos.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bg20.p-4
          ul.lista-ul.mb-3.mt-lg-3
            li.d-flex.mb-3
              i.fas.fa-angle-right.t4
              p.mb-0 Se recomienda eliminar hojas, brotes, frutos o plantas infectadas tan pronto se detecten síntomas de enfermedad o presencia de larvas.
            li.d-flex.mb-3
              i.fas.fa-angle-right.t4
              p.mb-0 El material retirado debe desecharse adecuadamente, preferiblemente mediante quema controlada, enterrado profundo o compostaje a alta temperatura, para evitar su reutilización o dispersión.
            li.d-flex.mb-0
              i.fas.fa-angle-right.t4
              p.mb-0 Esta práctica es especialmente útil en cultivos hortícolas de ciclo corto, donde la propagación puede ser rápida.
      .col-lg-4
        img(:src="require('@/assets/curso/tema4/22.svg')" alt='Imagen decorativa')
    

    p.mb-5 La mayor ventaja es que interrumpe el ciclo de transmisión y reduce significativamente la presión de infección en las etapas tempranas del cultivo.


    .titulo.mb-4(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Desinfección térmica
    

    p.mb-5 La desinfección térmica es una técnica física que utiliza altas temperaturas para eliminar o inactivar patógenos del suelo, nematodos y semillas de malezas.


    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg2.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema4/23.svg')
          h3.mb-4.text-center.text-white Solarización
          p.mb-0.text-white Consiste en cubrir el suelo húmedo con una lámina plástica transparente durante 4 a 6 semanas, aprovechando la radiación solar para elevar la temperatura del primer horizonte del suelo (hasta 50–60 °C). Es una práctica eficaz en climas cálidos y se aplica antes de la siembra.
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg3.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema4/24.svg')
          h3.mb-4.text-center.text-white Vapor o vapor de agua caliente
          p.mb-0.text-white Se utiliza principalmente en sustratos o bandejas de producción de plántulas. La temperatura del vapor (80–100 °C) logra esterilizar sin alterar significativamente la estructura física del material.

    
    p.mb-5 Con lo anterior se espera una reducción de patógenos como #[em Fusarium spp, Pythium spp, Rhizoctonia solani] y nematodos del género #[em Meloidogyne], sin necesidad de fumigantes químicos.

    
    .titulo.mb-4(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Manejo de la temperatura y humedad interna
    

    p.mb-5 El control del microclima es esencial para mantener condiciones desfavorables al desarrollo de patógenos, especialmente hongos y bacterias que requieren humedad elevada para germinar.


    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima1(src='@/assets/curso/tema1/sub.svg' alt='AvatarTop')
          .bg6.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Función
          p.mb-2.text-center Se utiliza para extraer aceites o grasas de los granos molidos; en el caso del cacao, la prensa hidráulica separa la manteca de cacao de la pasta o licor de cacao.
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima2(src='@/assets/curso/tema1/sub.svg' alt='AvatarTop')
          .bg6.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Características
          p.mb-2.text-center Opera aplicando alta presión para extraer la grasa sin alterar la calidad del producto.
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg5.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima3(src='@/assets/curso/tema1/sub.svg' alt='AvatarTop')
          .bg6.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Aplicaciones
          p.mb-2.text-center



    separador
    #t_4_4.titulo-segundo.mb-5
      h2 

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
