<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Composición gráfica en los anuncios publicitarios
    .bloque-texto-d.color2.p-4.mb-5
      .bloque-texto-d__texto.mb-2
        i.fas.fa-quote-left
        h3.text-regular Una de las partes más importantes y decisivas a la hora de crear un nuevo proyecto de diseño gráfico es el estudio de la composición. Esto es, la disposición de los distintos elementos dentro del espacio visual, de manera equilibrada y ordenada, con el fin de transmitir un mensaje al público objetivo. El éxito de un proyecto gráfico reside fundamentalmente en una composición perfecta que sea capaz de transmitir una idea de manera sencilla y directa. Hay que tener claro desde un primer momento qué elementos se van a incluir, y de qué manera se van a combinar para crear una estructura compositiva armónica. Dentro de la composición entran en juego aspectos como el tamaño, las texturas, los colores, los pesos, etc., cada uno de ellos debe estar en concordancia y dispuestos de manera equilibrada. 
        .bloque-texto-d__autor 
              .h6.mb-0 Estudio mique, s.f.
                i.fas.fa-quote-right
       
    #t_3_1.titulo-segundo
      .h4 3.1 Leyes de la composición
    p.mb-5 Las siguientes leyes son tomadas del portal web del autor Pato Giacomino (2014):


    TabsA.color-primario.mb-5
      .tarjeta.color-primario--borde.p-4(titulo="Ley de la unidad")
        h4 Ley de la unidad o del orden estético
        .col-8.row.justify-content-around.align-items-center.img-c.mb-3
              .spam.my-4 
                spam.sep.p-1 Figura 16 Ley de la unidad o del orden estético
              figure
                  img(src='@/assets/tema3/img-1.svg', alt='Consecuencia extrema')
                  figcaption  Nota. Marca registrada Duracell (s.f.).
        p La función de una composición debe resolverse en la unidad, es decir, en una armonía viva y total entre lenguaje y signo, entre contenido y forma. Por consiguiente, la unidad en la composición es el fin último de toda la organización de las fuerzas, una unidad vital para el mismo fin: la unidad estética del producto, el arte. En la siguiente figura se puede ver un ejemplo.
      

      .tarjeta.color-primario--borde.p-4(titulo="Ley de la armonía")
        h4 Ley de la armonía
        .col-8.row.justify-content-around.align-items-center.img-c.mb-3
              .spam.my-4 
                spam.sep.p-1 Figura 17 Ley de la armonía
              figure
                  img(src='@/assets/tema3/img-2.svg', alt='Consecuencia extrema')
                  figcaption  Nota. Marca registrada MOEN (s.f.).
        p Un diseño es armónico cuando hay un cierto equilibrio, una relación positiva entre líneas y masas. Una composición con diseño armonioso provoca sensación de unidad, de que todo fluye apropiadamente y que todo está en el lugar adecuado. La armonía del color es a menudo el factor clave del éxito de un diseño, como se muestra en la siguiente figura. 

      .tarjeta.color-primario--borde.p-4(titulo="Ley de la variedad")
        h4 Ley de la variedad y el interés
        .col-8.row.justify-content-around.align-items-center.img-c.mb-3
              .spam.my-4 
                spam.sep.p-1 Figura 18 Ley de la variedad y el interés
              figure
                  img(src='@/assets/tema3/img-3.svg', alt='Ley de la variedad y el interés')
                  figcaption  Nota. Marca registrada Gibson Brands (s.f.).
        p Esta ley consiste en el modo de escoger los elementos que forman la composición. Su presencia consiste en la necesidad de crear un interés que, a su vez, tiene su razón de ser en la misma variedad que provoca la novedad de la composición, como se muestra en la siguiente figura.
      .tarjeta.color-primario--borde.p-4(titulo="Ley del resalte")
        h4 Ley del resalte y la subordinación
        .col-8.row.justify-content-around.align-items-center.img-c.mb-3
              .spam.my-4 
                spam.sep.p-1 Figura 19 Ley del resalte y la subordinación
              figure
                  img(src='@/assets/tema3/img-4.svg', alt='Ley del resalte y la subordinación')
                  figcaption  Nota. Artista Michael Miller Yu y el diseñador gráfico Eric Chan (2002).
        p La ley del resalte exige que en cada composición haya un elemento dominante, según el significado y la finalidad de la misma composición. Establecer en cada composición un punto principal de atracción significa obrar con lógica para obtener la unidad requerida. En la figura 19 se muestra un ejemplo.
      .tarjeta.color-primario--borde.p-4(titulo="Ley de contraste")
        h4 Ley de contraste o del conflicto
        .col-8.row.justify-content-around.align-items-center.img-c.mb-3
              .spam.my-4 
                spam.sep.p-1 Figura 20 Ley de contraste o del conflicto
              figure
                  img(src='@/assets/tema3/img-5.svg', alt='Ley de contraste o del conflicto')
                  figcaption  Tomado de Adsoftheworld.com
        p Un elemento se distingue del resto por su singularidad, por ser específico. Un objeto puede contrastar con otros por el color, la forma, el tamaño y las cualidades intrínsecas del propio objeto. Esta característica parece ser una constante esencial de orden compositivo general; el principio del contraste va ligado a la ley del resalte y de la subordinación, del ritmo y del equilibrio.
        

    .row.justify-content-around.align-items-center.p-5.fondo1 
      .col-12.col-lg-auto.justify-content-md-center.m-4  
        figure
          img(src="@/assets/tema3/img-6.svg")

      .col-lg.justify-content-md-center.align-self-center
        h3 Técnicas de composición
            p.mb-4 Una composición exitosa significa que se ha organizado, distribuido, alineado y compilado el diseño de manera tal, que no solo se vea bien, sino que también sea altamente funcional y efectivo. Por esta razón, a continuación, se indicarán unos cuantos consejos, trucos y técnicas que harán que se domine la composición en un abrir y cerrar de ojos.
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/tecnicas_composicion.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

    separador
 
    #t_3_2.titulo-segundo
      .h4 3.2 La sección áurea
    p.mb-5 De acuerdo con Rodríguez (2020) del portal web Market In House:

    .row.justify-content-around.align-items-center
      .col-10.mb-5
        .bloque-texto-b.color-secundario.p-4.izq
            .bloque-texto-b__texto
              p.mb-0 La proporción áurea cuenta con diversos nombres, se puede llamar #[strong proporción áurea, número áureo] o incluso la divina proporción, al final todas estas palabras significan lo mismo. La proporción áurea parte de un #[strong número irracional] (1:1.618), el cual proviene de la  #[strong sucesión de Fibonacci]. 
        .bloque-texto-b.color-secundario.p-4.der
            .bloque-texto-b__texto
              p.mb-0 Se emplea este principio  #[strong dentro de un rectángulo] que se ajusta a los parámetros del #[strong número áureo (1.618)]. Al ser ajustado se puede ver la sucesión de Fibonacci. A medida que se hace la #[strong espiral] se van sacando #[strong segmentos] dentro del rectángulo, cuyos valores son los mismos que los de la sucesión de Fibonacci (1, 2, 3, 5, 8, 13, 21, 34, etc.). Como se ha podido ver, realizar la divina proporción es más simple si se aplica en la práctica. Este principio es fundamental dentro del mundo del diseño y ayudará a realizar obras simétricamente estéticas.         
    .row.justify-content-around.fondo2.p-5
      .col-md-5.p-4
        p En la siguiente figura se puede ver un ejemplo.
        p Un buen ejemplo es el logo de #[strong Apple]; la #[strong manzana más famosa] no fue diseñada así por casualidad. Parte de la espiral áurea y a raíz de ella se fue generando progresivamente, de esta manera todas las formas del logo fueron realizadas siguiendo la proporción áurea que se sacó al principio. Otro caso bastante curioso es el del logo de #[strong BP]; parece simplemente una #[strong figura geométrica] pero realmente emplea la proporción áurea para definir el tamaño de sus pétalos además de su forma y ancho, sacando como referencia la circunferencia de los #[strong pétalos amarillos] y empleando esa espiral en el resto del logo, como se ve en la siguiente figura.
      .col-md-7
        SlyderC(:datos="datosSlyder")
    
    .row.justify-content-around.align-items-center
      .col-10.my-5
        p La publicidad, la fotografía de modas y el mundo de la moda, en general, ha vivido durante años un ambiente de críticas debido a la necesidad de mostrar el ideal de belleza que como sociedad se ha impuesto, por supuesto, presionados por estándares que no siempre son realistas

    .row.mb-5
      .col-md-6.fondo3.p-5
        .p-5
          .spam.my-4 
            spam.sep.p-1 Figura 36 Patrón de fisionomía

          figure
            img(src='@/assets/tema3/img-9.svg', alt='Texto que describa la imagen')
            figcaption  Nota. Garden Style (2020).
          p En el siguiente ejemplo se puede ver un patrón de fisonomía, atendiendo a la proporción áurea, claro está, la industria de la moda se apoya en la tecnología de retoque fotográfico para ello.
      .col-md-6.fondo4.p-5
        .p-5
          .spam.my-4 
            spam.sep.p-1 Figura 37 Técnicas de composición
          figure.mb-3
            img(src='@/assets/tema3/img-10.svg', alt='Texto que describa la imagen')
            figcaption  Nota. Xavier Roca Sancho (2016).
          p Por supuesto, no siempre es necesario editar para lograr esta proporción ideal, simplemente haciendo uso de técnicas de composición se puede lograr; tal como se evidencia en el ejemplo que se encuentra a continuación.

    .row.mx-5.mb-5
      .col-md-6.mb-5
        h3.titulo-tercero La escala
        p En el diseño gráfico, las propiedades de los elementos visuales son relativas, dependen del resto de elementos presentes en la composición. En este caso, la escala hace referencia a la relación entre los tamaños y otras características de las piezas que forman el diseño con sus vecinas.
        p "Otras características" hacen referencia al aspecto global de un elemento, por ejemplo, si se usan colores más vivos, oscuros o contrastados, la "presencia" o sensación visual de tamaño resulta mayor que la de otros elementos más pálidos, claros o difuminados, como se muestra en la siguiente figura.

        
      .col-md-6.mb-5

          .spam.my-4 
            spam.sep.p-1 Figura 38 La escala 
          figure.mb-3
            img(src='@/assets/tema3/img-11.svg', alt='Texto que describa la imagen')
            figcaption  Tomado de Adsoftheworld.com

      .bloque-texto-d.color2.p-4
        .bloque-texto-d__texto.mb-2
          i.fas.fa-quote-left
          h3.text-regular La proporción relativa entre elementos debe ser equilibrada, usando una escala correcta. En una composición gráfica la escala se usa tanto para distribuir el espacio como para equilibrar las proporciones de los elementos. 
          .bloque-texto-d__autor 
                .h6.mb-0 FotoNostra, 2020
                  i.fas.fa-quote-right
    separador

    #t_3_3.titulo-segundo
      .h4 3.3 Layout
    .row.mx-5
      .col-md-6.mb-5      
        .bloque-texto-d.color2.p-4.mb-5.b-t
          .bloque-texto-d__texto.mb-2
            i.iii.fas.fa-quote-left
            h3.text-regular La palabra #[strong Layout] sirve para hacer referencia al #[strong esquema que será utilizado y cómo están distribuidos los elementos y formas dentro de un diseño]. Es un vocablo del idioma inglés, y no existe o no forma parte del texto del diccionario de la Real Academia Española; sin embargo, se traduce como #[strong disposición, plan o diseño]. 
            .bloque-texto-d__autor 
                  .h6.mb-0 Significados, 2020
                    i.iii.fas.fa-quote-right

      .col-md-6.mb-5      
        .bloque-texto-d.color2.p-4.mb-5.b-t
          .bloque-texto-d__texto.mb-2
            i.iii.fas.fa-quote-left
            h3.text-regular El layout, en términos publicitarios, expone el arreglo de los elementos gráficos dentro de un anuncio en un soporte determinado. Coordina la medida y posición de cada uno de los elementos y recursos que componen un anuncio o pieza publicitaria.
            .bloque-texto-d__autor 
                  .h6.mb-0 Pix, 2013
                    i.iii.fas.fa-quote-right
    
    h3.titulo-tercero Tipos de layout

    p.mb-5 A través de piezas gráficas de la marca registrada Coca-Cola se mostrarán algunos ejemplos de los tipos de layout presentes, para entender con mayor claridad este concepto.

    SlyderB.mb-5(:datos="datosSlyder2")

    #t_3_4.titulo-segundo
      .h4 3.4 Tipografías
    p.mb-5 De acuerdo con lo indicado por Morales (2016) en su portal web:        

    .row.justify-content-around.align-items-center
      .col-10.mb-5
        .bloque-texto-b.color-secundario.pt-4.px-4.izq2
            .bloque-texto-b__texto
              p.mb-0 La tipografía se encarga de la materialización visual del lenguaje verbal, es decir, de la escritura.

        .bloque-texto-b.color-secundario.p-4.der2
            .bloque-texto-b__texto
              p.mb-0 Es el arte de jugar con los elementos gráficos del texto escrito: usar los espacios y definir la forma de las letras de acuerdo con algún objetivo específico, que puede ir desde optimizar la legibilidad del texto hasta adecuarlo para que exprese algún concepto como elegancia.     

    .row.justify-content-around.align-items-center.p-5
      .col-lg-6.justify-content-md-center
        p Para tener una idea más clara se selecciona simplemente los tipos de letra de los menús de los programas de procesamiento de texto, diseño o video. Esto significa que todas las posibilidades tipográficas entre las que se escoge diariamente en Word, por ejemplo, no están allí por arte de magia, sino que cada una ha sido pensada, dibujada y materializada por alguien con algún objetivo.
        p Estos conceptos son elementales para entender el territorio en que se mueve la tipografía. Cuando se habla de forma se hace referencia a lo tangible, a lo que se ve, es decir, el trazo, la geometría, el estilo y el eje de inclinación de las letras. El significado por su parte es algo mental, es el concepto, idea o emoción que la forma transmite, es el mensaje de la tipografía.

      .col-lg-6.justify-content-md-center
        figure
          img(src='@/assets/tema3/img-17.svg', alt='Marketing')

      p A partir de ahí la tipografía cobra un nuevo sentido, pues se puede entender que no son simples trazos dibujados al azar, sino que cada una con sus rasgos característicos comparte una historia, provoca emociones y transmite un mensaje específico y determinado.

      p.mb-5 Vea en la siguiente figura cómo se aplica esto a alguna de las familias tipográficas más importantes.


    SlyderB.mb-5(:datos="datosSlyder3")


    
                           





