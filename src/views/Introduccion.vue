<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-9.col-10.mb-lg-0.mb-4
        img(src='@/assets/curso/intro/1.png' alt='AvatarTop')
      .col-lg-7
        .row.mb-4
          .col-lg-2.d-none.d-lg-block
            img.img-t.img-a(src='@/assets/curso/intro/2.svg' alt='AvatarTop')
          .col-lg-10
            p.mb-0 La producción agrícola bajo cubierta representa una alternativa eficiente y tecnificada para garantizar el suministro constante de alimentos de alta calidad. Sin embargo, el control de las condiciones ambientales propias de estos sistemas también puede generar un entorno favorable para el desarrollo de plagas y enfermedades, lo que convierte el manejo fitosanitario en un componente esencial para la sostenibilidad y rentabilidad del cultivo.
        p.mb-0 El conocimiento de los fundamentos fitosanitarios permite identificar, prevenir y controlar oportunamente los agentes bióticos y abióticos que afectan la sanidad vegetal. Para ello, resulta indispensable comprender las características de los cultivos bajo cubierta, las condiciones microclimáticas que influyen en la aparición de patógenos, así como los principios del Manejo Integrado de Plagas y Enfermedades (MIPE), el cual integra métodos culturales, biológicos, físicos y químicos de manera sostenible. La correcta aplicación de estas estrategias contribuye a mantener la productividad y calidad del cultivo, reducir el uso indiscriminado de agroquímicos, proteger la salud del operario y conservar el equilibrio ecológico del sistema.
    
    
    .bg1.p-4.mb-5(data-aos="fade-left")
      p.mb-0 Este componente formativo brinda a los participantes las bases técnicas necesarias para implementar programas fitosanitarios efectivos, fortalecer las buenas prácticas agrícolas y promover una gestión integral y sostenible de la sanidad vegetal en sistemas de producción protegidos. Asimismo, fomenta una visión preventiva, técnica y ambientalmente responsable del manejo de cultivos bajo condiciones controladas.
    
    
    .row.justify-content-center.align-items-center(data-aos="fade-right")          
      .col-lg-12
        .video
          <iframe width="560" height="315" src="https://www.youtube.com/embed/MwtgH88JSBY?si=5n7ysmFKYRGjRQix" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        figcaption Video. Fundamentos del manejo fitosanitario en cultivos bajo cubierta


</template>

<script>
export default {
  name: 'Introduccion',
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
