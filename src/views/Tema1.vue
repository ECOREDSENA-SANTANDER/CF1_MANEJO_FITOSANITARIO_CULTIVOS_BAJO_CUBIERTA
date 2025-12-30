<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cultivos bajo cubierta
      

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-4.p-lg-5.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Los cultivos bajo cubierta representan sistemas altamente productivos y tecnificados; sin embargo, su rendimiento depende de una gestión fitosanitaria integral, basada en la prevención y el monitoreo continuo. Esta gestión permite anticipar riesgos, intervenir oportunamente y mantener un equilibrio dinámico entre el ambiente controlado, el cultivo y los organismos que interactúan en el sistema, garantizando así una producción sostenible, eficiente y de alta calidad.
  
    
    .tarjeta.color-acento-botones.p-4.p-md-5.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-5.col-md-4.mb-4.mb-md-0
          img.img-t.img-a(src='@/assets/curso/tema1/2.svg' alt='AvatarTop')
        .col-md.col-lg-7
          p.mb-4.text-white Se presenta el proceso de cultivo de tomate bajo cubierta, incluyendo los cuidados esenciales y los aspectos más relevantes que deben considerarse para un manejo adecuado. Para complementar esta información, se invita a consultar el siguiente video de apoyo, el cual refuerza el tema tratado y facilita la comprensión del contenido.
          a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=Eu5rJpZSDwg" target="_blank")
            span Ir al sitio
            i.fas.fa-circle-play


    p.mb-5(data-aos="fade-right") Los cultivos bajo cubierta son sistemas agrícolas intensivos diseñados para optimizar las condiciones ambientales y maximizar la producción de especies vegetales de alto valor comercial. Estas estructuras, como invernaderos, túneles, casas sombra y casas malla, permiten controlar variables fundamentales como la temperatura, la humedad relativa, la luminosidad, la ventilación, la concentración de CO₂ y el suministro de agua y nutrientes. Este manejo integrado se traduce en un ambiente más estable y productivo que el cultivo a cielo abierto.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 1. 
          | #[em Cultivo bajo cubierta]
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-6.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/3.png' alt='Invernadero tipo túnel con filas de flores  cultivadas en el interior.')
          .col-lg-6
            .cajon-b.color-primario.p-3
              p.mb-0 Estos sistemas se emplean principalmente para el cultivo de hortalizas (tomate, pimiento, pepino, lechuga), flores ornamentales (rosas, claveles, crisantemos), plantas medicinales y aromáticas (menta, albahaca, romero), entre otros productos de ciclo corto y alta rentabilidad.
            

    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Características
    

    p.mb-5(data-aos="fade-left") Los cultivos bajo cubierta presentan una serie de características que los convierten en una alternativa altamente eficiente y sostenible dentro de la agricultura moderna. Gracias al control parcial o total de las condiciones ambientales, estos sistemas permiten optimizar el crecimiento vegetal, mejorar la calidad del producto y garantizar una producción estable a lo largo del año. Estas condiciones controladas dan lugar a múltiples ventajas productivas, entre las que se destacan la posibilidad de cultivar todo el año y obtener mayores rendimientos y uniformidad en la producción.

     
    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg2.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/4.svg')
          h3.mb-4.text-center.text-white Producción continúa durante todo el año, independiente del clima
          p.mb-0.text-white Una de las principales ventajas de este sistema es la posibilidad de producir de manera continua durante todo el año. Las estructuras protegidas, como invernaderos, túneles o casas malla, aíslan el cultivo de las variaciones climáticas externas, facilitando el mantenimiento de condiciones adecuadas de temperatura, humedad y radiación. Esto permite cultivar en cualquier estación y reduce la dependencia de los ciclos naturales.
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg3.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/5.svg')
          h3.mb-4.text-center.text-white Mayor rendimiento por superficie y uniformidad del producto
          p.mb-0.text-white Los cultivos bajo cubierta también ofrecen un mayor rendimiento por unidad de superficie y una mayor uniformidad del producto. El ambiente controlado favorece un desarrollo vegetal homogéneo y una mejor calidad comercial. En consecuencia, se incrementa la eficiencia del espacio productivo y se mejora la competitividad frente a mercados que exigen altos estándares de calidad.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 2. 
          | #[em Uniformidad del producto]
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-6.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/6.png' alt='Cultivo de tomate en sistema bajo túnel, con hileras elevadas y un trabajador supervisando el desarrollo de los frutos.')
          .col-lg-6
            .tarjeta-avatar-b.mb-0
              .tarjeta-avatar-b__img
                img.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/7.svg' alt='')
              .tarjeta.bg4
                .p-4
                  p.mb-0.mt-0.mb-lg-3.mt-lg-3 La producción agrícola bajo sistemas protegidos ofrece múltiples beneficios orientados a mejorar la calidad, continuidad y eficiencia del cultivo. Estas estructuras permiten controlar las condiciones ambientales, optimizar el uso de los recursos y garantizar una mayor estabilidad en la producción. A continuación, se presentan algunas de las ventajas más relevantes que fortalecen la uniformidad del producto y la sostenibilidad del proceso agrícola.
        
    
    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Uniformidad del producto

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/8.png')
      .col-lg-9
        SlyderF(columnas="col-xl-12")
          .tarjeta.tarjeta--slyder.b1.p-4.p-lg-5
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/9.svg' alt='AvatarTop')
            .bg5.ps-3.pe-3.p-1.mb-4
              h4.text-center.mb-0 Reducción de pérdidas por lluvias, vientos o heladas 
            p.mb-0.text-center Una ventaja significativa de los cultivos bajo cubierta es la disminución de pérdidas ocasionadas por factores climáticos adversos, como lluvias intensas, vientos fuertes, granizadas o heladas. Estos fenómenos pueden afectar considerablemente los cultivos a cielo abierto. En contraste, el sistema protegido permite mitigar estos riesgos y asegurar la continuidad del ciclo productivo, al mantener el cultivo resguardado frente a eventos extremos.
          .tarjeta.tarjeta--slyder.b1.p-4.p-lg-5
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/10.svg' alt='AvatarTop')
            .bg5.ps-3.pe-3.p-1.mb-4
              h4.text-center.mb-0 Posibilidad de producir fuera de temporada, accediendo a mejores precios de mercado
            p.mb-0.text-center Otra fortaleza importante es la capacidad de producir fuera de temporada. Gracias al control ambiental, es posible sembrar y cosechar en épocas en las que otros productores no pueden hacerlo, lo que genera acceso a mejores precios y una mayor rentabilidad comercial. Este factor convierte al cultivo bajo cubierta en una estrategia competitiva dentro del mercado agrícola.
          .tarjeta.tarjeta--slyder.b1.p-4.p-lg-5
            .row.justify-content-center.align-items-center.mb-4
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/11.svg' alt='AvatarTop')
            .bg5.ps-3.pe-3.p-1.mb-4
              h4.text-center.mb-0 Uso más eficiente del agua y los insumos gracias al riego por goteo y fertirriego 
            p.mb-0.text-center Los sistemas protegidos fomentan un uso más eficiente del agua y los insumos agrícolas mediante tecnologías como el riego por goteo y el fertirriego. Estas técnicas permiten suministrar agua y nutrientes de manera precisa y localizada, mejorando la absorción por parte de las plantas. Al mismo tiempo, reducen pérdidas por evaporación o lixiviación, favoreciendo la sostenibilidad ambiental y la disminución de costos operativos.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 3. 
          | #[em Sistema de riego]
        img(src='@/assets/curso/tema1/12.png' alt='Sistema de riego por goteo aplicando agua directamente a plantas jóvenes en el cultivo.')

    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Desafíos de los cultivos bajo cubierta


    p.mb-5(data-aos="fade-right") A pesar de las múltiples ventajas que ofrecen los cultivos bajo cubierta, este sistema de producción también enfrenta diversos desafíos técnicos, económicos y de gestión. Estos aspectos deben abordarse de manera integral para asegurar la sostenibilidad, estabilidad y eficiencia del proceso productivo.


    .tarjetaf.p-4.p-lg-5.mb-0(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-lg-5.mb-4 Acumulación de calor, humedad y CO₂, condiciones que favorecen la presencia de patógenos: 
            p.mb-0 Uno de los principales desafíos es el manejo adecuado del microclima interno. Los ambientes cerrados o semicerrados tienden a acumular calor, humedad y dióxido de carbono (CO₂). Si estas variables no se regulan correctamente, pueden generar condiciones favorables para la aparición y proliferación de hongos, bacterias, virus e insectos. La ventilación insuficiente o la falta de un control ambiental efectivo puede ocasionar desequilibrios fitosanitarios que afectan la calidad y el rendimiento del cultivo.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema1/13.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-lg-5.mb-4 Requieren manejo técnico constante (ventilación, limpieza y monitoreo): 
            p.mb-0 Los cultivos bajo cubierta demandan un manejo técnico especializado y permanente. Es indispensable realizar seguimiento continuo a variables como temperatura, humedad relativa, radiación solar y concentración de CO₂. Asimismo, se requiere mantener rutinas estrictas de limpieza y desinfección de estructuras, herramientas y sustratos. El manejo del clima interno mediante ventilación natural o mecánica, extractores, cortinas térmicas o sistemas automatizados, se convierte en un componente esencial para garantizar condiciones óptimas de desarrollo.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema1/14.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-lg-5.mb-4 Mayor inversión inicial y costos energéticos elevados: 
            p.mb-0 La implementación de sistemas bajo cubierta exige una inversión inicial considerable. Esto incluye la construcción de estructuras (invernaderos o túneles), sistemas de riego presurizado, equipos de calefacción o enfriamiento, sensores y herramientas de monitoreo. A estos costos se suman los gastos energéticos derivados del funcionamiento de bombas, ventiladores, iluminación artificial o sistemas automatizados, los cuales representan una parte importante del costo operativo, especialmente en climas extremos.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema1/15.png")
        .row.justify-content-center.align-items-top
          .col-lg-6.mb-lg-0.mb-4
            h4.mb-lg-5.mb-4 Necesidad de capacitación permanente del personal en bioseguridad y sanidad vegetal: 
            p.mb-0 La capacitación continua del personal es fundamental para garantizar un manejo adecuado del cultivo. El trabajo en ambientes protegidos requiere conocimientos especializados en bioseguridad, control integrado de plagas, monitoreo ambiental y manejo responsable de insumos. La ausencia de formación puede generar errores en la aplicación de productos, fallas en la detección temprana de problemas o prácticas inadecuadas de higiene y sanidad vegetal. Por ello, es esencial fortalecer las competencias del equipo operativo y técnico mediante procesos de formación continua.
          .col-lg-5.col-md-8
            img.mb-0(alt="" src="@/assets/curso/tema1/16.png")


</template>

<script>
export default {
  name: 'Tema1',
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
