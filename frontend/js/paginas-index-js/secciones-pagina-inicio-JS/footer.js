document.addEventListener("DOMContentLoaded", function () {

  // Función asíncrona para cargar dinámicamente el contenido del footer
  async function loadFooter() {
    // Obtener el contenedor donde se insertará el footer
    const container = document.getElementById('footer');

    // Validar que el contenedor exista en el DOM antes de continuar
    if (!container) {
      console.error('No se encontró el contenedor con id "contacto"'); // Nota: parece un error en el mensaje, debería decir 'footer'
      return; // Salir de la función si no existe el contenedor
    }

    try {
      // Realizar petición para obtener el archivo HTML del footer
      const response = await fetch('./secciones-pagina-principal-html/footer.html');

      // Validar que la respuesta sea exitosa (status HTTP 200-299)
      if (!response.ok) {
        // Lanzar un error con información detallada si falla la carga
        throw new Error(`Error al cargar ${response.url}: ${response.statusText}, ${response.status}`);
      }

      // Obtener el contenido HTML como texto
      const html = await response.text();

      // Insertar el contenido HTML dentro del contenedor 'footer'
      container.innerHTML = html;

    } catch (error) {
      // Captura y log del error en consola para facilitar debugging
      console.error('Fallo al cargar footer:', error);

      // Mostrar mensaje amigable al usuario en caso de fallo de carga
      container.innerHTML = `<div class="mensaje-1"><p>Error al cargar contenido.</p></div>`;
    }
  }

  // Ejecutar la función para cargar el footer cuando el DOM esté completamente cargado
  loadFooter();
});
