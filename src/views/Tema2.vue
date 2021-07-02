<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Uso del color en los anuncios publicitarios
    .row.mb-5
        .col-lg.justify-content-md-center.mb-5
          .bloque-texto-d.color2.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              h3.text-regular Según la Real Academia de la Lengua Española, en su primera definición, el color es una “sensación producida por los rayos luminosos que impresionan los órganos visuales y que depende de la longitud de onda”.

              h3.text-regular El mundo es incoloro. Se podría decir que todo el color que [se ve] no existe. Es una percepción. Los objetos poseen la característica de absorber determinadas partes del espectro lumínico. La luz que no es absorbida se remite y transmite diferentes estímulos de color al de la ambientación general. Al llegar estos estímulos hasta el órgano de la vista, (…) produce una sensación de color.


            .bloque-texto-d__autor 
              .h4.mb-0 TOMi.digital, 2020 
                i.fas.fa-quote-right
              

        .col-12.col-lg-auto.justify-content-md-center.mb-4  
          .justify-content-around.align-items-center
            figure
              img(src='@/assets/tema2/img-1.svg', alt='Marketing')
    
    
    #t_2_1.titulo-segundo
      .h4 2.1 Orígenes
    .row.mb-5
        .col-12.col-lg-auto.justify-content-md-center.mb-4  
          .justify-content-around.align-items-center
            figure
              img(src='@/assets/tema2/img-2.svg', alt='Marketing')

        .col-lg.justify-content-md-center
          .bloque-texto-d.color2.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              h3.text-regular 
                b “El físico y matemático inglés Isaac Newton dio un paso decisivo en la historia del color y estableció un principio hasta hoy aceptado: la luz es color. En 1665 Newton fue quien descubrió que la luz del sol, al pasar a través de un prisma, se divide en varios colores” 
            .bloque-texto-d__autor
              i.fas.fa-quote-right
              p.mb-0 fotonostra.com, s.f.
                        
              
    #t_2_2.titulo-segundo
      .h4 2.2 Bases de la teoría del color    

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rlGfZoeO3Dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

     
      Separador
    #t_2_3.titulo-segundo
      .h4 2.3 Teoría del color de Eva Heller
    
    p.mb-5 A continuación, se describe la teoría del color creada por la autora Eva Heller, que se explica en la página web Viviendo la salud (2020):

    .row.justify-content-around.align-items-center.mb-5
      .col-lg.justify-content-md-center.align-self-center
        p Eva Heller fue una socióloga, psicóloga y escritora de origen alemán, nació en 1948 y falleció en 2008, desarrolló su propia teoría de los colores a partir del estudio de Goethe, publicando su ya clásico libro titulado “La psicología del color”. Es considerada, de hecho, como una de las profesionales más interesadas en el estudio de este campo de la Psicología, y una de sus mayores expresiones.
        p.mb-5 Según esta autora, las asociaciones entre los sentimientos y la razón, respecto a la relación de los colores no se realizan de manera accidental, sino que consisten en auténticas experiencias universales enraizadas profundamente tanto en nuestro pensamiento como en nuestro propio lenguaje.

      .col-12.col-lg-auto.justify-content-md-center.mb-4  
        .justify-content-around.align-items-center
            figure
              img(src='@/assets/tema2/img-3.svg', alt='Marketing')


    
    .row.justify-content-around.align-items-center.mb-5
        .cajon.color-primario.p-4.mb-4.fondo5.col-lg-8
          .col-lg.align-self-center
            h5.p-md-3 Eva Heller considera que todos los colores tienen un significado y se utilizan siempre por un motivo determinado. Nunca se usan al azar, y se convierten en una herramienta de comunicación verdaderamente útil.


    p En su estudio, y sobre todo en su libro, aborda la relación existente entre los colores y nuestros propios sentimientos, proporcionando una gran cantidad de información sobre el significado de los colores y su uso en nuestra cultura, en el diseño de productos, en los distintos test que se basan en colores.              
    separador

    #t_2_4.titulo-segundo
      .h4 2.4 Significado de los colores
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UWSe5bCGNhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      
  









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

<style lang="sass" scoped></style>
