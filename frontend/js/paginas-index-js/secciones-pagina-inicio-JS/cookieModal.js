document.addEventListener('DOMContentLoaded', function () {

  // Función asíncrona para cargar y gestionar el modal de consentimiento de cookies
  async function loadCookieModal() {
    // Obtener el contenedor donde se insertará el modal
    const container = document.getElementById('cookie-modal'); 

    try {
      // Solicitar el HTML del modal de cookies de forma dinámica
      const response = await fetch('./secciones-pagina-principal-html/cookieModal.html');
      const html = await response.text();

      // Insertar el contenido HTML dentro del contenedor
      container.innerHTML = html;

      // Obtener referencias a elementos clave dentro del modal
      const modal = document.getElementById('cookieModal');
      const btnAccept = document.getElementById('btnAccept');
      const btnDecline = document.getElementById('btnDecline');

      // Mostrar modal solo si el usuario no ha dado consentimiento previamente
      if (!localStorage.getItem('cookieConsent')) {
        modal.classList.remove('hidden'); // Quitar clase que oculta el modal
      }

      // Evento para aceptar cookies: guardar estado y ocultar modal
      btnAccept.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'accepted'); // Guardar consentimiento en localStorage
        modal.classList.add('hidden'); // Ocultar modal
      });

      // Evento para rechazar cookies: guardar estado y ocultar modal
      btnDecline.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'declined'); // Guardar rechazo en localStorage
        modal.classList.add('hidden'); // Ocultar modal
      });

    } catch (error) {
      // Captura y log de errores en la carga del modal
      console.error('Error al cargar el modal de cookies:', error);
    }
  }

  // Ejecutar la función para cargar el modal cuando el DOM esté listo
  loadCookieModal();
});
