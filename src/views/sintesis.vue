<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 El manejo fitosanitario en cultivos bajo cubierta es fundamental para asegurar la sanidad, productividad y sostenibilidad del sistema. Su propósito es prevenir, detectar y controlar plagas, enfermedades y desórdenes fisiológicos mediante acciones integradas que combinan prácticas culturales, biológicas y químicas responsables.
    p.mb-4 Al trabajar en ambientes controlados, los cultivos pueden beneficiarse del microclima, pero también se vuelven más susceptibles a la proliferación de patógenos. Por ello, el manejo fitosanitario requiere monitoreo constante, identificación precisa de problemas, medidas de prevención como la desinfección y el uso adecuado de insumos, además de estrategias de control que minimicen el impacto ambiental.
    p.mb-4 Este enfoque permite proteger el cultivo, optimizar recursos y fortalecer la sostenibilidad y competitividad de la producción bajo cubierta.   

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        img(src="@/assets/curso/sintesis.svg", alt="Diagrama que resume los fundamentos del manejo fitosanitario en cultivos bajo cubierta, incluyendo cultivos bajo cubierta, enfermedades, diagnóstico y monitoreo fitopatológico, y manejo integrado de plagas y enfermedades con sus componentes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
