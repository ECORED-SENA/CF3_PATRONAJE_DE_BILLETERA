<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Elaboración patrones billetera dama

    .row.bg-19
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-7
              p A continuación, se presenta una explicación detallada del proceso de elaboración de una maqueta para una billetera de hombre, utilizando materiales accesibles y técnicas de armado que permiten validar el diseño antes de su confección definitiva:

              .row.align-items-center.bg-18.p-4.r8
                .col-lg-5.d-lg-block.d-none
                  figure
                    img(src='@/assets/curso/tema5/img1.png', alt='', style="width: 270px").m-auto
                .col-lg-7
                  p(style="color:black")
                    b  Pódcast 

                  TarjetaAudio.color-acento-botones.mb-3.bg-15.p-3(
                    texto="Elaboración de la maqueta"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

            .col-lg-5.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema5/img2.png', alt='', style="width: 505px").m-auto


    .row.bg-9
      .col-12
        .p-4
          .row.align-items-center
            .col-lg-1.d-lg-block.d-none
              figure
                img(src="@/assets/curso/tema5/img3.svg", alt="", style="width: 85px").m-auto
            .col-lg-11
              p Esta maqueta sirve como herramienta previa al patronaje definitivo, ya que permite verificar diseño, funcionalidad y posibles mejoras antes de pasar a los materiales reales de marroquinería.
  </template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
