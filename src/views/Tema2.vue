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