</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder3: [
      {
        texto:
          '<h3>Serif</h3>Se caracterizan por tener pequeños trazos que se extienden en los extremos de las letras, expresan un sentido clásico y tradicional<br><br><h3>Sin serif</h3>A diferencia de las serif, estas no tienen trazos que sobresalen de sus extremos, sino cortes limpios y precisos, son de mejor legibilidad y se las relaciona con modernidad y elegancia.',
        imagen: require('@/assets/tema3/img-18-.svg'),
      },
      {
        titulo: 'Manuscrita',
        texto:
          'Depende del contexto en que se use puede expresar diversión o modernidad; sin embargo, no son muy legibles en textos largos, por lo que hay que tener cuidado con su uso.<br><br>Ahora bien, para complementar lo indicado por Morales (2016), el portal web Goodwill Community Foundation (2020) manifiesta los elementos a tener en cuenta en la tipografía como la jerarquía, el interlineado, el espaciado y el interletraje, los cuales se explican a continuación.',
        imagen: require('@/assets/tema3/img-19-.svg'),
      },
      {
        titulo: 'La jerarquía',
        texto:
          'Es utilizada para guiar el ojo del lector a lo más importante. En otras palabras, le muestra dónde comenzar y a dónde ir, usando diferentes niveles de énfasis.<br><br>Establecer una jerarquía es simple, se debe decidir qué recursos quiere que el lector note primero y luego hacer que se destaquen. Los elementos más importantes suelen ser más grandes, más gruesos o diferentes de alguna manera. Recuerde que es mejor mantener una forma sencilla y usar solo algunos estilos complementarios. A continuación, se muestra un ejemplo.',
        imagen: require('@/assets/tema3/img-20-.svg'),
      },
      {
        titulo: 'El interlineado',
        texto:
          'Es el área entre las líneas del texto, también conocido como espacio vertical. Si no está seguro de cuánta distancia debe dejar, no se preocupe, el valor predeterminado usualmente es el correcto. El objetivo es hacer que su texto sea cómodo para leer; mucho o muy poco espacio puede ser molesto para el lector. En la siguiente figura puede ver un ejemplo de interlineado.',
        imagen: require('@/assets/tema3/img-21-.svg'),
      },
      {
        titulo: 'El espaciado',
        texto:
          'Es la distancia general entre los caracteres o letras; la mayoría de los programas permiten reducir o aumentar esto según sus necesidades. En algunos diseños, puede ajustar el espacio para crear cierto efecto; también puede ayudarle a entender y a arreglar las fuentes que están mal espaciadas, como se muestra en la siguiente figura.',
        imagen: require('@/assets/tema3/img-22-.svg'),
      },
      {
        titulo: 'El interletraje',
        texto:
          'Es el espacio entre letras específicas. A diferencia del espaciado, cambia en el transcurso de la palabra porque cada letra encaja diferente; algunas fuentes tienen mal interletraje, lo que hace que las letras se vean mal espaciadas; si utiliza una fuente que tenga esto, es mejor elegir otra. En la siguiente figura se muestra un ejemplo de interletraje.',
        imagen: require('@/assets/tema3/img-23-.svg'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Póster',
        texto:
          'Estas piezas publicitarias hacen énfasis en la parte visual, ocupando todo el espacio con una sola imagen que narra una historia con sencillez y transmite emociones con un concepto bien logrado, tal como se muestra en la siguiente figura.',
        imagen: require('@/assets/tema3/img-12-.svg'),
      },
      {
        titulo: 'Axial',
        texto:
          'En este tipo de layout se distribuyen los elementos teniendo como referencia los ejes del plano cartesiano X (horizontal), Y (vertical) y Z (profundidad). De esta manera, se puede ver en el siguiente ejemplo de botellas de Coca-Cola, cómo estas muestran la evolución del envase a través de la historia de la marca.',
        imagen: require('@/assets/tema3/img-13-.svg'),
      },
      {
        titulo: 'Silueta',
        texto:
          'El layout silueta busca mostrar el producto de una manera etérea, resaltando su forma sobre un plano limpio, tal como se muestra en la figura 41.',
        imagen: require('@/assets/tema3/img-14-.svg'),
      },
      {
        titulo: 'Mondrian o reticular',
        texto:
          'Para esa disposición se muestran diferentes formas del mismo producto o se resaltan trozos de un mismo elemento, para presentar detalles de este, como se puede observar en la figura.',
        imagen: require('@/assets/tema3/img-15-.svg'),
      },
      {
        titulo: 'Tipográfico',
        texto:
          'En este tipo de layout se muestra como protagonista el texto, acompañado de elementos gráficos; en la figura 43 se muestra un ejemplo.',
        imagen: require('@/assets/tema3/img-16-.svg'),
      },
    ],

    datosSlyder: [
      {
        titulo: 'Figura 34  Sección áurea logo Apple ',
        texto:
          'Tomado de https://fluyeycrea.com/guia-de-composicion-con-la-proporcion-aurea/',
        imagen: require('@/assets/tema3/img-7-.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Figura 35  Sección áurea logo BP',
        texto: 'Nota. Rodríguez (2020).',
        imagen: require('@/assets/tema3/img-8-.svg'),
      },
    ],
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
