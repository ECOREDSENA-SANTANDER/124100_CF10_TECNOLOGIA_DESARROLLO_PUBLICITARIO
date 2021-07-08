<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Desarrollo de la pieza gráfica
    p.mb-5 Para el desarrollo de una pieza gráfica se debe tener en cuenta una serie de pasos, los cuales se explicarán a continuación.

    #t_4_1.titulo-segundo
      .h4 4.1 Primer paso, el esbozo 

    .row.mb-4
        .col-lg.justify-content-md-center
          P Derivado del término italiano bozzetto, el concepto de #[strong boceto] refiere al #[strong esquema] o el #[strong proyecto] que sirve de bosquejo para cualquier obra. Se trata de una guía que permite volcar y exhibir sobre un papel una idea general antes de arribar al trabajo que arrojará un resultado final.
          p Es una #[strong ilustración esquemática] que carece de detalles y, en la mayoría de los casos, no posee terminaciones. Su objetivo es simbolizar ideas, pensamientos o conceptos, sin preocuparse por la estética. Por eso, generalmente se realiza sobre cualquier clase de hoja y sin necesidad de disponer de instrumentos de dibujo auxiliares (Definición de, 2020).
          p Sabiendo ya un poco de contexto, lo primero que se debe hacer es desarrollar esbozos de piezas gráficas en los que se evidencie el concepto, el mensaje y los objetivos de comunicación de la campaña.


        .col-12.col-lg-auto.justify-content-md-center.mb-4
          .my-4
            .sep.p-2 Figura 49 Boceto

          figure
            img(src='@/assets/tema4/img-1.svg', alt='Boceto')
            figcaption Nota. SENA (2020).

    .row.justify-content-around.align-items-center
        .cajon.color-primario.p-4.mb-4.fondo6.col-10
          .col-lg.align-self-center
            p.p-md-3 Hay que tener presente que al momento en que se comience el bocetaje se debe contar con los elementos que se incluirán en la pieza gráfica: textos, imágenes, logos, etc., así como el brief, concepto y demás; el boceto pretende plasmar en borrador, sin detalle, lo que finalmente será una pieza gráfica.

    p Como ejemplo de este proceso se realizará una pieza gráfica de jugo natural de sandía, buscando representar gráficamente la frescura y resaltar los colores de la fruta. Para ello, se hace el boceto con los elementos que deben estar presentes en la pieza, incluyendo el envase, la fruta, salpicaduras de jugo, así como los textos, tal como se muestra en la figura 49. 
    p Más adelante se verá cómo queda esta pieza gráfica digitalizada.
    p.mb-5 El creativo publicitario ve las cosas desde el punto de vista de las personas y desde la perspectiva del negocio, y al desarrollar una pieza gráfica su objetivo no es ganar premios, sino vender productos por medio del mensaje, por ello es un trabajo anónimo. A partir de lo anterior, el portal web Marketing capacitación (2017) aconseja lo siguiente:

    .col-lg-12
      .bloque-texto-a.color1.b.p-4.p-md-5.mb-5.fondo7
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3
              figure
                img(src='@/assets/tema4/img-2.svg', alt='Promoción de ventas')          
            .col-lg-9.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                    p No es necesario demostrar sofisticación en los textos; palabras breves, simples y de fácil entendimiento harán que el receptor pueda recordarlo por más tiempo. Las frases cumplen la misma regla, no más de 12 palabras; se debe cerrar con un llamado a la acción, en el tono adecuado para que el lector se levante y salga a buscar lo que le ofrecen. 
    
    p.mb-5 Antes de empezar, piense en el receptor del mensaje y hágase las siguientes preguntas:
    figure.mb-5
      img(src='@/assets/tema4/img-3.svg', alt='Promoción de ventas')  
    p.mb-5 Al crear el mensaje formule algunas preguntas que le ayuden a encontrar el estilo y el contenido, por ejemplo:   
    .row.justify-content-around.align-items-center
      .mb-4
        figure.mb-5.img-500
          img(src='@/assets/tema4/img-4.svg', alt='Promoción de ventas')      

    p.mb-5 El mensaje debe sentirse personal. Cuando un lector se encuentre con su anuncio, lo fundamental es que sienta que va dirigido a él; se debe vincular emocionalmente al potencial cliente con el producto, no solo contarle para qué sirve el producto o el servicio, también dejarle saber cómo lo hará sentir.
    separador
    #t_4_2.titulo-segundo
      .h4 4.2 Construcción de la pieza gráfica
    .row.justify-content-around.align-items-center
        .p-4.mb-4.col-10
          .col-lg.align-self-center
            figure.mb-5
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/iUqz6wVm-Es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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
