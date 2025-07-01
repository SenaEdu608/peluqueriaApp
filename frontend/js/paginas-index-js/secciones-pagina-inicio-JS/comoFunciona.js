document.addEventListener("DOMContentLoaded", function () {

  // Función asíncrona para cargar dinámicamente la sección "Cómo Funciona"
  async function loadComoFunciona() {
    // Obtener el contenedor donde se insertará el contenido
    const container = document.getElementById('comoFunciona');

    // Validar que el contenedor exista en el DOM
    if (!container) {
      console.error('No se encontró el contenedor con id "comoFunciona"');
      return; // Salir si no existe para evitar errores
    }

    try {
      // Solicitar el archivo HTML con el contenido de la sección "Cómo Funciona"
      const response = await fetch('./secciones-pagina-principal-html/comoFunciona.html');

      // Validar que la respuesta fue exitosa
      if (!response.ok) {
        throw new Error(`Error al cargar ${response.url}: ${response.statusText}, ${response.status}`);
      }

      // Obtener el contenido HTML como texto
      const html = await response.text();

      // Insertar el contenido dinámicamente en el contenedor
      container.innerHTML = html;

      // Seleccionar todos los elementos con clase 'box' dentro del contenido cargado
      const boxes = document.querySelectorAll('.box');

      // Añadir un listener al scroll para activar animaciones al hacer scroll
      window.addEventListener('scroll', checkBoxes);

      // Ejecutar la función una vez para evaluar el estado inicial de las cajas
      checkBoxes();

      // Función que añade o remueve la clase 'show' según la posición de cada caja en la ventana
      function checkBoxes() {
        // Definir el punto de activación para mostrar la caja: 80% desde la parte superior de la ventana
        const triggerBottom = window.innerHeight / 5 * 4;

        // Iterar sobre cada caja y evaluar su posición relativa al viewport
        boxes.forEach(box => {
          const boxTop = box.getBoundingClientRect().top;

          // Si la parte superior de la caja está por encima del trigger, mostrarla
          if (boxTop < triggerBottom) {
            box.classList.add('show');
          } else {
            // De lo contrario, ocultarla quitando la clase 'show'
            box.classList.remove('show');
          }
        });
      }

    } catch (error) {
      // Manejo de error en la carga del contenido
      console.error('Fallo al cargar comoFunciona:', error);

      // Mostrar mensaje de error al usuario en el contenedor
      container.innerHTML = `<p>Error al cargar contenido.</p>`;
    }
  }

  // Llamar a la función para cargar la sección cuando el DOM esté listo
  loadComoFunciona();
});
