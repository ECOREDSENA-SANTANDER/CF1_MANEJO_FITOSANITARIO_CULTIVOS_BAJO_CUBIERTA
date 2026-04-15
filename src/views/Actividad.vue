<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad_Completar_Frases
      //<ActividadCompletar :parrafo="parrafo"/>

      #Actividad_Cuestionario
      <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
//import ActividadCompletar from '@/views/plantilla/actividadCompletar/ActividadCompletar.vue'
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    //ActividadCompletar,
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprender los principios básicos del manejo fitosanitario.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo de los cultivos bajo cubierta?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Depender del clima natural', esCorrecta: false },
            { id: 'b', texto: 'Reducir el uso de agua', esCorrecta: false },
            {
              id: 'c',
              texto: 'Controlar las condiciones ambientales',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de fertilizantes',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué estructura se utiliza comúnmente en cultivos bajo cubierta?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Terreno abierto', esCorrecta: false },
            { id: 'b', texto: 'Invernadero', esCorrecta: true },
            { id: 'c', texto: 'Pastizal', esCorrecta: false },
            { id: 'd', texto: 'Bosque natural', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué variable se controla dentro de un invernadero?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mareas', esCorrecta: false },
            { id: 'b', texto: 'Presión atmosférica global', esCorrecta: false },
            { id: 'c', texto: 'Temperatura', esCorrecta: true },
            { id: 'd', texto: 'Rotación terrestre', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es una ventaja clave de los cultivos bajo cubierta?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Menor inversión', esCorrecta: false },
            { id: 'b', texto: 'Producción estacional', esCorrecta: false },
            { id: 'c', texto: 'Mayor exposición al clima', esCorrecta: false },
            {
              id: 'd',
              texto: 'Producción durante todo el año',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué condición dentro del invernadero favorece enfermedades?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Baja humedad', esCorrecta: false },
            { id: 'b', texto: 'Alta ventilación', esCorrecta: false },
            { id: 'c', texto: 'Alta humedad relativa', esCorrecta: true },
            { id: 'd', texto: 'Baja temperatura constante', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué problema puede causar la mala ventilación en cultivos bajo cubierta?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Menor crecimiento de raíces',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Acumulación de humedad', esCorrecta: true },
            { id: 'c', texto: 'Reducción de nutrientes', esCorrecta: false },
            { id: 'd', texto: 'Sequía del suelo', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué tipo de cultivo es común bajo cubierta?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Árboles forestales', esCorrecta: false },
            { id: 'b', texto: 'Hortalizas', esCorrecta: true },
            { id: 'c', texto: 'Pastos extensivos', esCorrecta: false },
            { id: 'd', texto: 'Cultivos silvestres', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué sistema mejora el uso eficiente del agua en estos cultivos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Riego por inundación', esCorrecta: false },
            { id: 'b', texto: 'Riego manual', esCorrecta: false },
            { id: 'c', texto: 'Riego por goteo', esCorrecta: true },
            { id: 'd', texto: 'Lluvia natural', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué factor aumenta la propagación de plagas dentro del invernadero?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Baja densidad de plantas', esCorrecta: false },
            { id: 'b', texto: 'Alta ventilación', esCorrecta: false },
            { id: 'c', texto: 'Alta densidad de siembra', esCorrecta: true },
            { id: 'd', texto: 'Suelo seco', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué práctica reduce la entrada de plagas al invernadero?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Uso de fertilizantes', esCorrecta: false },
            { id: 'b', texto: 'Riego constante', esCorrecta: false },
            { id: 'c', texto: 'Mallas anti-insectos', esCorrecta: true },
            { id: 'd', texto: 'Podas frecuentes', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué ocurre si no se controla el microclima en un cultivo bajo cubierta?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mejora la producción', esCorrecta: false },
            { id: 'b', texto: 'Disminuyen los costos', esCorrecta: false },
            {
              id: 'c',
              texto: 'Se favorecen enfermedades',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Aumenta la ventilación', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de enfermedad es más común en ambientes húmedos y cerrados?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Virales', esCorrecta: false },
            { id: 'b', texto: 'Nutricionales', esCorrecta: false },
            { id: 'c', texto: 'Fúngicas', esCorrecta: true },
            { id: 'd', texto: 'Mecánicas', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué herramienta se usa para monitorear insectos en invernaderos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Termómetro', esCorrecta: false },
            { id: 'b', texto: 'Trampas adhesivas', esCorrecta: true },
            { id: 'c', texto: 'Fertilizadores', esCorrecta: false },
            { id: 'd', texto: 'Regaderas', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué indica la presencia de condensación en el invernadero?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Buen manejo del clima', esCorrecta: false },
            { id: 'b', texto: 'Exceso de humedad', esCorrecta: true },
            { id: 'c', texto: 'Falta de riego', esCorrecta: false },
            { id: 'd', texto: 'Baja temperatura', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué práctica mejora la sanidad del cultivo bajo cubierta?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aumentar densidad', esCorrecta: false },
            { id: 'b', texto: 'Reducir ventilación', esCorrecta: false },
            { id: 'c', texto: 'Limpieza y desinfección', esCorrecta: true },
            { id: 'd', texto: 'Uso excesivo de químicos', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué método del MIPE se aplica primero en cultivos bajo cubierta?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Control químico', esCorrecta: false },
            { id: 'b', texto: 'Control biológico', esCorrecta: false },
            { id: 'c', texto: 'Métodos preventivos', esCorrecta: true },
            {
              id: 'd',
              texto: 'Eliminación total de plagas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué beneficio tiene la producción fuera de temporada?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Menor calidad', esCorrecta: false },
            { id: 'b', texto: 'Mayor riesgo', esCorrecta: false },
            { id: 'c', texto: 'Mejores precios de mercado', esCorrecta: true },
            { id: 'd', texto: 'Menor producción', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué puede ocurrir con una mala desinfección del sustrato?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mayor producción', esCorrecta: false },
            { id: 'b', texto: 'Menor consumo de agua', esCorrecta: false },
            { id: 'c', texto: 'Aparición de patógenos', esCorrecta: true },
            { id: 'd', texto: 'Mejor ventilación', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué factor incrementa los costos en cultivos bajo cubierta?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Uso de luz natural', esCorrecta: false },
            { id: 'b', texto: 'Bajo mantenimiento', esCorrecta: false },
            { id: 'c', texto: 'Costos energéticos', esCorrecta: true },
            { id: 'd', texto: 'Lluvias constantes', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué se logra con un monitoreo constante en invernadero?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aumentar plagas', esCorrecta: false },
            { id: 'b', texto: 'Detectar problemas a tiempo', esCorrecta: true },
            { id: 'c', texto: 'Reducir ventilación', esCorrecta: false },
            { id: 'd', texto: 'Eliminar fertilización', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de los conceptos sobre Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo Fundamentos del manejo fitosanitario en cultivos bajo cubierta.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
