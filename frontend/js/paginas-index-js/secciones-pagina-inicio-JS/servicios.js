document.addEventListener("DOMContentLoaded", function () {

  // Función asíncrona para cargar el contenido de la sección "servicios"
  async function loadServicios() {
    // Obtener el contenedor en el DOM donde se insertará el contenido
    const container = document.getElementById('servicios');

    // Verificar que el contenedor exista para evitar errores
    if (!container) {
      console.error('No se encontró el contenedor con id "servicios"');
      return; // Salir si no existe el contenedor
    }

    try {
      // Realizar petición HTTP para obtener el archivo HTML con los servicios
      const response = await fetch('./secciones-pagina-principal-html/servicios.html');

      // Verificar que la respuesta sea exitosa (status 200-299)
      if (!response.ok) {
        // Lanzar error detallado si la respuesta no es correcta
        throw new Error(`Error al cargar ${response.url}: ${response.statusText}, ${response.status}`);
      }

      // Extraer el contenido HTML como texto
      const html = await response.text();

      // Insertar el contenido HTML dentro del contenedor
      container.innerHTML = html;

    } catch (error) {
      // Mostrar error en consola para diagnóstico
      console.error('Fallo al cargar servicios:', error);

      // Informar al usuario con un mensaje visible en el contenedor
      container.innerHTML = `<p>Error al cargar contenido.</p>`;
    }
  }

  // Invocar la función para cargar servicios una vez que el DOM esté listo
  loadServicios();

});
