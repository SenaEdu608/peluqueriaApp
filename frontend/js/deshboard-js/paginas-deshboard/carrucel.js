document.addEventListener("DOMContentLoaded", function () {
  // Función asíncrona para cargar el carrusel dinámicamente
  async function loadCarrucel() {
    // Obtiene el contenedor principal donde se insertará el carrusel
    const container = document.getElementById('principal');

    // Validación: si no existe el contenedor, muestra error y sale
    if (!container) {
      console.error('No se encontró el contenedor con id "Carrucel"');
      return; 
    }

    try {
      // Realiza petición fetch para obtener el HTML del carrusel
      const response = await fetch('./deshboard-html/carrucel.html');

      // Valida que la respuesta sea exitosa, si no lanza error
      if (!response.ok) {
        throw new Error(`Error al cargar ${response.url}: ${response.statusText}, ${response.status}`);
      }

      // Extrae el contenido HTML como texto
      const html = await response.text();

      // Inserta el HTML del carrusel en el contenedor
      container.innerHTML = html;

      // Variables para controlar el estado del carrusel
      let index = 0;
      const slides = document.querySelectorAll('.carrusel .slide');
      const totalSlides = slides.length;

      // Función que cambia la diapositiva activa
      function changeSlide() {
        // Quita la clase 'active' de la diapositiva actual
        slides[index].classList.remove('active');

        // Incrementa índice y lo reinicia cuando supera total de diapositivas
        index = (index + 1) % totalSlides;

        // Añade clase 'active' a la diapositiva siguiente
        slides[index].classList.add('active');
      }

      // Cambia la diapositiva cada 3 segundos automáticamente
      setInterval(changeSlide, 3000);

    } catch (error) {
      // Captura errores en la carga y muestra mensaje en consola y en UI
      console.error('Fallo al cargar Carrucel:', error);
      container.innerHTML = `<p>Error al cargar contenido.</p>`;
    }
  }

  // Invoca la función para cargar el carrusel al cargar el DOM
  loadCarrucel();
});
