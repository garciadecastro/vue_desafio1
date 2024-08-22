const app = Vue.createApp({
  data() { //Esta función retorna un objeto con las propiedades que se utilizarán en nuestra app
      return {
          isContentContainerActive: true, // BOOLEANO Controla si la clase content-container está activa
          titulo: "Cine Fantástico", // Título de la página
          peliculas: [ //Info de las pelis
              {
                  nombre: "El mago de Oz",
                  imagen: "img/El mago de Oz.jpg",
                  descripcion: "Película clásica estadounidense de 1939, basada en el libro de L. Frank Baum. Narra las aventuras de Dorothy, una niña que es llevada por un tornado a la tierra de Oz, donde debe enfrentarse a la malvada bruja del Oeste y encontrar al poderoso mago que puede ayudarla a volver a casa. El mago de Oz es considerada una de las películas más influyentes y queridas de la historia del cine y destaca por su uso del color, sus canciones y sus efectos especiales."
              },
              {
                  nombre: "El séptimo sello",
                  imagen: "img/El séptimo sello.jpg",
                  descripcion: "Esta película sueca, dirigida por Ingmar Bergman, es una obra maestra del cine existencialista de 1957. Ambientada en la Edad Media, durante la peste negra. Cuenta la historia de un caballero que regresa de las Cruzadas y se encuentra con la Muerte, con la que juega una partida de ajedrez por su vida. El séptimo sello es una reflexión sobre el sentido de la vida, la fe, la muerte y el arte, y contiene escenas memorables como la danza macabra. "
              },
              {
                  nombre: "El laberinto del fauno",
                  imagen: "img/El laberinto del fauno.jpg",
                  descripcion: "Por último, esta película española-mexicana de 2006, dirigida por Guillermo del Toro, es una fábula oscura que mezcla la realidad y la fantasía. Situada en el año 1944, en el contexto de la posguerra española, narra las peripecias de Ofelia, una niña que descubre un mundo mágico en el que debe cumplir tres pruebas para convertirse en la princesa de un reino subterráneo. El laberinto del fauno es una película que explora temas como la inocencia, la crueldad, el sacrificio y la rebelión y que cuenta con un diseño visual impresionante y una banda sonora emotiva. "
              }
          ]
      };
  }
});

app.mount('#texto');