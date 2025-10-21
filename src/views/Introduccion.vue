<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.bg-1
      .col-12
        .p-5
          .row.align-items-center.justify-content-center
            .col-lg-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/intro/img1.png', alt='', style="width: 295px").m-auto
            .col-lg-9
              p.mb-4 El componente desarrollo de patrones digitales para billetera tiene como propósito acercar al aprendiz a la construcción de moldes mediante herramientas digitales aplicadas a la marroquinería. Este proceso integra tanto los fundamentos técnicos como los criterios estéticos, garantizando que los productos diseñados cumplan con estándares de precisión y funcionalidad. De esta manera, se fortalece la capacidad de transformar una idea en un patrón que sirva de base para la producción.

              .row.d-flex.align-items-stretch.bg-2(data-aos="fade-down")
                .col-lg.d-flex
                  .p-4.w-100.d-flex.align-items-strech.text-white
                    p.mb-0 Además, el componente promueve el aprendizaje en la interpretación de especificaciones técnicas y su adaptación a representaciones gráficas y físicas. La incorporación de #[i software] especializado facilita la creación de moldes, su despiece, referenciado e impresión, lo cual asegura uniformidad en las piezas y optimiza el tiempo de trabajo. Así, el aprendiz adquiere competencias que responden a las exigencias actuales de la industria de la moda y la manufactura de accesorios.

                .col-lg-6.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100(data-aos="zoom-in")
                    img(src='@/assets/curso/intro/img2.png', alt='', class="w-100 h-100 object-fit-cover d-block")

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.mt-4.r8.bg-3.p-3.align-items-center
              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/intro/img3.svg", alt="", style="width: 95px").m-auto
              .col-lg-10
                p Finalmente, con la elaboración de maquetas se consolida el conocimiento adquirido, ya que este ejercicio permite verificar proporciones, distribución de compartimentos y viabilidad del diseño antes de pasar a materiales definitivos. Este cierre práctico no solo refuerza la comprensión del proceso de patronaje digital, sino que también fomenta la creatividad y la capacidad crítica en la toma de decisiones, preparando al aprendiz para enfrentar proyectos de diseño con mayor seguridad y criterio técnico.

        
                  

    

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
