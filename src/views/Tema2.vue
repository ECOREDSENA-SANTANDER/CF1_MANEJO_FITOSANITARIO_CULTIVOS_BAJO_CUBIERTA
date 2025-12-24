<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Enfermedades del cultivo


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los cultivos bajo cubierta se desarrollan en un entorno con características microclimáticas particulares, como niveles elevados de humedad relativa, temperaturas más estables y una ventilación limitada. Estas condiciones, aunque beneficiosas para el crecimiento vegetal, también crean un ambiente favorable para la aparición y propagación de diversas enfermedades de origen fúngico, bacteriano y viral. Además, la densidad de siembra y la proximidad entre plantas en estos sistemas puede acelerar la transmisión de patógenos, incrementando el riesgo de pérdidas productivas.


    p.mb-5 Por ello, el manejo fitosanitario en sistemas protegidos exige estrategias preventivas rigurosas, monitoreo constante, prácticas de higiene adecuadas y la aplicación de métodos de control integrados. Comprender las enfermedades más frecuentes y sus mecanismos de propagación es fundamental para garantizar la salud del cultivo y mantener la eficiencia del sistema productivo.    


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Enfermedades fúngicas (hongos)


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema2/2.png' alt='AvatarTop')
      .col-lg-7
        .row.mb-4
          .col-lg-2.d-none.d-lg-block
            img.img-t.img-a(src='@/assets/curso/tema2/3.svg' alt='AvatarTop')
          .col-lg-10
            p.mb-0 Las enfermedades fúngicas son algunas de las más frecuentes en los cultivos establecidos en ambientes protegidos. Estas se desarrollan con rapidez cuando existe alta humedad, condensación y una ventilación insuficiente. Se caracterizan por la producción de esporas que se dispersan con facilidad a través del aire, el agua, el contacto entre plantas o el uso inadecuado de herramientas. 
        p.mb-0 Estos patógenos pueden afectar diferentes partes de la planta, como hojas, tallos, frutos y raíces, ocasionando pérdidas importantes en la producción si no se controlan oportunamente.

    
    TabsC.color-primario.mb-5(data-aos="fade-left")
      .py-3.py-md-4.bg6.px-3(titulo="a)	Principales enfermedades")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-center.p-lg-4.p-3
              .col-lg-3.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img.mb-0(src='@/assets/curso/tema2/4.png', alt='')
              .col-lg-8.order-lg-2.order-md-1.order-1
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 #[b Mildiu (#[em Peronospora spp, Plasmopara viticola]):] enfermedad que produce manchas amarillas y moho blanquecino en las hojas, favorecida por alta humedad.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 #[b Oídio (#[em Erysiphe, Leveillula]):] hongo que genera un polvo blanco sobre hojas y tallos, afectando la fotosíntesis y debilitando la planta.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 #[b #[em Botrytis cinerea] (moho gris):] causa pudriciones blandas cubiertas por un moho gris, especialmente en climas húmedos y con poca ventilación.
                  li.d-flex.mb-0
                    i.fas.fa-leaf
                    p.mb-0 #[b Patógenos de raíz (#[em Fusarium, Rhizoctonia, Pythium]):] hongos que pudren raíces y cuello de la planta, provocando marchitez y debilitamiento general.
      .py-3.py-md-4.bg6.px-3(titulo="b)	Causas")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-center.p-lg-4.p-3
              .col-lg-3.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img.mb-0(src='@/assets/curso/tema2/5.png', alt='')
              .col-lg-8.order-lg-2.order-md-1.order-1
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Humedad relativa superior al 80 – 90 %.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Exceso de riego o riego por aspersión que favorece el mojado del follaje.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Ventilación deficiente que incrementa la condensación.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Alta densidad de siembra que limita el flujo de aire entre las plantas.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Uso de sustratos contaminados con hongos o mal desinfectados.
                  li.d-flex.mb-0
                    i.fas.fa-leaf
                    p.mb-0 Presencia de heridas o estrés en las plantas, lo que aumenta su susceptibilidad a infecciones.


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Enfermedades bacterianas


    p.mb-5 Estas enfermedades se caracterizan por requerir agua libre o periodos prolongados de humedad para poder infectar las plantas. Los patógenos ingresan a través de las estomas, heridas, daños mecánicos o tejidos debilitados, generando síntomas como manchas, tizones, pudriciones y, en algunos casos, malos olores. Además, su propagación es rápida, especialmente cuando hay salpicaduras de agua o se realiza un manejo inadecuado del cultivo.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.offset-lg-2
        .row.justify-content-center.align-items-end
          .col-lg-9(data-aos="fade-right").ps-lg-0
            .crd.crd--avatarHorizontal.crd--first.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/tema2/6.svg", alt="alt")
                .col
                  h4.mb-3 a)	Rincipales enfermedades
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Tizones bacterianos:] causados por bacterias que producen manchas oscuras y acuosas en hojas y tallos, expandiéndose rápidamente en condiciones de alta humedad.
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Pudriciones blandas:] enfermedades bacterianas que generan tejidos blandos, acuosos y con mal olor, afectando principalmente tallos, frutos y raíces.
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Mancha bacteriana:] provoca pequeñas manchas circulares en hojas, tallos y frutos; se oscurecen con el tiempo y reducen la calidad del cultivo.
        
            .crd.crd--avatarHorizontal.crd--last.py-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src="@/assets/curso/tema2/7.svg", alt="alt")
                .col
                  h4.mb-3 b)	Causas
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 Condensación y presencia de hojas húmedas durante varias horas.
                  .row.justify-content-center.align-items-center.mb-0.mt-0
                    .col-lg-8
                      ul.lista-ul.mb-0
                        li.d-flex.mb-0
                          i.fas.fa-leaf
                          p.mb-0 Uso de herramientas sin desinfección.
                        li.d-flex.mb-0
                          i.fas.fa-leaf
                          p.mb-0 Agua de riego contaminada.
                        li.d-flex.mb-0
                          i.fas.fa-leaf
                          p.mb-0 Heridas provocadas por poda, viento o insectos.
                        li.d-flex.mb-0
                          i.fas.fa-leaf
                          p.mb-0 Combinación de temperaturas cálidas con humedad elevada.
                        li.d-flex.mb-0
                          i.fas.fa-leaf
                          p.mb-0 Uso de plantas madres o semillas infectadas.
                    .col-lg-4.d-none.d-lg-block
                      img(src="@/assets/curso/tema2/8.svg", alt="alt")
          .col-lg-4.sob1.d-none.d-lg-block(data-aos="fade-left")
            img.img-t(src="@/assets/curso/tema2/9.svg", alt="alt")

    
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Enfermedades virales


    p.mb-5 Las enfermedades virales no tienen cura, por lo que su manejo se basa únicamente en la prevención. Estos virus pueden causar mosaicos en las hojas, deformaciones, retraso en el crecimiento y una notable disminución en la producción. Su diseminación ocurre principalmente a través de insectos vectores; una vez entran al invernadero, pueden propagarse con rapidez entre las plantas si no se controlan adecuadamente.

    
    TabsB.color-acento-contenido.mb-5(data-aos="fade-left")
      .py-4.py-md-5.bg6(titulo="a)	Principales enfermedades" :icono="require('@/assets/curso/tema2/12.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-center.p-lg-4.p-3
              .col-lg-3.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img.mb-0(src='@/assets/curso/tema2/10.png', alt='')
              .col-lg-8.order-lg-2.order-md-1.order-1
                h4.mb-4 a)	Principales enfermedades
                p.mb-3 #[b ToMV (virus del mosaico del tomate):] causa manchas en forma de mosaico en las hojas, deformaciones y reducción del crecimiento. Se transmite por herramientas contaminadas y por contacto entre plantas.
                p.mb-3 #[b TYLCV (virus del rizado amarillo del tomate):] produce amarillamiento, rizado de hojas y detención del crecimiento. Su principal transmisor es la mosca blanca, que lo disemina rápidamente dentro del invernadero.
                p.mb-0 #[b CMV (virus del mosaico del pepino):] genera manchas en mosaico, deformación de hojas y frutos pequeños. Se transmite por pulgones y por plantas o semillas infectadas.
      .py-4.py-md-5.bg6(titulo="Características" :icono="require('@/assets/curso/tema2/13.svg')")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-center.p-lg-4.p-3
              .col-lg-3.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img.mb-0(src='@/assets/curso/tema2/11.png', alt='')
              .col-lg-8.order-lg-2.order-md-1.order-1
                h4.mb-4 b)	Causas
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Presencia de insectos vectores como mosca blanca, pulgones y trips.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Uso de herramientas contaminadas, especialmente en el caso de ToMV.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Plantines o semillas infectadas desde el inicio.
                  li.d-flex.mb-2
                    i.fas.fa-leaf
                    p.mb-0 Higiene deficiente del personal durante las labores de manejo.
                  li.d-flex.mb-0
                    i.fas.fa-leaf
                    p.mb-0 Contaminación cruzada por contacto entre plantas o por manipulación inadecuada.


    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Nematodos fitoparásitos

    
    p.mb-5 Los nematodos fitoparásitos son organismos microscópicos que viven en el suelo o en el sustrato y atacan las raíces de las plantas. Al alimentarse, provocan la formación de agallas, reducción del crecimiento, marchitez y una menor capacidad de la planta para absorber agua y nutrientes. En los cultivos bajo cubierta, estos organismos pueden mantenerse por largos periodos si el sustrato no se desinfecta adecuadamente.

    
    .row.justify-content-center.align-items-stretch.mb-0(data-aos="fade-right")
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg2.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/14.svg')
          h3.mb-4.text-center.text-white a)	Principal enfermedad
          h5.mb-4.text-white #[em Meloidogyne] spp. (nematodo formador de agallas): 
          p.mb-0.text-white Es un nematodo microscópico que invade las raíces y forma agallas o “bolas” que impiden la absorción de agua y nutrientes. Esto provoca plantas débiles, menor crecimiento y baja producción. Se dispersa por sustratos contaminados, herramientas sucias y falta de desinfección.
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg3.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/15.svg')
          h3.mb-4.text-center.text-white b)	Causas
          ul.lista-ul.mb-0
            li.d-flex.mb-1
              i.fas.fa-angle-right
              p.mb-0.text-white Uso de sustratos o suelos contaminados.
            li.d-flex.mb-1
              i.fas.fa-angle-right
              p.mb-0.text-white Herramientas, zapatos o maquinaria que transportan restos de suelo infectado.
            li.d-flex.mb-1
              i.fas.fa-angle-right
              p.mb-0.text-white Repetición de plantas hospedantes por falta de rotación del cultivo.
            li.d-flex.mb-1
              i.fas.fa-angle-right
              p.mb-0.text-white Temperaturas cálidas y humedad constante en el sustrato.
            li.d-flex.mb-0
              i.fas.fa-angle-right
              p.mb-0.text-white Ausencia de medidas de desinfección, solarización o limpieza preventiva.




</template>

<script>
export default {
  name: 'Tema2',
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
