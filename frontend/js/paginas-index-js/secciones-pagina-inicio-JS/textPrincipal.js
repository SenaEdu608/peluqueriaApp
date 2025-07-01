document.addEventListener("DOMContentLoaded", function () {

  // Función asíncrona para cargar el contenido HTML de la sección 'textPrincipal'
  async function loadTextPrincipal() {
    // Obtener el contenedor donde se insertará el contenido
    const container = document.getElementById('textPrincipal');

    // Validar que el contenedor exista para evitar errores en la manipulación del DOM
    if (!container) {
      console.error('No se encontró el contenedor con id "textPrincipal"');
      return; // Salir si no existe el contenedor
    }

    try {
      // Realizar la petición fetch para obtener el archivo HTML externo
      const response = await fetch('./secciones-pagina-principal-html/textPrincipal.html');

      // Validar que la respuesta HTTP sea correcta (status 200-299)
      if (!response.ok) {
        throw new Error(`Error al cargar ${response.url}: ${response.statusText}, ${response.status}`);
      }

      // Extraer el contenido HTML como texto
      const html = await response.text();

      // Insertar el HTML obtenido dentro del contenedor
      container.innerHTML = html;

      // Buscar el botón con id 'abrirLogin' para agregar funcionalidad
      const abrirLoginBtn = document.getElementById("abrirLogin");

      if (abrirLoginBtn) {
        // Agregar listener para evitar el comportamiento por defecto (navegación)
        abrirLoginBtn.addEventListener("click", function (e) {
          e.preventDefault();

          // Verificar que la función global openRegisterModal exista antes de invocarla
          if (typeof window.openRegisterModal === 'function') {
            window.openRegisterModal(); // Abrir modal de registro
          } else {
            // Informar en consola si la función no está definida para facilitar debugging
            console.warn('openRegisterModal no está definido en window');
          }
        });
      }

    } catch (error) {
      // Manejo de errores: mostrar en consola y notificar al usuario visualmente
      console.error('Fallo al cargar el texto principal:', error);
      container.innerHTML = `<div class="mensaje-2"><p>Error al cargar contenido.</p></div>`;
    }
  }

  // Ejecutar la carga del contenido cuando el DOM esté completamente cargado
  loadTextPrincipal();

});
