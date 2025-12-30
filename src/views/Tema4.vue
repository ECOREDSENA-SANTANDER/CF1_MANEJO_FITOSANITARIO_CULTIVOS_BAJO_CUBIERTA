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


    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema4/2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              p.mb-0.text-white Se presenta el tema #[b Manejo Integrado de Plagas y Enfermedades (MIPE),] destacando su importancia para mantener los cultivos sanos mediante estrategias preventivas y sostenibles. Para profundizar en este concepto y reforzar su comprensión, se invita a revisar el video de apoyo.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=qmKWwKcfxoo" target="_blank")
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


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Rotación y asociación de cultivos

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.mb-lg-0.mb-4
        .bg15.p-4
          p.mb-4 La rotación consiste en alternar diferentes especies en una misma área durante ciclos sucesivos. Esto interrumpe los ciclos biológicos de plagas y enfermedades que afectan a un solo grupo de plantas.
          p.mb-0 #[b Por ejemplo:] alternar cultivos de tomate o pimentón con maíz o sorgo reduce la presencia de #[em Fusarium spp., Rhizoctonia solani] y nematodos.
      .col-lg-3.col-md-5.col-10
        .bg16.p-4.mb-lg-0.mb-4
          img(src='@/assets/curso/tema4/5.svg', alt='')
      .col-lg-4.col-md-7
        img.mb-4.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/6.svg', alt='')
        p.mb-0 La asociación de cultivos combina dos o más especies en el mismo espacio. Esta práctica puede disminuir la colonización de plagas, generar barreras físicas y atraer insectos benéficos. Algunas combinaciones útiles incluyen maíz con frijol o tomate con albahaca.


    .tarjetaf.p-4.p-lg-5.mb-0(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-4 a) Beneficios principales
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
                h4.mb-4 b) Selección de variedades resistentes
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
            h4.mb-4 c) Control de humedad y ventilación
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
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-12
            .row.justify-content-center.align-items-top.mb-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 d) Desinfección y limpieza
                p.mb-4 La higiene es clave para evitar la entrada o permanencia de patógenos.
                p.mb-4 Se recomienda:
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-check
                    p.mb-0 Retirar y destruir residuos vegetales infectados.
                  li.d-flex.mb-2
                    i.fas.fa-check
                    p.mb-0 Desinfectar herramientas, bandejas y estructuras con hipoclorito (1–2 %) o peróxido estabilizado.
                  li.d-flex.mb-0
                    i.fas.fa-check
                    p.mb-0 Mantener las áreas de trabajo limpias y ordenadas.
              .col-lg-5.col-md-8
                img.mb-0(alt="" src="@/assets/curso/tema4/10.png")
            p.mb-0.mx-lg-5 Estas prácticas reducen el riesgo de reinfección y la transmisión entre ciclos productivos.
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-4 e) Uso de sustratos estériles y agua tratada
            p.mb-4 Utilizar sustratos limpios evita la introducción de patógenos desde la etapa de germinación.
            ul.lista-ul.mb-4
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Emplear mezclas esterilizadas mediante vapor, solarización o productos permitidos.
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Analizar el agua de riego para descartar contaminantes y ajustar sistemas de filtración, cloración o radiación UV.
            p.mb-0 Estas medidas previenen enfermedades como #[em Pythium, Phytophthora y Rhizoctonia.]
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema4/11.png")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-12
            .row.justify-content-center.align-items-top.mb-4
              .col-lg-6.mb-lg-0.mb-4
                h4.mb-4 f) Manejo de densidad de siembra: 
                p.mb-4 El espaciamiento adecuado entre plantas permite una buena ventilación y entrada de luz, lo cual reduce la humedad acumulada y dificulta el desarrollo de hongos y bacterias.
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-check
                    p.mb-0 La densidad depende de la especie y del sistema de producción.
                  li.d-flex.mb-2
                    i.fas.fa-check
                    p.mb-0 Si la siembra es muy densa, aumenta la competencia por agua y nutrientes, y se incrementa la susceptibilidad a enfermedades.
                  li.d-flex.mb-0
                    i.fas.fa-check
                    p.mb-0 Una distribución equilibrada mejora el crecimiento uniforme y facilita las aplicaciones de manejo fitosanitario.
              .col-lg-5.col-md-8
                img.mb-0(alt="" src="@/assets/curso/tema4/12.png")
            p.mb-0.mx-lg-5 Además, un espaciamiento bien planificado optimiza el uso del agua y los fertilizantes, promoviendo un sistema productivo más eficiente y sostenible.



    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2 Control biológico


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-8.col-10.mb-lg-0.mb-4
        img(alt="" src="@/assets/curso/tema4/13.png")
      .col-lg-7
        p.mb-4 El control biológico es una estrategia fundamental dentro del Manejo Integrado de Plagas y Enfermedades (MIPE) que consiste en la utilización de organismos benéficos (depredadores, parasitoides o microorganismos antagonistas) para mantener las poblaciones de plagas y patógenos por debajo de niveles que causen daño económico.
        .bg17.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.mb-lg-0.mb-4
              img.img-a.img-t(alt="" src="@/assets/curso/tema4/14.svg")
            .col-lg-10
              p.mb-0.text-white A diferencia de los métodos químicos, el control biológico se caracteriza por ser ecológicamente sustentable, selectivo y compatible con otras prácticas agrícolas. Promueve el equilibrio natural del ecosistema agrícola, contribuyendo a la reducción de residuos tóxicos y a la preservación de la biodiversidad.


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items.p-0.mb-0(titulo="a) Depredadores naturales")
            .col-lg-11.mb-0
              p.mb-4 Los depredadores naturales son organismos que capturan y consumen directamente a sus presas, regulando así las poblaciones de insectos o ácaros plaga. Se menciona los más comunes en sistemas agrícolas. 
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-4.col-md-7.col-10.mb-lg-0.mb-4
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
                    ul.lista-ul.mb-4.mb-lg-0
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
                  ul.lista-ul.mb-4.mb-lg-0
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
                .col-lg-4.col-md-7.col-10
                  img.img-t.img-a(alt="" src="@/assets/curso/tema4/17.svg")
              .bg18.p-4
                p.mb-0 #[b Nota:] estos agentes no solo reducen la presión de enfermedades y plagas, sino que también mejoran la salud del suelo y la resistencia sistémica de las plantas.
          .row.justify-content-center.align-items.p-0.mb-0(titulo="d) Promoción del equilibrio biológico")
            .col-lg-11.mb-0
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-7
                  p.mb-4 El principio fundamental del control biológico es mantener un equilibrio dinámico entre organismos benéficos y nocivos, sin eliminar completamente las poblaciones de plagas, sino manteniéndolas por debajo del umbral económico de daño.
                  p.mb-4 El uso continuo y racional de productos biológicos (como extractos naturales, bioinsecticidas y biofungicidas) favorece:
                  ul.lista-ul.mb-4.mb-lg-0
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
                .col-lg-5.col-md-8.col-10
                  img(alt="" src="@/assets/curso/tema4/18.png")
              p.mb-0 Para potenciar la eficacia del control biológico, es fundamental combinarlo con buenas prácticas culturales, monitoreo constante y condiciones ambientales adecuadas para el desarrollo de los agentes benéficos. 
    

    separador
    #t_4_3.titulo-segundo.mb-5
      h2 4.3 Control mecánico y físico


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-8.col-10.mb-lg-0.mb-4
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
        .bg19.p-lg-5.p-4
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
      .col-lg-4.d-none.d-lg-block
        img(alt="" src="@/assets/curso/tema4/20.png")

    
    p.mb-5(data-aos="fade-right") El beneficio principal es la prevención del ingreso de plagas vectores de virus y reducción de la necesidad de tratamientos fitosanitarios posteriores.


    .titulo.mb-4(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Trampas

    
    p.mb-5 Las trampas son dispositivos que permiten monitorear y controlar poblaciones de insectos voladores mediante atracción visual o lumínica.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-9.col-10.mb-lg-0.mb-4
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
    

    p.mb-5(data-aos="fade-right") La remoción mecánica o manual de material vegetal dañado constituye una medida simple pero altamente efectiva para disminuir la fuente de inóculo y los puntos de reproducción de plagas y patógenos.

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .bg20.p-4
          ul.lista-ul.mb-lg-3.mt-lg-3.mb-0
            li.d-flex.mb-3
              i.fas.fa-angle-right.t4
              p.mb-0 Se recomienda eliminar hojas, brotes, frutos o plantas infectadas tan pronto se detecten síntomas de enfermedad o presencia de larvas.
            li.d-flex.mb-3
              i.fas.fa-angle-right.t4
              p.mb-0 El material retirado debe desecharse adecuadamente, preferiblemente mediante quema controlada, enterrado profundo o compostaje a alta temperatura, para evitar su reutilización o dispersión.
            li.d-flex.mb-0
              i.fas.fa-angle-right.t4
              p.mb-0 Esta práctica es especialmente útil en cultivos hortícolas de ciclo corto, donde la propagación puede ser rápida.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema4/22.svg')
    

    p.mb-5(data-aos="fade-right") La mayor ventaja es que interrumpe el ciclo de transmisión y reduce significativamente la presión de infección en las etapas tempranas del cultivo.


    .titulo.mb-4(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Desinfección térmica
    

    p.mb-5(data-aos="fade-right") La desinfección térmica es una técnica física que utiliza altas temperaturas para eliminar o inactivar patógenos del suelo, nematodos y semillas de malezas.


    .row.justify-content-center.align-items-stretch.mb-2.mb-lg-5(data-aos="fade-left")
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

    
    p.mb-5(data-aos="fade-right") Con lo anterior se espera una reducción de patógenos como #[em Fusarium spp, Pythium spp, Rhizoctonia solani] y nematodos del género #[em Meloidogyne], sin necesidad de fumigantes químicos.

    
    .titulo.mb-4(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Manejo de la temperatura y humedad interna
    

    p.mb-5(data-aos="fade-right") El control del microclima es esencial para mantener condiciones desfavorables al desarrollo de patógenos, especialmente hongos y bacterias que requieren humedad elevada para germinar.


    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg21.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima1(src='@/assets/curso/tema4/25.svg' alt='AvatarTop')
          .bg23.p-1.mb-4
            h4.text-center.text-white.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Temperatura
          p.mb-2.text-center Mantener rangos óptimos según especie vegetal y evitar fluctuaciones extremas previene el estrés fisiológico que predispone a infecciones.
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg4.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img.ima2(src='@/assets/curso/tema4/26.svg' alt='AvatarTop')
          .bg24.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Humedad relativa
          p.mb-2.text-center Niveles superiores al 85 % favorecen enfermedades como el mildiu, botritis o alternariosis; por tanto, se recomienda una ventilación adecuada y evitar riegos en horas nocturnas.
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg22.p-5.ct
          p.mb-0.text-center.text-white Sistemas automáticos de ventilación, calefacción o nebulización ayudan a mantener un ambiente estable, reduciendo el riesgo de proliferación microbiana.

    
    p.mb-0(data-aos="fade-left") El objetivo es crear un entorno menos favorable para los patógenos sin comprometer el desarrollo de las plantas.


    separador
    #t_4_4.titulo-segundo.mb-5
      h2 4.4 Control químico


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-8.col-10.mb-lg-0.mb-4
        img.ima2(src='@/assets/curso/tema4/27.png' alt='AvatarTop')
      .col-lg-8
        p.mb-3 El control químico consiste en la utilización de productos fitosanitarios (insecticidas, fungicidas, acaricidas, nematicidas o herbicidas) con el propósito de reducir o eliminar poblaciones de plagas, patógenos o malezas que amenazan la producción agrícola.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2.d-none.d-lg-block
            img.img-t.img-a(src='@/assets/curso/tema4/28.png' alt='AvatarTop')
          .col-lg-10
            p.mb-0 Dentro del Manejo Integrado de Plagas y Enfermedades (MIPE), este tipo de control debe considerarse como última alternativa, aplicándose únicamente cuando los métodos culturales, biológicos, mecánicos o físicos no han sido suficientes para mantener las poblaciones bajo el umbral económico de daño.
        p.mb-0 El uso responsable y racional de agroquímicos es indispensable para preservar la salud humana, la inocuidad alimentaria y el equilibrio ambiental, evitando la contaminación del suelo, agua y fauna benéfica.
 

    .tarjetaf.p-4.p-lg-5.mb-0(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-8.order-lg-1.order-md-2.order-2
            img.mb-0.img-a.img-t(alt="" src="@/assets/curso/tema4/29.png")
          .col-lg-8.mb-lg-0.mb-4.order-lg-2.order-md-1.order-1
            h4.mb-4 Uso racional de pesticidas certificados
            p.mb-4 El uso racional implica la selección adecuada, aplicación segura y manejo eficiente de los productos químicos.
            ul.lista-ul.mb-4
              li.d-flex.mb-2
                i.fas.fa-angle-right.t4
                p.mb-0 Se deben emplear pesticidas registrados y autorizados por las autoridades competentes (como ICA o FAO), asegurando su eficacia y seguridad.
              li.d-flex.mb-2
                i.fas.fa-angle-right.t4
                p.mb-0 Es fundamental seleccionar productos específicos para el cultivo y la plaga o enfermedad objetivo, evitando tratamientos generalizados o innecesarios.
              li.d-flex.mb-0
                i.fas.fa-angle-right.t4
                p.mb-0 La etiqueta del producto debe ser la principal guía, indicando dosis, frecuencia, compatibilidad y condiciones de uso.
            p.mb-0 Su objetivo es maximizar la eficacia del tratamiento y minimizar impactos negativos sobre el ambiente y la salud del aplicador y del consumidor.
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-8.order-lg-1.order-md-2.order-2
            img.mb-0.img-a.img-t(alt="" src="@/assets/curso/tema4/30.png")
          .col-lg-8.mb-lg-0.mb-4.order-lg-2.order-md-1.order-1
            h4.mb-4 Rotación de ingredientes activos
            p.mb-4 El uso repetido de un mismo principio activo o de productos con el mismo modo de acción puede conducir a la resistencia de plagas y patógenos, reduciendo la efectividad del control químico.
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-angle-right.t4
                p.mb-0 La rotación de ingredientes activos con diferentes grupos químicos (según clasificación IRAC, FRAC o HRAC) es esencial para retrasar la aparición de resistencia.
              li.d-flex.mb-2
                i.fas.fa-angle-right.t4
                p.mb-0 Alternar entre mecanismos de acción distintos interrumpe los procesos adaptativos de los organismos y mantiene la eficacia a largo plazo.
              li.d-flex.mb-0
                i.fas.fa-angle-right.t4
                p.mb-0 También es recomendable combinar tratamientos químicos con estrategias biológicas o culturales para lograr un efecto sinérgico y sostenible.
        .row.justify-content-center.align-items-center
          .col-lg-11
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-3.col-md-8.order-lg-1.order-md-2.order-2
                img.mb-0.img-a.img-t(alt="" src="@/assets/curso/tema4/31.png")
              .col-lg-8.mb-lg-0.mb-4.order-lg-2.order-md-1.order-1
                h4.mb-4 Aplicación dirigida y dosificación exacta
                p.mb-4 La precisión en la aplicación es clave para garantizar la eficacia del producto y reducir pérdidas o contaminaciones.
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-angle-right.t4
                    p.mb-0 Se deben utilizar equipos de aspersión calibrados, asegurando una distribución uniforme del producto y evitando sobredosificaciones o zonas sin cobertura.
                  li.d-flex.mb-2
                    i.fas.fa-angle-right.t4
                    p.mb-0 La aplicación dirigida al área afectada o al momento oportuno (según el ciclo biológico de la plaga) maximiza la efectividad del tratamiento.
                  li.d-flex.mb-2
                    i.fas.fa-angle-right.t4
                    p.mb-0 Factores como el volumen de agua, tamaño de gota, presión y velocidad de avance deben ajustarse cuidadosamente.
                  li.d-flex.mb-0
                    i.fas.fa-angle-right.t4
                    p.mb-0 También se deben considerar condiciones ambientales (temperatura, humedad, viento) para evitar deriva o evaporación prematura.
            p.mb-0 Al tener presente lo indicado anteriormente se obtendrá una optimización de recursos, reducción de costos y protección del medio ambiente.
        .row.justify-content-center.align-items-center
          .col-lg-11
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-3.col-md-8.order-lg-1.order-md-2.order-2
                img.mb-0.img-a.img-t(alt="" src="@/assets/curso/tema4/32.png")
              .col-lg-8.mb-lg-0.mb-4.order-lg-2.order-md-1.order-1
                h4.mb-4 Cumplimiento de los tiempos de carencia
                p.mb-4 El tiempo de carencia es el periodo que debe transcurrir entre la última aplicación de un agroquímico y la cosecha del producto, garantizando que los niveles de residuos en los alimentos estén dentro de los límites máximos permitidos (LMR - límites máximos de residuos).
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-angle-right.t4
                    p.mb-0 Cumplir estrictamente con estos plazos asegura la inocuidad del producto agrícola y el cumplimiento de normativas de exportación y consumo interno.
                  li.d-flex.mb-2
                    i.fas.fa-angle-right.t4
                    p.mb-0 El incumplimiento puede resultar en rechazo de lotes, sanciones económicas y riesgos a la salud del consumidor.
                  li.d-flex.mb-0
                    i.fas.fa-angle-right.t4
                    p.mb-0 Se recomienda llevar un registro actualizado de las fechas de aplicación y cosecha para asegurar la trazabilidad del proceso productivo.
            p.mb-0 Lo más importante al cumplir con esto, es la protección del consumidor, reputación del productor y acceso a mercados nacionales e internacionales.
        .row.justify-content-center.align-items-center
          .col-lg-11
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-3.col-md-8.order-lg-1.order-md-2.order-2
                img.mb-0.img-a.img-t(alt="" src="@/assets/curso/tema4/33.png")
              .col-lg-8.mb-lg-0.mb-4.order-lg-2.order-md-1.order-1
                h4.mb-4 Protección personal
                p.mb-4 El uso seguro de agroquímicos requiere una estricta aplicación de normas de seguridad ocupacional y ambiental.
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-angle-right.t4
                    p.mb-0 El personal debe utilizar equipo de protección personal (EPP) completo: guantes, mascarilla, gafas, botas y ropa impermeable.
                  li.d-flex.mb-2
                    i.fas.fa-angle-right.t4
                    p.mb-0 Las mezclas deben prepararse en zonas ventiladas, evitando la exposición directa y el contacto con piel o mucosas.
                  li.d-flex.mb-2
                    i.fas.fa-angle-right.t4
                    p.mb-0 Los envases vacíos deben ser triple lavados, perforados y dispuestos en centros de acopio autorizados, según programas de manejo de envases (como Campo Limpio).
                  li.d-flex.mb-0
                    i.fas.fa-angle-right.t4
                    p.mb-0 Mantener un registro detallado de cada aplicación (fecha, producto, dosis, lote, aplicador) facilita la trazabilidad, la auditoría y la evaluación de la eficacia de los tratamientos.
            p.mb-0 Resultado esperado es la reducción de riesgos para la salud del aplicador, prevención de contaminación ambiental y mejora del control técnico y administrativo del uso de agroquímicos.


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
