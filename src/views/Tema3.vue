<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Elaboración patrones para billetera hombre

    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-center.bg-2.gx-3
          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/img1.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px" )
          .col-lg.d-flex
            .p-5.w-100.align-items-center
              p.text-white La billetera para elaborar cuenta con dos cuerpos, cada uno de los cuales cuenta con tres divisiones para tarjetero y dos compartimientos para billetes.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Construcción patrón

    .row.align-items-center
      .col-lg-8
        p Para iniciar el ejercicio, se debe activar la capa azul como capa de trabajo y dibujar un rectángulo base con dimensiones de 220 mm de largo por 80 mm de alto. A cada capa es posible asignarle un nombre específico para facilitar la organización del proyecto. En este caso, la capa se denominará “Línea cuerpo”.

        .row.bg-4.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img2.png', alt='', style="width: 164px").m-auto
          .col-lg-9
            .row.bg-5.r8
              p
               b Para renombrarla en el programa:
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Haga doble clic izquierdo sobre el nombre de la capa en el panel.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Una vez activado el campo de edición, escriba la nueva denominación.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Confirme el cambio presionando Enter.
                

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img3.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 37.
      span Trazado de líneas para tarjeteros de la billetera.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img4.svg', alt='Líneas paralelas desfasadas a 12 mm en la parte superior de la billetera. Estas guías delimitan los espacios de los tarjeteros internos. ', style="width: 1043px").m-auto

    .row.bg-9.mt-4
      .col-12
        .p-4
          .row.align-items-center
            .col-lg-1.d-lg-block.d-none
              figure
                img(src="@/assets/curso/tema3/img5.svg", alt="", style="width: 85px").m-auto
            .col-lg-11
              p Posteriormente, aplique el comando Descomponer al rectángulo con el fin de convertirlo en curvas independientes.

    .titulo-tres.mt-4.text-white: h3 Creación de guías de vistas    

    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-center.bg-15.gx-3
          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/img6.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px" )
          .col-lg.d-flex
            .p-5.w-100.align-items-center
              p Sobre la curva horizontal superior, trabajando en la capa roja (denominada “Líneas de vistas”), se aplica el comando Desfasar para generar tres curvas paralelas hacia abajo, cada una separada 12 mm respecto a la anterior. Estas líneas funcionan como guías de referencia, marcando el inicio de las diferentes vistas del tarjetero.

    .titulo-tres2.mt-2: h3 Definición del centro de la billetera

    .row.align-items-center
      .col-lg-10
        p Para continuar, se aplica nuevamente el comando Desfasar sobre las líneas verticales, generando hacia el interior una curva a 100 mm de distancia. Luego, con el comando Recortar, elimine los segmentos centrales sobrantes con el fin de definir el espacio correspondiente a los tarjeteros. A partir de esta construcción también se obtiene el centro de la billetera.
      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img7.svg", alt="", style="width: 190px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 38.
      span Trazado del centro de la billetera.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img8.svg', alt='Centro de la billetera definido a partir de líneas verticales desplazadas 100 mm hacia el interior. Se eliminan segmentos para dejar el espacio central entre los dos cuerpos.', style="width: 1043px").m-auto

    .titulo-tres2.mt-4: h3 Construcción de vista superior para tarjetero

    .row.align-items-center
      .col-lg-8
        p Para continuar con la construcción del patrón, se elaboran las diferentes vistas del tarjetero, comenzando por la vista superior. En este paso se aplica el comando Desfasar desde la primera línea roja, generando una curva 10 mm hacia abajo. Con esta referencia se trazan las líneas de construcción de la diagonal, con inclinaciones entre 4 mm y 6 mm, trabajando en la capa negra denominada Líneas de construcción. Para el dibujo de la vista, se recomienda emplear la capa verde (Vista superior), lo que permite diferenciarla de las líneas auxiliares y evitar confusiones. Finalmente:

        .row.bg-6.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img9.png', alt='', style="width: 164px").m-auto
          .col-lg-9
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Refleje la diagonal tomando como punto de referencia el punto medio de la línea roja.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Utilice el comando Recortar para eliminar los segmentos sobrantes y depurar la geometría.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img10.png', alt='', style="width: 400px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 39.
      span Construcción de la vista superior del tarjetero.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img11.svg', alt='Construcción de la vista superior de un tarjetero. Se incluye una curva desfasada a 10 mm y diagonales inclinadas entre 4 y 6 mm para formar la caja. ', style="width: 1043px").m-auto

    
    .row.bg-16
      .col-12
        .p-5
          .titulo-tres2.mt-2: h3 Construcción de la segunda vista o tarjetero dos

          .row.align-items-center
            .col-lg-10
              p Para construir la segunda vista, también denominada tarjetero intermedio, se recomienda trabajar en una nueva capa morada (Vista intermedia) para diferenciarla claramente de las demás. Esta vista se construye en el cuerpo opuesto a la vista anterior, incorporando un aumento de 7 mm para el doblez y una prolongación de 10 mm que se inserta en la vista inferior, ambas con sus respectivas diagonales. Con el fin de dar forma definitiva al molde, se aplican desplazamientos controlados sobre las curvas rojas, seguidos de un proceso de reflejo y limpieza, lo que asegura precisión y simetría en la pieza final.
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/img12.svg", alt="", style="width: 190px").m-auto

          .row.mt-4
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema3/img13.svg' style="width:105px").m-auto

                h4.text-center Desde la primera curva roja
                p.text-small.text-center Desfase una curva a 7 mm hacia arriba, asignándole una inclinación de 0 a 4 mm.

            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema3/img14.svg' style="width:105px").m-auto

                h4.text-center Desde la segunda curva roja
                p.text-small.text-center Desfase una curva a 10 mm hacia abajo, con una inclinación de 4 a 6 mm.

            .col-sm-6.col-lg-3.mb-4.mb-sm-0
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema3/img15.svg' style="width:105px").m-auto

                h4.text-center Reflejo
                p.text-small.text-center Tome como referencia el punto medio de la curva roja.

            .col-sm-6.col-lg-3
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema3/img16.svg' style="width:105px").m-auto

                h4.text-center Limpieza final
                p.text-small.text-center Utilice el comando Recortar para eliminar segmentos sobrantes y obtener la geometría limpia.   

          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5 Figura 40.
            span Construcción de la segunda vista o tarjetero intermedio.

          .row.bg-7.justify-content-center.align-items-center.p-4
            .col-lg-10
              figure
                img(src='@/assets/curso/tema3/img17.svg', alt=' Segunda vista o tarjetero intermedio de la billetera. Incluye aumentos de 7 mm y prolongaciones de 10 mm para permitir el encaje y el doblado en la estructura. ', style="width: 1043px").m-auto


    .titulo-tres2.mt-4: h3 Aumento de contorno

    .row.align-items-center
      .col-lg-8
        p Para elaborar el bolsillo, trabaje en la capa naranja (Bolsillo tarjetero) y ubique el cuerpo correspondiente a la primera vista.

        .row.bg-4.r8.align-items-center.justify-content-center.p-3
          .col-lg-12
            .row.bg-5.r8
              ol.lista-ol--cuadro.mt-4
                li.d-flex.align-items-start.mb-2
                  span.vineta-letra a
                  p.mb-0 Sobre la tercera curva roja, aplique Desfasar generando una curva a 7 mm hacia arriba.


                li.d-flex.align-items-start.mb-2
                  span.vineta-letra b
                  p.mb-0 A partir de esta referencia, trace una diagonal con inclinación de 0 a 4 mm (utilice las líneas de construcción previamente creadas).

                li.d-flex.align-items-start.mb-2
                  span.vineta-letra c
                  p.mb-0 Refleje la diagonal tomando como referencia el punto medio correspondiente.

                li.d-flex.align-items-start.mb-2
                  span.vineta-letra d
                  p.mb-0 Finalmente, use el comando Recortar para limpiar la geometría.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img18.png', alt='', style="width: 400px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 41.
      span Construcción del bolsillo tarjetero.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img19.svg', alt='Construcción del bolsillo tarjetero. La figura presenta una curva desplazada a 7 mm y una diagonal con inclinación entre 0 y 4 mm reflejada en el eje central. ', style="width: 1043px").m-auto     


    .titulo-tres2.mt-4: h3 Aumento de contorno

    .row.align-items-center
      .col-lg-8
        p Para finalizar la construcción de las vistas, aplique un aumento de 2 mm en el contorno de los dos cuerpos, lo que permitirá refilar las piezas durante el armado, garantizando un acabado uniforme y preciso.

        p El procedimiento es:

        .row.bg-15.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img20.png', alt='', style="width: 164px").m-auto
          .col-lg-9
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Active la capa magenta (Aumentos refilado).

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Utilice el comando Desfasar sobre los contornos de ambos cuerpos con una distancia de 2 mm.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Demarque cada vista con su color correspondiente (verde, roja, naranja, etc.) para mantener una identificación clara.


      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img21.png', alt='', style="width: 400px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 42.
      span Delimitación final de las vistas.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img22.svg', alt='Delimitación final de las vistas del tarjetero en los cuerpos de la billetera. Se destacan los aumentos de 2 mm para refilado en contornos. ', style="width: 1043px").m-auto

    .row.bg-16
      .col-12
        .p-5
          .titulo-tres2.mt-2: h3 Construcción del bolsillo o tercer tarjetero

          p El centro de la billetera es la pieza estructural que separa y articula los dos cuerpos principales, funcionando como eje de simetría y punto de doblez. Cumple funciones:

          .row.mt-4
            .col-lg-4
              .row.align-items-center.bg-13.r8.p-3.g-3.h-100
                .col-lg-3.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema3/img23.svg", alt="", style="width: 85px").m-auto
                .col-lg-9
                  p #[b Estética] 
                  p Organiza y armoniza el diseño.

            .col-lg-4
              .row.align-items-center.bg-13.r8.p-3.g-3.h-100
                .col-lg-3.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema3/img24.svg", alt="", style="width: 85px").m-auto
                .col-lg-9
                  p #[b Funcional] 
                  p Facilita el acceso a los bolsillos internos.

            .col-lg-4
              .row.align-items-center.bg-13.r8.p-3.g-3.h-100
                .col-lg-3.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema3/img25.svg", alt="", style="width: 85px").m-auto
                .col-lg-9
                  p #[b Estructural] 
                  p Soporta el pliegue repetitivo al abrir y cerrar, reforzando la durabilidad.

          .row.align-items-center
            .col-lg-8
              p El procedimiento es:

              .row.bg-6.r8.align-items-center.justify-content-center.p-3
                .col-lg-3.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/tema3/img26.png', alt='', style="width: 164px").m-auto
                .col-lg-9
                  .row.bg-5.r8
                    ul.lista-ul--color.mt-2
                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0  Cree una capa nueva (Centro) con un color verde distinto al de la vista superior.

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Desactive las capas innecesarias para mayor visibilidad (apague las luces en el panel de capas).

                      li.d-flex.align-items-start
                        span.icono-img
                        p.mb-0 Aplique Desfasar generando curvas a 10 mm de cada lado del eje central.


            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/img27.png', alt='', style="width: 400px").m-auto
          

          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5 Figura 43.
            span Desfase para el centro. 

          .row.bg-7.justify-content-center.align-items-center.p-4
            .col-lg-10
              figure
                img(src='@/assets/curso/tema3/img28.svg', alt='Desfase de líneas en el centro de la billetera, generando curvas a 10 mm a cada lado del eje central. Esto define la pieza que articula los dos cuerpos principales. ', style="width: 1043px").m-auto


    .row.bg-17.r8.align-items-center.justify-content-center.p-3
      .col-lg-2.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img29.svg', alt='', style="width: 164px").m-auto
      .col-lg-10
        .row.bg-5.r8
          ul.lista-ul--color.mt-2
            li.d-flex.align-items-start
              span.icono-img
              p.mb-0 En la parte inferior, desfase una curva a 7 mm hacia arriba.

            li.d-flex.align-items-start
              span.icono-img
              p.mb-0 Trace cajas de construcción de 4 a 6 mm, que guiarán los detalles de esta sección.    


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 44.
      span Construcción de cajas en el centro.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img30.svg', alt='Construcción de cajas en la parte inferior del centro de la billetera. Las líneas diagonales inclinadas entre 4 y 6 mm delimitan detalles técnicos de la pieza central. ', style="width: 1043px").m-auto


    .row.bg-15.r8.align-items-center.justify-content-center.p-3.mt-4
      .col-lg-2.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img31.svg', alt='', style="width: 164px").m-auto
      .col-lg-10
        .row.bg-5.r8
          ul.lista-ul--color.mt-2
            li.d-flex.align-items-start
              span.icono-img
              p.mb-0 Recorte los segmentos sobrantes y delimite el contorno del molde central, añadiendo un aumento de 2 mm en la parte superior e inferior para refilado. 

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 45.
      span Patrón del centro.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img32.svg', alt='Patrón final del centro de la billetera. Incluye los aumentos de 2 mm en contornos superior e inferior, necesarios para el refilado. ', style="width: 1043px").m-auto


    .row.bg-16
      .col-12
        .p-5
          .titulo-tres2.mt-2: h3 Construcción del bolsillo o tercer tarjetero

          p El centro de la billetera es la pieza estructural que separa y articula los dos cuerpos principales, funcionando como eje de simetría y punto de doblez. Cumple funciones:

          .row.mt-4
            .col-lg-6
              .row.align-items-center.bg-13.r8.p-3.g-3.h-100
                .col-lg-3.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema3/img33.svg", alt="", style="width: 85px").m-auto
                .col-lg-9
                  p #[b 01] 
                  p Cree una capa nueva color cian denominada “División”.

            .col-lg-6
              .row.align-items-center.bg-13.r8.p-3.g-3.h-100
                .col-lg-3.d-lg-block.d-none
                  figure
                    img(src="@/assets/curso/tema3/img34.svg", alt="", style="width: 85px").m-auto
                .col-lg-9
                  p #[b 02] 
                  p Aumente 2 mm en la parte superior y laterales del cuerpo principal.

          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5 Figura 46.
            span Construcción bolsillo división. 

          .row.bg-7.justify-content-center.align-items-center.p-4
            .col-lg-10
              figure
                img(src='@/assets/curso/tema3/img35.svg', alt='Construcción de bolsillo para la división interna de la billetera. Se aprecian líneas desplazadas y aumentos laterales de 2 mm para ajuste en la pieza. ', style="width: 1043px").m-auto


    .row.align-items-center
      .col-lg-8
        p Esta parte se compone de dos piezas:

        .row.bg-4.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img36.png', alt='', style="width: 164px").m-auto
          .col-lg-9
            .row.bg-5.r8
              p Esta parte se compone de dos piezas:

              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Una en forro, basada en el rectángulo dibujado.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Otra en cuero, que se construye así:

                    ul.lista-ul--color
                      li.d-flex.align-items-start
                        span.icono-img2
                        p.mb-0 Cree una capa llamada “Vista división” (color rosa).

                      li.d-flex.align-items-start
                        span.icono-img2
                        p.mb-0 Desplace 7 mm hacia arriba la línea horizontal del rectángulo.

                      li.d-flex.align-items-start
                        span.icono-img2
                        p.mb-0 Realice dos desplazamientos hacia abajo: uno de 10 mm desde la línea original y otro de 10 mm más desde la anterior.



      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img37.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 47.
      span Construcción de la división.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img38.svg', alt=' Patrón de la división en cuero, con líneas desfasadas hacia arriba y hacia abajo. Permite formar la pieza que divide los compartimientos. ', style="width: 1043px").m-auto


    .row.align-items-center
      .col-lg-8
        p Para construir las cajas de la división:

        .row.bg-6.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img39.png', alt='', style="width: 164px").m-auto
          .col-lg-9
            .row.bg-5.r8
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Apague las capas roja y azul.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Trace, en la capa negra, líneas de construcción a 4 mm y 6 mm.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Dibuje la diagonal, refléjela y elimine segmentos sobrantes.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img40.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 48.
      span Construcción de cajas de la división.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img41.svg', alt='Cajas de construcción de la división. Incluyen diagonales inclinadas y curvas recortadas que dan limpieza al diseño. ', style="width: 1043px").m-auto

    .titulo-tres2.mt-2: h3 Construcción del espaldar

    .row.align-items-center
      .col-lg-10
        p El espaldar de la billetera es más grande que el cuerpo principal, ya que debe permitir un cierre cómodo sin tensiones, cubrir las divisiones internas y mantener la forma del accesorio.

        p Se recomienda añadir 1 cm extra en el ancho respecto al cuerpo. El procedimiento se desarrolla siguiendo estos pasos:
      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img42.svg", alt="", style="width: 190px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 49.
      span Espaldar con aumento.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img43.svg', alt='Construcción del espaldar de la billetera. Se aplica un desfase de 4 mm en la parte superior y de 5 mm en los laterales para generar la pieza de cierre. ', style="width: 1043px").m-auto


    .row.align-items-center.mt-4
      .col-lg-8
        .row.bg-3.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img44.png', alt='', style="width: 164px").m-auto
          .col-lg-9
            .row.bg-5.r8

              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Cree una capa nueva (Espaldar) color naranja. Mantenga activa únicamente la capa azul (rectángulo inicial). Desfase:

                    ul.lista-ul--color
                      li.d-flex.align-items-start
                        span.icono-img2
                        p.mb-0 4 mm hacia arriba de la horizontal superior.

                      li.d-flex.align-items-start
                        span.icono-img2
                        p.mb-0 5 mm a cada lado vertical.

                      li.d-flex.align-items-start
                        span.icono-img2
                        p.mb-0 La parte inferior no lleva aumento.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 A este nuevo rectángulo, añada un aumento de 10 mm en todo el contorno, necesario para el doblez.


      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img45.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 50.
      span Espaldar con aumento.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img46.svg', alt='Espaldar final con un aumento de 10 mm en todo el contorno. Este margen facilita el doblado y asegura la cobertura del cuerpo de la billetera. ', style="width: 1043px").m-auto


    .titulo-tres2.mt-4: h3 Molde patrón final

    .row.align-items-center
      .col-lg-10
        p De esta forma se obtiene el molde patrón completo de la billetera, con todas sus piezas principales y auxiliares correctamente delimitadas y listas para despiece.

      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img47.svg", alt="", style="width: 190px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 51.
      span  Molde patrón final. 

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img48.svg', alt='Molde patrón completo de la billetera de hombre, donde se integran cuerpos, divisiones y espaldar.', style="width: 1043px").m-auto


    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Despiece moldes

    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-center.bg-2.gx-3
          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/img49.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left:-10px" )
          .col-lg.d-flex
            .p-5.w-100.align-items-center
              p.text-white Para iniciar con este proceso, tome el molde patrón, apague las capas innecesarias y copie la pieza. A continuación, siga el paso a paso para obtener cada uno de los moldes necesarios para la elaboración del producto.



    .titulo-tres2.mt-4: h3  Patrón de vista superior

    .row.align-items-center
      .col-lg-8
        p Para obtener este molde, apague todas las capas excepto la verde (vista superior) y la magenta (aumentos de refilado). Copie la pieza y ubíquela en un espacio libre dentro del entorno del programa para evitar superposiciones.

        .row.bg-4.r8.align-items-center.justify-content-center.p-3
          .col-lg-12
            .row.bg-5.r8

              p.mt-2
                b A continuación, se detalla el procedimiento para guardar un archivo:

              ol.lista-ol--cuadro
                li.d-flex.align-items-start.mb-2
                  span.vineta-letra 1
                  p.mb-0 Extienda la curva verde hasta unirla con la magenta.

                li.d-flex.align-items-start.mb-2
                  span.vineta-letra 2
                  p.mb-0 Recorte los segmentos sobrantes.

                li.d-flex.align-items-start.mb-2
                  span.vineta-letra 3
                  p.mb-0 Marque el molde con texto siguiendo los parámetros de referenciación.

                li.d-flex.align-items-start.mb-2
                  span.vineta-letra 4
                  p.mb-0 Cree una capa de cotas (color negro) y utilice el comando Cota para verificar medidas.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img50.png', alt='', style="width: 400px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 52.
      span Patrón de vista superior.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img51.svg', alt='Patrón de la vista superior de la billetera de hombre. Incluye la pieza verde unida al aumento de refilado en magenta, lista para corte en cuero. ', style="width: 1043px").m-auto  


    .row.bg-9.mt-4
      .col-12
        .p-4
          .row.align-items-center
            .col-lg-1.d-lg-block.d-none
              figure
                img(src="@/assets/curso/tema3/img52.svg", alt="", style="width: 85px").m-auto
            .col-lg-11
              p Este molde corresponde a la pieza que se corta en dos unidades de cuero.


    .titulo-tres2.mt-4: h3 Patrón de vista intermedia

    .row.align-items-center
      .col-lg-10
        p Para este molde, encienda la capa morada (vista intermedia), copie, acote y referencie, dejando encendida también la capa magenta.

      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img53.svg", alt="", style="width: 190px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 53.
      span  Patrón de vista intermedia. 

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img54.svg', alt='Patrón de la vista intermedia de la billetera, identificado en color morado. Representa la pieza central del tarjetero intermedio. ', style="width: 1043px").m-auto


    .titulo-tres2.mt-4: h3 Patrón de vista inferior

    .row.align-items-center
      .col-lg-10
        p Apague la capa morada y encienda la capa naranja (bolsillo tarjetero). Copie, ajuste y referencie la pieza.

      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img55.svg", alt="", style="width: 190px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 54.
      span  Bolsillo tarjetero.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img56.svg', alt='Bolsillo tarjetero digital. Patrón en color naranja con detalles ajustados para formar la pieza inferior. ', style="width: 1043px").m-auto

    p.mt-4 Para el armado y refilado de los cuerpos, se incorpora un ribete interno en cada tarjetero con dimensiones de 85 mm x 16 mm.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 55.
      span  Ribetes para cuerpo de tarjeteros.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img57.svg', alt='Ribetes para los cuerpos de los tarjeteros, con medidas de 85 mm de largo por 16 mm de ancho. Sirven como acabados internos en el borde.', style="width: 1043px").m-auto


    .titulo-tres2.mt-4: h3 Patrón de centro

    .row.align-items-center
      .col-lg-10
        p Encienda la capa verde (Centro) y la capa magenta. Copie, ajuste y referencie la pieza.

      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img58.svg", alt="", style="width: 190px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 56.
      span  Patrón del centro.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img59.svg', alt='Patrón del centro de la billetera, configurado en capa verde y con aumentos de refilado en magenta. Patrón del centro de la billetera, configurado en capa verde y con aumentos de refilado en magenta. ', style="width: 1043px").m-auto

    p.mt-4 Una vez ensamblados los cuerpos con el centro, se coloca un ribete de 225 mm x 16 mm en la parte superior.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 57.
      span  Ribete para cuerpo de billetera.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img60.svg', alt='Ribete superior de la billetera. Pieza rectangular de 225 mm por 16 mm que se coloca al unir los cuerpos con el centro. ', style="width: 1043px").m-auto

    .titulo-tres2.mt-4: h3 Patrón de división

    .row.align-items-center
      .col-lg-10
        p Active únicamente las capas de Cotas y Vista división (rosa). Copie, ajuste y referencie el molde.

      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img61.svg", alt="", style="width: 190px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 58.
      span  Patrón de división.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img62.svg', alt='Patrón de la división interna de la billetera, mostrado en capa rosa y referenciado para corte. ', style="width: 1043px").m-auto


    .titulo-tres2.mt-4: h3 Patrón de espaldar

    .row.align-items-center
      .col-lg-10
        p Apague todas las capas excepto la naranja (Espaldar). Copie, ajuste y referencie el molde.

      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img63.svg", alt="", style="width: 190px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 59.
      span  Patrón de espaldar.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img64.svg', alt='Patrón del espaldar de la billetera, en color naranja, ajustado y referenciado como molde independiente.', style="width: 1043px").m-auto


    .titulo-tres2.mt-4: h3 Patrones completos para cuero

    .row.align-items-center
      .col-lg-10
        p De esta forma se obtienen los moldes en cuero, listos para el proceso de corte y posteriores operaciones de armado de la billetera.

      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img65.svg", alt="", style="width: 190px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 60.
      span  Patrones de cuero listos para corte.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img66.svg', alt='Conjunto de patrones en cuero para la billetera de hombre. Incluye vistas, centro, división y espaldar, todos listos para corte.', style="width: 1043px").m-auto

    .titulo-tres2.mt-4: h3 Patrones de forros o sedas

    p.mt-4 Para continuar, vamos a elaborar los patrones de los forros o sedas, ajustados a las dimensiones de los cuerpos y bolsillos del tarjetero.


    .row.mt-4.align-items-center.justify-content-center
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-8")
          .row(titulo="Patrón de forro de bolsillo (vistas de tarjetero)")

            p.px-5 Para determinar el tamaño del forro, se deben considerar las dimensiones del documento estándar (8.8 cm de largo por 5.5 cm de alto). Este debe sobresalir 7 mm por encima del borde del bolsillo.

            ul.lista-ul--color.mt-2.px-5
              li.d-flex.align-items-start
                span.icono-img3
                p.mb-0  El forro comienza en el borde superior del bolsillo y desciende 48 mm (profundidad de inserción).

              li.d-flex.align-items-start
                span.icono-img3
                p.mb-0 Luego se dobla y asciende 60 mm hasta el borde del tarjetero anterior.

              li.d-flex.align-items-start
                span.icono-img3
                p.mb-0 El alto total es de 108 mm (48 + 60).

              li.d-flex.align-items-start
                span.icono-img3
                p.mb-0 El ancho se reduce a 96 mm, un poco menor que los 100 mm del cuerpo para un mejor ajuste.

            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4.px-5 
                  h5 Figura 61.
                  span Dimensiones del forro de vistas.
                figure
                  img(src='@/assets/curso/tema3/img67.svg', alt='Dimensiones de forro para vistas del tarjetero. Muestra el cálculo de altura total (108 mm) y ancho (96 mm). ', style="width: 854px").m-auto

            p.mt-4.px-5 Finalmente, el forro de bolsillo tendrá unas medidas de 96 mm de ancho por 108 mm de alto. Se cortan cuatro piezas por unidad de producto, colocadas en la vista superior y en la vista intermedia. La vista inferior queda sin forro para destacar el cuero auténtico.

            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4.px-5 
                  h5 Figura 62.
                  span Forro de vistas del tarjetero. 
                figure
                  img(src='@/assets/curso/tema3/img68.svg', alt='Forro final de las vistas del tarjetero. Incluye medidas ajustadas para asegurar encaje dentro de los compartimientos.', style="width: 854px").m-auto

          div(titulo="Patrón de forro del cuerpo de tarjeteros")

            p.px-5 Esta pieza se obtiene trazando el contorno del cuerpo (100 mm x 80 mm) y añadiendo un margen de 2 mm alrededor para refilado.

            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4.px-5 
                  h5 Figura 63.
                  span Forro de cuerpo de tarjeteros.
                figure
                  img(src='@/assets/curso/tema3/img69.svg', alt='Forro de los cuerpos de los tarjeteros, con un margen adicional de 2 mm alrededor para refilado. ', style="width: 854px").m-auto


          div(titulo="Patrón de forro del cuerpo principal")

            p.px-5 El forro del cuerpo principal corresponde al rectángulo inicial de 220 mm x 80 mm, con un margen adicional de 2 mm para refilado.

            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4.px-5 
                  h5 Figura 64.
                  span Forro de cuerpo. 
                figure
                  img(src='@/assets/curso/tema3/img70.svg', alt='Forro del cuerpo principal de la billetera, correspondiente al rectángulo inicial de 220 mm por 80 mm más márgenes. ', style="width: 854px").m-auto

          div(titulo="Forro de división")

            p.px-5 El forro de la división ya fue dibujado previamente. Corresponde al rectángulo de la capa “División”. Active la capa, copie el rectángulo y referéncielo.

            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4.px-5 
                  h5 Figura 65.
                  span Forro de división.
                figure
                  img(src='@/assets/curso/tema3/img71.svg', alt='Forro de la división interna, representado como rectángulo independiente en la capa correspondiente. ', style="width: 854px").m-auto

          div(titulo="Forro del espaldar")

            p.px-5 El molde del forro del espaldar corresponde al mismo espaldar, pero sin el aumento de 10 mm de contorno.

            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4.px-5 
                  h5 Figura 66.
                  span Forro del espaldar.
                figure
                  img(src='@/assets/curso/tema3/img72.svg', alt='Forro del espaldar, idéntico a la pieza principal pero sin el aumento de 10 mm en los bordes. ', style="width: 854px").m-auto



    .titulo-tres2.mt-4: h3 Moldes de forros obtenidos

    .row.align-items-center
      .col-lg-10
        p Para concluir, estos son los moldes de forros obtenidos, listos para el proceso de confección.

      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img73.svg", alt="", style="width: 190px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 67.
      span  Moldes de forros.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema3/img74.svg', alt='Conjunto de moldes de forros de la billetera de hombre, listos para corte y ensamblaje. ', style="width: 1043px").m-auto

    .titulo-tres2.mt-4: h3 Rectificadores

    p.mt-4 Para garantizar precisión en el acabado final de las piezas, se emplean moldes rectificadores que permiten refilar y ajustar las superficies al tamaño y forma definitivos. Estos aseguran uniformidad, limpieza en los bordes y una correcta alineación durante el proceso de armado.
    

    .row.mt-4.align-items-center.justify-content-center
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-8")
          .row(titulo="Rectificador de tarjeteros")

            p.px-5 Este molde se utiliza para refilar las piezas al tamaño final. Se obtiene de manera similar al molde del forro, pero sin el borde interno (segmento que se elimina para ribetear).

            ul.lista-ul--color.mt-2.px-5
              li.d-flex.align-items-start
                span.icono-img3
                p.mb-0  Se marca únicamente la referencia y nombre del molde, ya que no corresponde a un corte de material.

              li.d-flex.align-items-start
                span.icono-img3
                p.mb-0 Incluye perforaciones de guía que coinciden con las líneas de los tarjeteros, garantizando un refilado preciso.

            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4.px-5 
                  h5 Figura 68.
                  span Molde rectificador de tarjeteros.
                figure
                  img(src='@/assets/curso/tema3/img75.svg', alt='Molde rectificador de tarjeteros. Incluye perforaciones de referencia que permiten refilar las piezas con precisión en el armado.', style="width: 854px").m-auto

          div(titulo="Rectificador del cuerpo")

            p.px-5 Este molde se obtiene de forma similar al del forro, pero sin los 2 mm de contorno.

            ul.lista-ul--color.mt-2.px-5
              li.d-flex.align-items-start
                span.icono-img3
                p.mb-0  También incorpora perforaciones de guía, que permiten ubicarlo correctamente sobre el cuerpo armado para refilar los cuatro lados.

              li.d-flex.align-items-start
                span.icono-img3
                p.mb-0 El referenciado se realiza de la misma manera que el rectificador anterior.

            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4.px-5 
                  h5 Figura 69.
                  span Molde rectificador del cuerpo.
                figure
                  img(src='@/assets/curso/tema3/img76.svg', alt='Molde rectificador del cuerpo de la billetera, diseñado sin los márgenes de 2 mm y con perforaciones para refilar con exactitud. ', style="width: 854px").m-auto


    .row.align-items-center
      .col-lg-10
        p A continuación, se presenta un video, en el que se explica paso a paso cómo trazar y organizar los moldes en Rhino: desde el rectángulo base de 22 × 8 cm y los desfaces, hasta la creación de capas, empalmes y “cajas” para vistas y bolsillos.

      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img77.svg", alt="", style="width: 190px").m-auto


    .row.mt-4
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/QCTS9rfE_Uo?si=sIgI_2Zok3-9nNY7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



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
