<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Elaboración patrones para tarjetero

    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-center.bg-2.gx-3
          .col-lg.d-flex
            .p-5.w-100.align-items-center
              p.text-white Para iniciar la creación de patrones, seleccione la capa deseada con un clic izquierdo sobre ella. En este caso, haga clic sobre la capa azul. Cuando la capa esté activa, aparecerá una marca negra (check) junto a su nombre, lo que indica que las operaciones nuevas se realizarán dentro de esa capa específica.
          .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img1.png', alt='', class="w-100 h-100 object-fit-cover" )

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Guardado de archivos en Rhinoceros 

    .row.align-items-center
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        p Es recomendable guardar el trabajo de manera frecuente para evitar la pérdida de información por fallos inesperados. Rhino también puede generar archivos de respaldo automáticamente, dependiendo de la configuración del usuario.

        .row.bg-4.r8.align-items-center.justify-content-center
          .col-lg-11.py-4
            .row.bg-5.r8
              p A continuación, se detalla el procedimiento para guardar un archivo:
              ol.lista-ol--cuadro
                li.d-flex.align-items-start.mb-2
                  span.vineta-letra a
                  p.mb-0 Diríjase al menú Archivo y seleccione Guardar como.

                li.d-flex.align-items-start.mb-2
                  span.vineta-letra b
                  p.mb-0 En la ventana emergente, elija la ubicación en su computador donde desea guardar el archivo.

                li.d-flex.align-items-start.mb-2
                  span.vineta-letra c
                  p.mb-0 Ingrese un nombre para el archivo en el campo correspondiente.

                li.d-flex.align-items-start.mb-2
                  span.vineta-letra d
                  p.mb-0 Seleccione el formato de archivo (por defecto es .3dm, el formato nativo de Rhino).

                li.d-flex.align-items-start.mb-2
                  span.vineta-letra e
                  p.mb-0 Haga clic en Guardar para finalizar el proceso.


    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Construcción del patrón

    .row.align-items-center
      .col-lg-8
        p Para dibujar el molde patrón del tarjetero, comience trazando un rectángulo en Rhinoceros. Siga estos pasos:

        .row.bg-6.r8.align-items-center.justify-content-center
          .col-lg-11.py-4
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0  Active el comando Rectángulo desde la barra de herramientas, el menú o escribiéndolo en la línea de comandos.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Haga clic para designar el primer vértice (esquina) del rectángulo en el espacio de trabajo.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Desplace el cursor en la dirección deseada para definir el borde adyacente.
                
                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Escriba la medida 100 mm y presione Enter para establecer esa dimensión.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Mueva el cursor perpendicular al primer borde para definir la altura.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Introduzca la medida 70 mm y presione Enter para completar el rectángulo.

        p.mt-3 Este procedimiento crea un rectángulo cerrado de 100 mm de ancho por 70 mm de alto, con precisión.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img3.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 1.
      span Construcción del rectángulo del tarjetero.      

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img4.svg', alt='Representación del rectángulo inicial que sirve como molde patrón del tarjetero, construido con medidas de 100 mm de ancho por 70 mm de alto. Esta figura ilustra el primer paso en el software, mostrando un contorno cerrado y proporcional que se convertirá en la base para generar los compartimentos. ', style="width: 1043px").m-auto

    .titulo-tres.mt-4.text-white: h3 Línea de corte y curvas internas

    .row.align-items-center
      .col-lg-8
        p Seleccione la capa roja para dibujar la línea de corte del tarjetero. Active el comando Descomponer para separar la polilínea en segmentos individuales. Desfase la curva superior hacia el interior con una distancia de 15 mm, siguiendo estos pasos:

        .row.bg-2.r8.align-items-center.justify-content-center.p-3
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img6.png', alt='', style="width: 272px").m-auto
          .col-lg-8
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0  Active la herramienta Desfasar desde la barra o línea de comandos.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Ingrese la distancia deseada: escriba 15 y presione Enter.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Seleccione la curva que desea desfasar.
                
                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Indique con el cursor la dirección del desfase hacia el interior y haga clic para confirmar.

        p.mt-3 Este proceso genera una curva paralela desplazada hacia el interior, lista para continuar con el modelado.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img5.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 2.
      span Bolsillo del tarjetero.    

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img7.svg', alt='Representación del rectángulo inicial que sirve como molde patrón del tarjetero, construido con medidas de 100 mm de ancho por 70 mm de alto. Esta figura ilustra el primer paso en el software, mostrando un contorno cerrado y proporcional que se convertirá en la base para generar los compartimentos. ', style="width: 1043px").m-auto

    .titulo-tres.mt-4.text-white: h3 Detalles del compartimiento

    p.mt-4 Desfase una línea vertical a 5 mm. En la intersección resultante, dibuje un círculo con radio de 1 mm.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 3.
      span Desfase de curva a 5 mm.     

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img8.svg', alt='Representación del desfase de una línea vertical a 5 mm, que genera un punto de intersección para trazar un círculo con radio de 1 mm. Este detalle técnico permite incorporar perforaciones de referencia en el patrón digital. ', style="width: 1043px").m-auto


    p.mt-4 Refleje el círculo tomando como referencia el punto medio de la línea horizontal superior.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 4.
      span Círculos de corte del compartimiento del tarjetero.   

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img9.svg', alt=' Ilustración de los círculos que funcionan como cortes en el compartimiento del tarjetero. Los círculos se reflejan simétricamente en el eje central superior, garantizando uniformidad en el diseño del molde. ', style="width: 1043px").m-auto

    .titulo-tres.mt-4.text-white: h3 Corte del diseño

    p.mt-4 Una vez reflejadas las curvas, selecciónelas y proceda con el corte, de modo que quede la línea horizontal a una distancia de 15 mm, junto con los círculos.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 5.
      span Selección de piezas a cortar. 

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img10.svg', alt='Selección de curvas y piezas que serán recortadas con el comando “Recortar” en Rhinoceros. Esta figura resalta los segmentos destinados a eliminarse, dejando solo las líneas necesarias para el contorno del bolsillo. ', style="width: 1043px").m-auto


    .row.align-items-center.mt-4
      .col-lg-8
        p Para cortar, utilice el comando Recortar. El procedimiento consiste en:

        .row.bg-6.r8.align-items-center.justify-content-center.p-3
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img11.png', alt='', style="width: 272px").m-auto
          .col-lg-8
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0  Seleccione con clic izquierdo las curvas u objetos que funcionarán como guías de corte.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 Haga clic sobre el área o segmento que desea eliminar.

        p.mt-3 El comando Recortar elimina las partes seleccionadas en la intersección con otro objeto, dejando solo la geometría deseada.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img12.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 6.
      span Curvas cortadas.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img13.svg', alt='Resultado de las curvas cortadas, donde se aprecia el patrón depurado después de eliminar los segmentos sobrantes. La geometría final queda más limpia y precisa para continuar con el proceso de construcción. ', style="width: 1043px").m-auto



    .titulo-tres.mt-4.text-white: h3 Ajuste final del contorno


    .row.align-items-center.mt-4
      .col-lg-8
        p Dado que la pieza está destinada al corte, se incrementa 2 mm en el contorno general, excepto en la línea superior, que permanece sin modificación. Para realizar este ajuste se debe:

        .row.bg-8.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img14.png', alt='', style="width: 272px").m-auto
          .col-lg-9
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0  Una las polilíneas restantes para crear un contorno continuo. Asegúrese de que todas las líneas estén correctamente conectadas.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img15.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 7.
      span Curvas unidas.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img16.svg', alt='Unión de las curvas en un contorno continuo, representando cómo las polilíneas se integran en una sola pieza. Esta acción asegura que el molde pueda manipularse sin errores de conexión. ', style="width: 1043px").m-auto

    .row.bg-6.r8.align-items-center.justify-content-center.p-3.mt-4
      .col-lg-2.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img17.png', alt='', style="width: 272px").m-auto
      .col-lg-10
        .row.bg-5.r8
          ul.lista-ul--color.mt-2
            li.d-flex.align-items-start.p-1
              span.icono-img
              p.mb-0  Seleccione el comando Desfasar e ingrese la medida 2 mm.

            li.d-flex.align-items-start.p-1
              span.icono-img
              p.mb-0 Extienda la curva superior hasta unirla con las dos líneas verticales.


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 8.
      span Curvas desfasadas y extendidas.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img18.svg', alt=' Molde con curvas desfasadas y extendidas, mostrando el aumento de 2 mm aplicado al contorno general. Este incremento prepara la pieza para procesos de refilado, exceptuando la línea superior que se conserva sin modificación. ', style="width: 1043px").m-auto

    .row.bg-9.mt-4
      .col-12
        .p-4
          .row.align-items-center
            .col-lg-1.d-lg-block.d-none
              figure
                img(src="@/assets/curso/tema1/img19.svg", alt="", style="width: 85px").m-auto
            .col-lg-11
              p De esta forma, queda construido el molde patrón del tarjetero, listo para ser utilizado en las siguientes fases de modelado o fabricación.
        
    .row.bg-10
      .col-12
        .p-5
          .titulo-tres.mt-4.text-white: h3 Despiece moldes  

          p.mt-4 Para realizar el proceso de despiece, vamos a obtener los moldes correspondientes al material principal, los forros, las almas y el refilado.  

          .row
            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/img20.svg' style="width:105px").m-auto

                h4.text-center Patrones principales
                p.text-small.text-center Se obtienen copiando el molde patrón tal cual, replicando fielmente sus dimensiones.

            .col-sm-6.col-lg-3.mb-4.mb-lg-0
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/img21.svg' style="width:105px").m-auto

                h4.text-center Moldes de forro
                p.text-small.text-center Se obtienen de igual forma que los patrones principales.

            .col-sm-6.col-lg-3.mb-4.mb-sm-0
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/img22.svg' style="width:105px").m-auto

                h4.text-center Moldes de alma
                p.text-small.text-center Se obtienen de igual forma que los patrones principales.

            .col-sm-6.col-lg-3
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/img23.svg' style="width:105px").m-auto

                h4.text-center Molde de refilado
                p.text-small.text-center Corresponde al mismo patrón original, pero sin el aumento de 2 mm aplicado al contorno. Se utiliza para recortar el tarjetero ya armado.

          .titulo-sexto.color-acento-contenido.mb-3.mt-4
            h5 Figura 9.
            span Copia para molde principal.

          .row.bg-7.justify-content-center.align-items-center.p-4
            .col-lg-10
              figure
                img(src='@/assets/curso/tema1/img24.svg', alt='Copia directa del molde patrón que servirá como molde principal. La figura refleja la fidelidad del diseño digital en la reproducción de las medidas originales. ', style="width: 1043px").m-auto

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 10.
      span Molde de refilado.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img25.svg', alt='Molde de refilado del tarjetero. Se trata del mismo contorno original, pero sin los 2 mm de aumento, utilizado para cortar y ajustar el accesorio ya armado. ', style="width: 1043px").m-auto



    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Referenciado de moldes

    p  Para marcar los moldes, es importante incluir información clara y estandarizada que permita identificar cada parte del tarjetero. Esta marcación garantiza un correcto corte, armado y control de inventario. La información requerida en cada molde es: 

    .row.bg-12
      .col-12
        .p-5
          .carousel-bg
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4.d-none.d-lg-block
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema1/img26.png", style="height: 405px").m-auto
              .col-lg-8
                SlyderF.custom.mb-5(columnas="col-lg-6 col-md-6 col-xl-6")
                  .tarjeta.tarjeta--slyder.p-5
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img27.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Referencia
                    p.text-center.mb-0 Código o número identificador del molde.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img28.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Nombre
                    p.text-center.mb-0 Denominación específica de la pieza (por ejemplo: vista, espaldar, cuerpo, centro, división).

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img29.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Material
                    p.text-center.mb-0 Tipo de material con el que se confeccionará la pieza (cuero, forro, salpa, etc.).
                  

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img30.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Cantidad
                    p.text-center.mb-0 	Número de piezas que se deben cortar.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img31.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Dimensiones
                    p.text-center.mb-0 Medidas principales de la pieza (ancho y largo).



    .titulo-tres: h3  Procedimiento para insertar texto

    p.mt-4 Para marcar cada molde, siga los siguientes pasos:

    .row.mt-4.align-items-center.justify-content-center
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-8")
          .row(titulo="Paso 1")

            p.px-5 En la barra de comandos, escriba Texto y presione Enter.

            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4.px-5 
                  h5 Figura 11.
                  span Selección del comando Texto. 
                figure
                  img(src='@/assets/curso/tema1/img32.svg', alt='Selección del comando “Texto” en la barra de herramientas de Rhinoceros, empleado para marcar los moldes con referencias, materiales y dimensiones. ', style="width: 854px").m-auto

          div(titulo="Paso 2")

            p.px-5 En la barra de comandos, escriba Texto y presione Enter.

            ul.lista-ul--color.mt-2.px-5
              li.d-flex.align-items-start.p-1
                span.icono-img
                p.mb-0  Aparecerá una ventana para definir las propiedades del texto.

              li.d-flex.align-items-start.p-1
                span.icono-img
                p.mb-0 Establezca la altura de la letra en 3 mm.

              li.d-flex.align-items-start.p-1
                span.icono-img
                p.mb-0 Seleccione el tipo de fuente, como Arial o la que considere adecuada.

              li.d-flex.align-items-start.p-1
                span.icono-img
                p.mb-0 Ingrese el texto deseado y haga clic en Aceptar.


            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4.px-5 
                  h5 Figura 12.
                  span Selección del comando Texto.
                figure
                  img(src='@/assets/curso/tema1/img33.svg', alt='Ventana de edición de texto donde se configuran altura, fuente y contenido a incluir en la marcación del molde. ', style="width: 854px").m-auto

          div(titulo="Paso 3")

            p.px-5 Ubique el texto sobre el molde con el cursor y haga clic izquierdo para fijarlo. 

            .row.justify-content-center.align-items-center
              .col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3.mt-4.px-5 
                  h5 Figura 13.
                  span Ubicación del texto.
                figure
                  img(src='@/assets/curso/tema1/img34.svg', alt='Ubicación del texto sobre el molde digital. Se observa cómo el contenido queda anclado en el punto deseado, permitiendo identificar la pieza. ', style="width: 854px").m-auto


    .titulo-tres.mt-4.text-white: h3 Reutilización del texto y copia

    .row.align-items-center.mt-4
      .col-lg-8
        p Para marcar los moldes restantes:

        .row.bg-2.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img35.png', alt='', style="width: 272px").m-auto
          .col-lg-9
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0  Puede repetir el proceso anterior. Al abrir el cuadro de texto nuevamente, aparecerá automáticamente el último texto ingresado, lo que permite modificar solo los detalles específicos sin cambiar el formato.

                li.d-flex.align-items-start.p-1
                  span.icono-img
                  p.mb-0 También puede repetir el último comando con clic derecho del mouse.


      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img36.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 14.
      span Referenciado de los moldes restantes.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img37.svg', alt='Ejemplo de referenciado en los moldes restantes, con distintos textos aplicados en cada pieza para diferenciar nombre, material y cantidad. ', style="width: 1043px").m-auto



    .titulo-tres.mt-4.text-white: h3 Alternativa: copiar texto

    .row.align-items-center.mt-4
      .col-lg-8
        p Otra forma eficiente de marcar es utilizando el comando Copiar:

        .row.bg-6.r8.align-items-center.justify-content-center.p-3
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img38.png', alt='', style="width: 272px").m-auto
          .col-lg-8
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Seleccione el texto ya creado.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Active el comando Copiar.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Haga clic en la posición donde desea ubicar la copia.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Presione la tecla Esc para salir de la herramienta.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Haga doble clic izquierdo sobre el texto copiado para editar su contenido.



      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img39.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 15.
      span Copiar texto.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img40.svg', alt='Uso del comando “Copiar” para replicar el texto en diferentes posiciones dentro del molde, facilitando la marcación sin necesidad de crear nuevos textos desde cero. ', style="width: 1043px").m-auto



    .titulo-tres.mt-4.text-white: h3 Moldes completados

    p.mt-4 Al finalizar el proceso de referenciado, obtendrá todos los moldes correctamente identificados, listos para su uso en producción.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 16.
      span Moldes del tarjetero.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img41.svg', alt='Conjunto completo de moldes del tarjetero después de aplicar procesos de construcción, despiece y referenciado. La figura reúne las distintas piezas necesarias para el armado del accesorio. ', style="width: 1043px").m-auto

    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Impresión de moldes

    p Para imprimir los moldes en Rhinoceros, se debe seguir un proceso detallado para asegurar una correcta visualización y escala de las piezas. A continuación, se describe el procedimiento paso a paso:

    .titulo-tres.mt-4.text-white: h3 Preparación de la vista y distribución de piezas

    .row.align-items-center.mt-4
      .col-lg-8
        p Antes de imprimir:

        .row.bg-13.r8.align-items-center.justify-content-center.p-3
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img42.png', alt='', style="width: 272px").m-auto
          .col-lg-9
            .row.bg-5.r8
              ul.lista-ul--color.mt-2
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Prepare la vista de la pieza o molde que desea imprimir, ajustando la visualización para mostrar claramente las líneas y detalles necesarios.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Para organizar y optimizar la impresión de piezas pequeñas, se recomienda crear una distribución ordenada con las siguientes características:



      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img43.png', alt='', style="width: 400px").m-auto


    .row.mt-4.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-11.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/img44.svg' style="width:105px").m-auto

          h4.text-center Formato de papel
          p.text-small.text-center Seleccione tamaño carta (puede variar según necesidad).

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-11.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/img45.svg' style="width:105px").m-auto

          h4.text-center Guía de impresión
          p.text-small.text-center Dibuje un rectángulo de 215 mm por 275 mm, equivalente a una hoja carta.

      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.bg-11.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/img46.svg' style="width:105px").m-auto

          h4.text-center Ubicación de piezas
          p.text-small.text-center Distribuya los moldes dentro del rectángulo, aprovechando al máximo el espacio del papel.


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 17.
      span Ubicación de moldes para impresión.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img47.svg', alt='Distribución de los moldes dentro de un rectángulo que representa el tamaño de hoja carta (215 mm x 275 mm), optimizando el espacio para impresión. ', style="width: 1043px").m-auto


    .row.bg-9.mt-4
      .col-12
        .p-4
          .row.align-items-center
            .col-lg-1.d-lg-block.d-none
              figure
                img(src="@/assets/curso/tema1/img48.svg", alt="", style="width: 85px").m-auto
            .col-lg-11
              p Una vez distribuidas las piezas, elimine el rectángulo guía para evitar que se imprima junto con los moldes.


    .titulo-tres.mt-4.text-white: h3 Acceso al comando de impresión

    .row.align-items-center.mt-4
      .col-lg-8
        p Para abrir la ventana de impresión, utilice cualquiera de las siguientes opciones:

        .row.bg-8.r8.align-items-center.justify-content-center.p-3
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img49.png', alt='', style="width: 272px").m-auto
          .col-lg-8
            .row.bg-5.r8
              ul.lista-ul--color.mt-4
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Haciendo clic en el ícono de la impresora en la barra de herramientas.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Escribiendo Imprimir en la línea de comandos y presionando Enter.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Desde el menú Archivo > Imprimir.




      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img50.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 18.
      span Abrir ventana de impresión. 

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img51.png', alt='Apertura de la ventana de impresión en Rhinoceros, que permite configurar parámetros como impresora, tipo de salida, tamaño y escala. ', style="width: 1043px").m-auto

    .titulo-tres.mt-4.text-white: h3 Configuración de parámetros de impresión

    p.mt-4 Al abrir la ventana de impresión, configure los siguientes parámetros:

    .row.bg-12
      .col-12
        .p-5
          .carousel-bg
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4.d-none.d-lg-block
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema1/img52.png", style="height: 405px").m-auto
              .col-lg-8
                SlyderF.custom.mb-5(columnas="col-lg-6 col-md-6 col-xl-6")
                  .tarjeta.tarjeta--slyder.p-5
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img53.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Destino
                    p.text-center.mb-0 Seleccione su impresora o PDF de Rhino si desea guardar digitalmente.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img54.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Tamaño
                    p.text-center.mb-0 Formato carta.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img55.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Resolución
                    p.text-center.mb-0 Use la configuración predeterminada.
                  

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img56.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Unidades
                    p.text-center.mb-0 	Seleccione puntos o centímetros, según preferencia.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img57.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Orientación
                    p.text-center.mb-0 Vertical, para mejor aprovechamiento del espacio.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img58.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Tipo de salida
                    p.text-center.mb-0 Salida vectorial, para líneas y curvas precisas.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img59.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Color de salida
                    p.text-center.mb-0 Blanco y negro es lo más recomendado. Si requiere color para líneas no cortantes, seleccione Color de impresión.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img60.svg", alt='', style="width: 90px").m-auto
                    p.text-center
                      b Vista y escala
                    p.text-center.mb-0 Use la vista superior en trabajos 2D y verifique que la escala sea 1:1.


    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 19.
      span Parámetros de impresión.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img61.svg', alt='Configuración de los parámetros de impresión, donde se ajustan opciones de resolución, orientación y color para asegurar una salida precisa.', style="width: 1043px").m-auto

    .row.bg-9.mt-4
      .col-12
        .p-4
          .row.align-items-center
            .col-lg-1.d-lg-block.d-none
              figure
                img(src="@/assets/curso/tema1/img62.svg", alt="", style="width: 85px").m-auto
            .col-lg-11
              p Esto asegura que 1 mm en papel equivalga a 1 mm en el modelo.


    .titulo-tres.mt-4.text-white: h3 Posicionamiento del área de impresión

    .row.align-items-center.mt-4
      .col-lg-8
        p Una vez configurado todo, aparecerá el recuadro del área de impresión que permite definir qué parte del modelo se imprimirá.

        .row.bg-6.r8.align-items-center.justify-content-center.p-3
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img63.png', alt='', style="width: 272px").m-auto
          .col-lg-8
            .row.bg-5.r8
              ul.lista-ul--color.mt-4
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0  Use el mouse para mover este recuadro sobre los patrones que desea imprimir.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Se recomienda desactivar las opciones Ortogonal y Refobj (Referencia de objeto) en la barra de estado para facilitar el posicionamiento libre del recuadro.


      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img64.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 20.
      span Ubicación de patrones en el área de impresión. 

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img65.svg', alt='Recuadro de impresión ubicado sobre los patrones, delimitando el área exacta que será exportada a papel o PDF. ', style="width: 1043px").m-auto


    .row.bg-9.mt-4
      .col-12
        .p-4
          .row.align-items-center
            .col-lg-1.d-lg-block.d-none
              figure
                img(src="@/assets/curso/tema1/img66.svg", alt="", style="width: 85px").m-auto
            .col-lg-11
              p #[b Nota.] En ocasiones, al manipular el recuadro, aparecerá un mensaje preguntando si desea cambiar la escala para ajustar el tamaño. En ese caso, seleccione No. Esto restablecerá el recuadro a su tamaño original con escala correcta.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 21.
      span Error al manipular el área de impresión.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img67.svg', alt='Mensaje de error que aparece en ocasiones al manipular el recuadro del área de impresión, ofreciendo la opción de ajustar o mantener la escala original. ', style="width: 1043px").m-auto


    .titulo-tres.mt-4.text-white: h3 Confirmación y generación del archivo

    p.mt-4 Cuando ya se han ubicado correctamente las piezas en el área de impresión, se debe proceder con la confirmación final y la ejecución del proceso de impresión o guardado en PDF.

    .row.mt-4
      .col-lg-6
        .row.align-items-center.bg-13.r8.p-4.g-3
          .col-lg-3.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema1/img68.svg", alt="", style="width: 85px").m-auto
          .col-lg-9
            p #[b 01] 
            p Presione Enter para confirmar el área de impresión.

      .col-lg-6
        .row.align-items-center.bg-13.r8.p-4.g-3
          .col-lg-3.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema1/img69.svg", alt="", style="width: 85px").m-auto
          .col-lg-9
            p #[b 02] 
            p Se abrirá el cuadro de diálogo final de impresión.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 22.
      span Patrones listos para impresión.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img70.svg', alt='Mensaje de error que aparece en ocasiones al manipular el recuadro del área de impresión, ofreciendo la opción de ajustar o mantener la escala original. ', style="width: 1043px").m-auto



    .row.align-items-center.mt-4
      .col-lg-8
        p Haga clic en Imprimir:

        .row.bg-4.r8.align-items-center.justify-content-center.p-3
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img71.png', alt='', style="width: 272px").m-auto
          .col-lg-8
            .row.bg-5.r8
              ul.lista-ul--color.mt-4
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Si se imprime directamente: el archivo será enviado a la impresora física.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Si se genera un PDF, el sistema solicitará que:
                    ul.lista-ul--color
                      li.d-flex.align-items-start
                        span.icono-img2
                        p.mb-0 Ingrese un nombre para el archivo.

                      li.d-flex.align-items-start
                        span.icono-img2
                        p.mb-0 Seleccione la ubicación donde desea guardarlo.

                      li.d-flex.align-items-start
                        span.icono-img2
                        p.mb-0 Confirme haciendo clic en Guardar.





      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img64.png', alt='', style="width: 400px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 23.
      span Patrones guardados en PDF. 

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img65.svg', alt='Patrones del tarjetero exportados a PDF, listos para impresión en formato digital. ', style="width: 1043px").m-auto


    .titulo-tres.mt-4.text-white: h3 Verificación final del archivo

    .row.align-items-center.mt-4
      .col-lg-6
        p Por último, abra el archivo PDF para corroborar que estén todas las piezas correctamente impresas.

        .row.justify-content-center.mb-5
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-14.gx-3
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/img72.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left: -10px" )

              .col-lg.d-flex
                .p-5.w-100.align-items-center
                  p Es importante, una vez impreso, verificar que las medidas de los patrones sean exactas, con el fin de asegurar la precisión en el corte y la confección.


      .col-lg-6.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img73.png', alt='', style="width: 609px").m-auto


    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 24.
      span Patrones en archivo PDF.

    .row.bg-7.justify-content-center.align-items-center.p-4
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img74.svg', alt='Archivo PDF abierto con los patrones finales, verificados en sus dimensiones y proporciones antes del corte en material físico ', style="width: 1043px").m-auto



</template>

<script>
export default {
  name: 'Tema1',
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
