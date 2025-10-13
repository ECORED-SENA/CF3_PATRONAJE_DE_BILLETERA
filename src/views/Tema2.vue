<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Elaboración de patrones de tarjetero con vistas

    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-center.bg-3.gx-3
          .col-lg.d-flex
            .p-5.w-100.align-items-center
              p La construcción digital de un patrón en Rhinoceros permite diseñar con precisión y flexibilidad las piezas necesarias para la elaboración de un tarjetero con vistas.
          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/img1.png', alt='', class="w-100 h-100 object-fit-cover" )

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Construcción del patrón

    .row.align-items-center
      .col-lg-10
        p Para iniciar, se recomienda seleccionar la capa azul, que estará destinada al dibujo del patrón principal. Luego, cree un rectángulo base con las dimensiones de 100 mm de ancho por 70 mm de alto.
      .col-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema2/img2.svg", alt="", style="width: 190px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 25.
      span Construcción del rectángulo del tarjetero.      

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema2/img3.svg', alt='Rectángulo inicial de 100 mm de ancho por 70 mm de alto, base para la construcción del tarjetero con vistas. Representa el primer paso para delimitar el patrón principal.', style="width: 1043px").m-auto

    .titulo-tres.mt-4.text-white: h3 Construcción de la vista inferior

    .row.align-items-center
      .col-lg-8
        p Para dibujar la línea de división del tarjetero:

        .row.bg-4.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img4.png', alt='', style="width: 164px").m-auto
          .col-lg-9
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Seleccione la capa roja.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Active el comando Descomponer para separar la polilínea en segmentos individuales.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Desfase la curva superior hacia el interior con una distancia de 15 mm.
                
              p
                b Pasos para desfase:

              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Active la herramienta Desfasar desde la barra de herramientas o línea de comandos.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Ingrese la distancia: escriba 15 y presione Enter.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Seleccione la curva a desfasar.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Con el cursor, indique la dirección del desfase (hacia el interior) y haga clic para confirmar.


        p.mt-3 Este proceso genera una curva paralela desplazada hacia el interior, lista para continuar con el modelado.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img5.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 26.
      span Trazo de la división.  

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema2/img6.svg', alt='Trazo de la línea de división del tarjetero, creado mediante el desfase de la curva superior a 15 mm. Este elemento delimita el área de los compartimientos. ', style="width: 1043px").m-auto

    .titulo-tres.mt-4.text-white: h3 Construcción del bolsillo inferior

    .row.align-items-center
      .col-lg-8
        p A partir de la curva paralela trazada a 15 mm, se procede de la siguiente manera:

        .row.bg-6.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img7.png', alt='', style="width: 164px").m-auto
          .col-lg-9
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Desfase una nueva curva 7 mm hacia arriba, para crear un doblez en la pieza, facilitando el embone.


                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Para evitar exceso de material, se recomienda el uso de cajas, que son cortes diagonales aplicados en áreas de doblez, muy comunes en tarjeteros y billeteras.


        p.mt-3 Para complementar el diseño del tarjetero y garantizar un acabado técnico adecuado, se realizan ajustes adicionales que incluyen el trazado de cajas o cortes diagonales, los cuales permiten reducir exceso de material en las zonas de doblez y facilitan el proceso de embone.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img8.png', alt='', style="width: 400px").m-auto

    .row.mt-4
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-11.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/img9.svg' style="width:105px").m-auto

          h4.text-center Desfase de línea vertical
          p.text-small.text-center Desfase una línea a 4 mm hacia el interior del tarjetero.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-11.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/img10.svg' style="width:105px").m-auto

          h4.text-center Color de construcción
          p.text-small.text-center Utilice la capa negra para diferenciar estas líneas auxiliares.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.bg-11.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/img11.svg' style="width:105px").m-auto

          h4.text-center Trazado de la caja
          p.text-small.text-center Dibuje una diagonal desde el punto cero hasta la intersección entre la línea desplazada 4 mm y el aumento de 7 mm.

      .col-sm-6.col-lg-3
        .tarjeta--boton.bg-11.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/img12.svg' style="width:105px").m-auto

          h4.text-center Simetría
          p.text-small.text-center Refleje la diagonal usando como referencia el punto medio del tarjetero.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 27.
      span Construcción de la vista inferior. 

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema2/img13.svg', alt='Construcción de la vista inferior del tarjetero. Se aprecian curvas desplazadas y diagonales que permiten formar cajas con inclinación entre 0 y 4 mm, optimizando el material y facilitando el doblez. ', style="width: 1043px").m-auto

    .titulo-tres.mt-4.text-white: h3 Limpieza final del patrón

    .row.align-items-center
      .col-lg-8
        p Una vez completado el trazado de líneas auxiliares:

        .row.bg-3.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img14.png', alt='', style="width: 164px").m-auto
          .col-lg-9
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Apague la capa negra haciendo clic izquierdo sobre el ícono del bombillo.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Recorte las curvas sobrantes para limpiar y definir la vista inferior del patrón.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img15.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 28.
      span Vista inferior con líneas auxiliares ocultas.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema2/img16.svg', alt='Representación de la vista inferior ya depurada, con la capa negra apagada y las curvas sobrantes eliminadas para dejar solo la geometría final.', style="width: 1043px").m-auto

    .titulo-tres.mt-4.text-white: h3 Construcción de vista superior

    .row.justify-content-center.mb-5.mt-4
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-center.bg-3.gx-3
          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/img17.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left: -10px" )
          .col-lg.d-flex
            .p-5.w-100.align-items-center
              p Para elaborar la vista superior del tarjetero, se utiliza una capa distinta; en este caso, la capa verde.


    .titulo-tres.mt-4.text-white: h3 Trazado base y construcción de caja

    .row.align-items-center
      .col-lg-8
        p Desde la línea situada a 15 mm, se realiza una copia desplazada 10 mm hacia abajo, que servirá como base de la vista superior. A continuación, se construye una caja diagonal, siguiendo el principio de inclinación entre 4 mm y 6 mm, que permite que las piezas encajen con mayor facilidad en el ensamblaje.

        .row.bg-15.r8.align-items-center.justify-content-center.p-4
          .col-lg-12
            .row.bg-5.r8
              p A continuación, se detalla el procedimiento para guardar un archivo:

              ol.lista-ol--cuadro
                li.d-flex.align-items-start.mb-2
                  span.vineta-letra a
                  p.mb-0 Active la capa negra para habilitar líneas de construcción.

                li.d-flex.align-items-start.mb-2
                  span.vineta-letra b
                  p.mb-0 Dibuje una línea paralela a la vertical, desplazada 4 mm hacia el interior.

                li.d-flex.align-items-start.mb-2
                  span.vineta-letra c
                  p.mb-0 Dibuje otra línea paralela, desplazada 6 mm desde la vertical.

                li.d-flex.align-items-start.mb-2
                  span.vineta-letra d
                  p.mb-0 dUna ambas líneas con una diagonal en la capa verde.

                li.d-flex.align-items-start.mb-2
                  span.vineta-letra e
                  p.mb-0 Refleje esta diagonal tomando como referencia el punto medio del tarjetero.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img18.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 29.
      span Construcción de la vista superior.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema2/img19.svg', alt='Construcción de la vista superior. Se observa una diagonal con inclinación entre 4 y 6 mm, reflejada simétricamente, lo que asegura el ensamble correcto de las piezas. ', style="width: 1043px").m-auto

    .row.bg-9.mt-4
      .col-12
        .p-4
          .row.align-items-center
            .col-lg-1.d-lg-block.d-none
              figure
                img(src="@/assets/curso/tema2/img20.svg", alt="", style="width: 85px").m-auto
            .col-lg-11
              p Este procedimiento asegura simetría y un ajuste correcto entre las piezas.


    .titulo-tres.mt-4.text-white: h3 Limpieza de líneas auxiliares

    .row.align-items-center
      .col-lg-8
        p Para finalizar esta parte:

        .row.bg-4.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img21.png', alt='', style="width: 164px").m-auto
          .col-lg-9
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Apague la capa negra para ocultar las líneas auxiliares.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Recorte las curvas verdes sobrantes para limpiar el trazado.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img22.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 30.
      span Vista superior.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema2/img23.svg', alt='Vista superior terminada después de recortar las curvas verdes sobrantes. La pieza queda lista para formar parte del molde. ', style="width: 1043px").m-auto

    .titulo-tres.mt-4.text-white: h3 Aumento del cuerpo principal

    .row.align-items-center
      .col-lg-8
        p Para continuar con la construcción del molde patrón, se aplica un aumento de 7 mm al cuerpo principal (rectángulo de la capa azul), con el fin de crear un margen de doblez. Los pasos para realizar el aumento son:

        .row.bg-6.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img24.png', alt='', style="width: 164px").m-auto
          .col-lg-9
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Una las cuatro líneas del rectángulo base para formar una sola polilínea.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Aplique un desfase hacia el exterior de 7 mm, utilizando la capa azul.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Se creará así un contorno ampliado, que funcionará como margen.


      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img25.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 31.
      span Aumento para doblar el cuerpo.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema2/img26.svg', alt='Rectángulo base ampliado con un aumento de 7 mm alrededor, que genera el margen de doblado para el cuerpo del tarjetero. ', style="width: 1043px").m-auto


    .titulo-tres.mt-4.text-white: h3 Delimitación de piezas del tarjetero

    .row.align-items-center
      .col-lg-8
        p Finalmente, se deben delimitar las dos piezas que componen el tarjetero: la vista superior y la inferior.
        p El procedimiento es:

        .row.bg-15.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img27.png', alt='', style="width: 164px").m-auto
          .col-lg-9
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Extienda la polilínea roja hasta 15 mm, de modo que alcance el borde del aumento.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Utilice esta línea como guía para seccionar los dos rectángulos que forman el cuerpo del tarjetero (en la capa azul).


      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img28.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 32.
      span Seccionar el cuerpo.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema2/img29.svg', alt='Sección del cuerpo del tarjetero a partir de la línea roja extendida, dividiendo las piezas superior e inferior en el contorno ampliado. ', style="width: 1043px").m-auto


    .titulo-tres.mt-4.text-white: h3 Definición final del molde

    .row.align-items-center
      .col-lg-8
        p Una vez seccionadas las piezas:

        .row.bg-14.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img30.png', alt='', style="width: 164px").m-auto
          .col-lg-9
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Dibuje los contornos finales de cada parte utilizando Polilíneas.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Asigne colores diferentes para facilitar su identificación:

                    ul.lista-ul--color
                      li.d-flex.align-items-start
                        span.icono-img2
                        p.mb-0 Vista superior: capa verde.

                      li.d-flex.align-items-start
                        span.icono-img2
                        p.mb-0 Vista inferior: capa roja.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Apague la capa azul para visualizar claramente los contornos de ambas piezas.


      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img31.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 33.
      span Molde patrón completo. 

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema2/img32.svg', alt='Molde patrón con polilíneas definitivas que delimitan las dos piezas principales del tarjetero, diferenciadas por colores de capa.', style="width: 1043px").m-auto


    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Construcción del patrón

    .row.justify-content-center.mb-5.mt-4
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-center.bg-2.gx-3
          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/img33.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left: -10px" )
          .col-lg.d-flex
            .p-5.w-100.align-items-center
              p.text-white Para obtener los moldes del tarjetero con vistas, simplemente copie cada pieza siguiendo el procedimiento descrito a continuación. Este proceso permite organizar los componentes para el corte, referenciación e impresión.


    .titulo-tres: h3  Tipos de moldes y su función

    p.mt-4 Cada tipo de molde cumple una función específica dentro del proceso de elaboración del tarjetero y debe ser preparado con base en el patrón digital previamente construido.

    .row.mt-4.align-items-center.justify-content-center
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-8")
          .row(titulo="Patrones de cuero")

            p.px-5 Se copian las dos piezas del molde patrón: 

            ul.lista-ul--color.mt-2.px-5
              li.d-flex.align-items-start
                span.icono-img3
                p.mb-0  La vista superior (capa verde). 

              li.d-flex.align-items-start
                span.icono-img3
                p.mb-0 La vista inferior (capa roja). 

            p.px-5 Recuerde referenciar los moldes con los parámetros establecidos previamente (referencia, nombre, material, cantidad y dimensiones). Este paso facilita la preparación para el corte y confección.

            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4.px-5 
                  h5 Figura 34.
                  span Patrones para piezas en cuero.
                figure
                  img(src='@/assets/curso/tema2/img34.svg', alt='Patrones en cuero del tarjetero con vistas. La figura muestra las dos piezas obtenidas del molde patrón, listas para referenciarse y cortarse. ', style="width: 854px").m-auto

          div(titulo="Patrones de forro")

            p.px-5 Se copian dos rectángulos: 

            ul.lista-ul--color.mt-2.px-5
              li.d-flex.align-items-start.p-1
                span.icono-img3
                p.mb-0  Uno con dimensiones 100 mm x 70 mm (igual al patrón base). 

              li.d-flex.align-items-start.p-1
                span.icono-img3
                p.mb-0 Otro con 15 mm menos en sus dimensiones, ajustado al área útil del forro.

            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4.px-5 
                  h5 Figura 35.
                  span Patrones de forro.
                figure
                  img(src='@/assets/curso/tema2/img35.svg', alt='Patrones de forro del tarjetero. Se incluyen dos rectángulos: el inicial de 100 mm x 70 mm y otro reducido en 15 mm para ajustarse al diseño interno.', style="width: 854px").m-auto

          div(titulo="Patrones de alma")

            p.px-5 Estas piezas dan estructura al producto y sirven como guía para el doblado. Se obtienen usando las mismas dimensiones del rectángulo inicial: 100 mm x 70 mm.

            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4.px-5 
                  h5 Figura 36.
                  span Patrones de alma.
                figure
                  img(src='@/assets/curso/tema2/img36.svg', alt='Patrones de alma del tarjetero, representados como rectángulos que coinciden con las dimensiones base, proporcionando estructura a la pieza.', style="width: 854px").m-auto


    .titulo-tres.mt-4.text-white: h3 Impresión y verificación

    .row.align-items-center
      .col-lg-8
        p El proceso de impresión se realiza igual que en el modelo anterior. Asegúrese de aplicar los mismos parámetros de vista, escala y configuración de color (preferiblemente blanco y negro para contornos de corte). Antes de imprimir:

        .row.bg-3.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img37.png', alt='', style="width: 164px").m-auto
          .col-lg-9
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Verifique el material asignado a cada molde.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Confirme la cantidad de piezas necesarias para cortar.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Prepare todo lo necesario para elaborar la maqueta física del producto.

        p.mt-4  A continuación, se presenta un video instructivo, en el que se explica paso a paso cómo desarrollar el molde de un tarjetero utilizando Rhino. En este tutorial se detallan las medidas, las herramientas y los procedimientos necesarios para construir las piezas del tarjetero, definir capas, realizar desfaces, empalmes y cotas, así como marcar correctamente cada molde.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img38.png', alt='', style="width: 400px").m-auto

    .row.mt-2
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/QCTS9rfE_Uo?si=sIgI_2Zok3-9nNY7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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
