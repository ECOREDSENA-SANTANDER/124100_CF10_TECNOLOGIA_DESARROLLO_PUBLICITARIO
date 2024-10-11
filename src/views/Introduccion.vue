<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="zoom-in-left") Le invitamos a consultar atentamente el video que se presenta a continuación, con el fin de iniciar su recorrido formativo sobre el diseño de piezas gráficas.
    figure.mb-5(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/1q_A8j3laoE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Introducción - Diseño de piezas gráficas
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
