<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diagnóstico y monitoreo fitopatológico

  
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El diagnóstico fitopatológico es el proceso mediante el cual se identifican las causas de las enfermedades o daños en las plantas. Estas causas pueden ser bióticas, como hongos, bacterias, virus, nematodos o plagas, o abióticas, relacionadas con factores ambientales, de manejo o deficiencias nutricionales.
            br
            br
            p.mb-0 El monitoreo consiste en la observación periódica y sistemática del cultivo para detectar a tiempo los primeros síntomas o signos de problemas sanitarios. Gracias a este seguimiento constante, es posible actuar antes de que las enfermedades o plagas se propaguen y generen pérdidas significativas.


    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Técnicas y herramientas utilizadas


    p.mb-5 El diagnóstico y monitoreo fitopatológico en cultivos bajo cubierta combina técnicas tradicionales y tecnologías modernas. Estas herramientas permiten identificar de manera temprana la presencia de plagas, enfermedades o desórdenes fisiológicos, y son fundamentales para implementar un manejo integrado eficiente.
    

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10
        PasosA.color-primario.pas.mb-0(tipo="l")
          .row.justify-content-center.align-items(data-aos="fade-right")
            .col-lg-7
              h4 Inspección visual: 
              p.mb-0 Es el primer paso del monitoreo. Consiste en recorrer el cultivo para observar el estado general de las plantas y detectar síntomas como manchas, amarillamiento, deformaciones, necrosis, marchitez o presencia de hongos e insectos. Su efectividad depende de la frecuencia de revisión y del conocimiento del observador.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema3/2.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items(data-aos="fade-right")
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema3/3.png', alt='Texto que describa la imagen')
            .col-lg-7.text-start
              h4 Trampas adhesivas amarillas o azules: 
              p.mb-3 Estas trampas permiten detectar insectos voladores.
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-angle-right.br
                  p.mb-0 #[b Amarillas:] atraen mosca blanca, minadores y pulgones.
                li.d-flex.mb-1
                  i.fas.fa-angle-right.br
                  p.mb-0 #[b Azules:] más efectivas para trips. Se colocan en diferentes zonas del invernadero para conocer la presencia, abundancia y comportamiento de las plagas.
          .row.justify-content-center.align-items(data-aos="fade-right")
            .col-lg-7
              h4 Trampas de feromonas: 
              p.mb-0 Utilizan atrayentes sexuales específicos para capturar machos de ciertas especies de insectos. Son útiles para confirmar la presencia de la plaga, estimar su población y evaluar la eficacia de los métodos de control.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema3/4.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items(data-aos="fade-right")
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema3/5.png', alt='Texto que describa la imagen')
            .col-lg-7.text-start
              h4 Muestreo de tejidos y análisis de laboratorio: 
              p.mb-0 Consiste en recolectar hojas, tallos, raíces o frutos con síntomas y enviarlos al laboratorio para su análisis. Allí se realizan observaciones microscópicas, cultivos, pruebas serológicas (ELISA) o moleculares (PCR) para identificar con precisión al patógeno. Esto ayuda a aplicar tratamientos adecuados y evitar prácticas ineficaces.                
          .row.justify-content-center.align-items(data-aos="fade-right")
            .col-lg-7
              h4 Registro fotográfico y bitácoras fitosanitarias: 
              p.mb-0 Las fotografías permiten comparar la evolución de los síntomas con el paso del tiempo. Las bitácoras registran la información del monitoreo: fecha, ubicación, condiciones del invernadero, síntomas observados y productos aplicados. Esto facilita el seguimiento y la toma de decisiones basada en evidencia.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema3/6.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items(data-aos="fade-right")
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema3/7.png', alt='Texto que describa la imagen')
            .col-lg-7.text-start
              h4 Sistemas digitales de monitoreo: 
              p.mb-0 Incluyen sensores, aplicaciones móviles y plataformas digitales que registran variables como temperatura, humedad, luz, radiación solar, humedad del sustrato y niveles de CO₂. Estas herramientas permiten generar alertas tempranas, analizar tendencias y mejorar el manejo fitosanitario mediante agricultura de precisión.
              
           
    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Indicadores de alerta temprana

    
    .bg7.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-2.col-5.mb-lg-0.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/8.svg', alt='Imagen decorativa')
        .col-lg-9.col-md-10.ps-lg-0.ps-md-0
          p.mb-0 Los indicadores de alerta temprana son señales que permiten reconocer de manera rápida la presencia de una enfermedad, plaga o desorden fisiológico. Identificarlos oportunamente ayuda a evitar daños severos.


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Cambios en la coloración foliar, deformaciones o marchitez

    
    p.mb-5 El amarillamiento, las arrugas, el enrollamiento o la caída de hojas suelen ser los primeros síntomas de estrés causado por factores bióticos o abióticos.


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 4. 
          | #[em Cambios en coloración foliar, deformaciones o marchitez]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema3/9.png' alt='Hojas con cambios de coloración y signos tempranos de marchitez.')
      .col-lg-7
        AcordionA.activor(tipo="b" clase-tarjeta="tarjeta tarjeta--griss")
          .row.align-items-center(titulo="Cambios de color")
            .col-lg-12
              p.mb-0 La clorosis (amarillamiento) indica frecuentemente deficiencia de nutrientes como nitrógeno, hierro o magnesio, o daños causados por patógenos que afectan la absorción. 
              p.mb-0 El enrojecimiento o pigmentación anormal puede deberse a estrés térmico, hídrico o a infecciones virales.
          .row.align-items-center(titulo="Deformaciones")
            .col-lg-12
              p.mb-0 Hojas encrespadas, enrolladas o distorsionadas pueden sugerir ataques de insectos chupadores (como pulgones o trips) o presencia de virus transmitidos por estos vectores.
          .row.align-items-center(titulo="Marchitez")
            .col-lg-12
              p.mb-0 La pérdida de turgencia en hojas y tallos puede deberse a falta de agua, daño radicular por nematodos, hongos del suelo (como #[em Fusarium o Verticillium]) o taponamientos vasculares.


    .bg8.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-2.col-5.mb-lg-0.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/10.svg', alt='Imagen decorativa')
        .col-lg-9.col-md-10.ps-lg-0.ps-md-0
          p.mb-0 #[b Nota:] detectar estos síntomas tempranamente permite diferenciar entre un problema nutricional o sanitario, orientando la aplicación de fertilizantes o fitosanitarios adecuados.


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Presencia de insectos adultos, ninfas, larvas o huevos

    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3
        .bg9.p-3.h-100
          img.img-t.img-a.mb-0.my-lg-2.mt-lg-2(src='@/assets/curso/tema3/11.svg', alt='Imagen decorativa')
      .col-lg-4
        .bg10.p-4.h-100
          p.mb-0.my-lg-5 La observación directa de diferentes estadios de desarrollo de insectos en el cultivo constituye una señal clara de iniciación o establecimiento de una plaga.
      .col-lg-5
        .titulo-sexto.mb-2
          h5 Figura 5. 
          | #[em Presencia de insectos adultos, ninfas, larvas o huevos]
        img(src='@/assets/curso/tema3/12.png', alt='Larva alimentándose de hojas, evidencia de presencia de estados inmaduros de insectos en el cultivo.')


    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-4.h-100.mb-0
          .tarjeta-numerada__numero
            .h2 1
          p.text-center.mx-3.my-lg-4
            b.text-center Huevos y larvas
          p.mb-0.mx-3.text-center Son las primeras etapas de vida de muchas plagas. En los huevos inicia el desarrollo, y de ellos nacen las larvas, que representan las primeras fases inmaduras del insecto. Identificar estos puntos es clave para un buen control fitosanitario, porque permite actuar antes de que la plaga crezca, se multiplique y genere daños importantes en el cultivo.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-4.h-100.mb-0
          .tarjeta-numerada__numero
            .h2 2
          p.text-center.mx-3.my-lg-4 
            b.text-center Ninfas y adultos
          p.mb-0.mx-3.text-center Indican la presencia de poblaciones activas capaces de causar daño directo, como defoliación, succión de savia o perforación de tejidos. Su identificación temprana permite estimar el nivel de riesgo para el cultivo.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-4.h-100.mb-0
          .tarjeta-numerada__numero
            .h2 3
          p.text-center.mx-3.my-lg-4  
            b.text-center Monitoreo constante
          p.mb-0.mx-3.text-center El uso de trampas adhesivas, trampas con feromonas y revisiones foliares semanales facilita registrar el aumento de la población de plagas y tomar decisiones basadas en umbrales de acción definidos.


    .bg11.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-2.col-5.mb-lg-0.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/13.svg', alt='Imagen decorativa')
        .col-lg-9.col-md-10.ps-lg-0.ps-md-0
          p.mb-0.text-white #[b Nota:] la detección temprana de cualquier estado de desarrollo de la plaga permite aplicar controles biológicos o mecánicos, reduciendo la necesidad de utilizar productos químicos más agresivos.


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Exudaciones, manchas acuosas o mohos

    
    p.mb-5 Estos síntomas suelen asociarse con infecciones causadas por hongos, bacterias o virus, así como con daños físicos en los tejidos. Su presencia indica alteraciones en la salud de la planta y requiere una revisión inmediata del origen del problema.


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 6. 
          | #[em Exudaciones, manchas acuosas o mohos]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema3/14.png' alt='Hoja con manchas acuosas y zonas deterioradas, que evidencian la presencia de exudaciones o moho.')
      .col-lg-7
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items.p-0(titulo="Exudaciones")
            .col-lg-11.mb-0
              p.mb-0 Sustancias pegajosas, resinosas o líquidos que aparecen en tallos, hojas o frutos. Suelen asociarse con infecciones bacterianas como #[em Xanthomonas o Pseudomonas], y representan una respuesta de la planta ante el daño.
          .row.justify-content-center.align-items.p-0(titulo="Manchas acuosas")
            .col-lg-11.mb-0 
              p.mb-0 Áreas húmedas o translúcidas que se observan en hojas o frutos. Generalmente corresponden a etapas iniciales de una infección, las cuales pueden avanzar hacia necrosis (muerte del tejido) si no se controlan oportunamente.  
          .row.justify-content-center.align-items.p-0(titulo="Mohos o micelios")
            .col-lg-11.mb-0   
              p.mb-0 Crecimiento visible con aspecto algodonoso, polvoso o velloso sobre la superficie de las plantas. Este síntoma es característico de enfermedades causadas por hongos como #[em Botrytis, Oidium o Alternaria], y su desarrollo es favorecido por la humedad alta y la poca ventilación.


    .bg12.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-2.col-5.mb-lg-0.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/15.svg', alt='Imagen decorativa')
        .col-lg-9.col-md-10.ps-lg-0.ps-md-0
          p.mb-0.text-white #[b Nota:] la identificación visual temprana y el aislamiento del material afectado permiten aplicar tratamientos dirigidos (fungicidas o bactericidas) y evitar la propagación dentro del cultivo.


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Retraso en crecimiento o floración

    
    p.mb-5 Este indicador refleja alteraciones fisiológicas que pueden deberse a problemas nutricionales, condiciones ambientales inadecuadas (temperatura, humedad, luz), estrés hídrico o presencia de enfermedades. Un desarrollo lento o la ausencia de flores debe considerarse una señal temprana de que la planta enfrenta alguna limitación o afectación.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5 
        .titulo-sexto.mb-4
          h5 Figura 7. 
          | #[em Planta con retraso en crecimiento y color verde pálido (4A); hojas maduras con clorosis leve generalizada (4B).]
        img(src='@/assets/curso/tema3/16.png' alt='La figura muestra dos imágenes nombradas 4A que está a la izquierda y 4B que está a la derecha. La imagen de la izquierda muestra una planta con retraso en crecimiento y hojas pálidas. La de la derecha presenta hojas maduras con clorosis leve generalizada.')
      .col-lg-7.clp
        TabsA.color-acento-botones.mb-0(data-aos="fade-right")
          .tarjeta.color-a.p-lg-5.p-4(titulo="Causas nutricionales")
            .row.justify-content-center
              .col-lg-12
                p.mb-0 Deficiencias de fósforo, potasio o micronutrientes afectan el desarrollo radicular y reproductivo.
          .tarjeta.color-a.p-lg-5.p-4(titulo="Factores ambientales")
            .row.justify-content-center
              .col-lg-12
                p.mb-0 Bajos niveles de luz, estrés hídrico o temperaturas inadecuadas retrasan los procesos fenológicos.
          .tarjeta.color-a.p-lg-5.p-4(titulo="Causas patológicas")
            .row.justify-content-center
              .col-lg-12
                p.mb-0 Infecciones sistémicas o daño en raíces reducen la capacidad de absorción, ralentizando el crecimiento general.
        .bg13.p-3
          p.mb-0.text-white #[b Nota:] el monitoreo del desarrollo fenológico permite ajustar la fertilización, el riego y las prácticas culturales para recuperar el vigor del cultivo.


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .bg7.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              p.mb-0 En conclusión, la observación sistemática de estos indicadores de alerta temprana forma parte esencial del manejo integrado de plagas y enfermedades (MIPE). Capacitar al personal de campo para reconocerlos y registrarlos oportunamente mejora la eficiencia de las intervenciones, reduce costos de producción y minimiza el impacto ambiental.


</template>

<script>
export default {
  name: 'Tema3',
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
