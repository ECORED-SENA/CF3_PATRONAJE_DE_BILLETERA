<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Elaboración patrones billetera dama

    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-center.bg-3.gx-3
          
          .col-lg.d-flex
            .p-5.w-100.align-items-center
              p Para el desarrollo de estos patrones, se empleará el esquema básico de la billetera y se seguirá el mismo procedimiento utilizado en la billetera de hombre.

          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/img1.png', alt='', class="w-100 h-100 object-fit-cover")

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Molde patrón

    .row.align-items-center
      .col-lg-10
        p Esta billetera está compuesta por dos cuerpos, una tapa con división o tarjetero vertical, una división para billetes y ocho tarjeteros, tal como se muestra en el esquema con las medidas de cada parte.

      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema4/img2.svg", alt="", style="width: 190px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 70.
      span  Esquema molde patrón.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema4/img3.svg', alt='Esquema general del molde patrón de la billetera de dama. Incluye cuerpos, tapa con tarjetero vertical, división para billetes y ocho tarjeteros distribuidos.  ', style="width: 1043px").m-auto

    .row.bg-9.mt-4
      .col-12
        .p-4
          .row.align-items-center
            .col-lg-1.d-lg-block.d-none
              figure
                img(src="@/assets/curso/tema4/img4.svg", alt="", style="width: 85px").m-auto
            .col-lg-11
              p Nota. Los moldes para este producto se elaboran siguiendo el mismo procedimiento y parámetros que en la billetera de hombre.


    .row.bg-16
      .col-12
        .p-5
          separador
          #t_4_2.titulo-segundo.color-acento-contenido
            h2 4.2 Despiece de moldes

          p El proceso de despiece para la billetera de dama aplica los mismos criterios y medidas de la billetera de hombre, garantizando uniformidad y precisión.

          .row.mt-4
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema4/img5.svg' style="width:105px").m-auto

                h4.text-center Correspondencia de piezas
                p.text-small.text-center Replicar vistas, bolsillos, división, centro y espaldar según el patrón base.

            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema4/img6.svg' style="width:105px").m-auto

                h4.text-center Aumentos
                p.text-small.text-center Mantener incrementos para doblez y refilado (según cada pieza).

            .col-sm-6.col-lg-3.mb-4.mb-sm-0
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema4/img7.svg' style="width:105px").m-auto

                h4.text-center Referenciado
                p.text-small.text-center Usar los mismos campos: referencia, nombre, material, cantidad y dimensiones.

            .col-sm-6.col-lg-3
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema4/img8.svg' style="width:105px").m-auto

                h4.text-center Escala
                p.text-small.text-center Verificar 1:1 en impresión para exactitud de corte. 


</template>

<script>
export default {
  name: 'Tema4',
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
