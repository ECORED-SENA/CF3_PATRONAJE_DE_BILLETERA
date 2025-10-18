<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Patronaje digital de billeteras: construcción, despiece y maqueta',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar los conocimientos del aprendiz en la elaboración de patrones digitales de billeteras mediante el uso del <em>software</em> Rhinoceros, aplicando técnicas de trazado, despiece, referenciado e impresión.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal del componente formativo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar bolsos de cuero con herramientas manuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Elaborar patrones digitales de billeteras con criterios técnicos y estéticos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Analizar tendencias de moda en marroquinería.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear renders digitales de billeteras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué acción se debe realizar primero al iniciar el trazado en Rhinoceros?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Guardar el archivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Seleccionar la capa correspondiente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Dibujar un círculo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar el tipo de línea.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el tamaño base del rectángulo para el patrón del tarjetero?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '90 mm x 80 mm.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '70 mm x 70 mm.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '100 mm x 70 mm.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '120 mm x 60 mm.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué herramienta se utiliza para separar polilíneas en segmentos individuales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recortar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Descomponer.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Unir.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Escalar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es la función del aumento de 2 mm en los contornos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilitar el refilado y ajuste final de las piezas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mejorar la estética del patrón.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la durabilidad del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Permitir la impresión a mayor escala.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué información debe incluirse en el referenciado de moldes?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nombre del aprendiz y fecha.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nombre del molde, material, cantidad y dimensiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Logo del <em>software</em> y versión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Color y tipo de costura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el formato predeterminado para guardar archivos en Rhinoceros?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '.pdf',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '.dwg',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '.3dm',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '.stl',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué comando permite reflejar elementos para asegurar simetría en los patrones?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Unir.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desfasar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reflejar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cortar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la medida del ribete usado en los cuerpos del tarjetero?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '80 mm x 18 mm.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '85 mm x 16 mm.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '100 mm x 20 mm.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '90 mm x 15 mm.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué función tiene la maqueta en el proceso de patronaje?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decorar el producto final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar proporciones y funcionalidad antes del corte definitivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir costos de materiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar el diseño de forma teórica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El espaldar de la billetera debe ser más pequeño que el cuerpo principal.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El patrón del centro de la billetera funciona como eje de simetría y punto de doblez.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El patrón de refilado elimina el aumento de 2 mm del contorno.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'En la impresión, la escala recomendada es de 1:2 para mejor visualización.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'El patrón de forro del espaldar incluye el aumento de 10 mm.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
