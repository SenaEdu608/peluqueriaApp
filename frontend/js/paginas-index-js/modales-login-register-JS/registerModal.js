document.addEventListener("DOMContentLoaded", function () {
  const modalContainer = document.getElementById("modal-container");

  /**
   * Función para abrir el modal de registro
   * Carga el HTML del modal y configura los eventos
   */
  async function openRegisterModal() {
    try {
      // Cargar el HTML del modal de registro
      const res = await fetch('./modal-login-register-html/modal-register.html');
      if (!res.ok) throw new Error(`Error al cargar ${res.url}: ${res.statusText}, ${res.status}`);
      const html = await res.text();
      modalContainer.innerHTML = html;
      setupRegisterModalEvents();
    } catch (error) {
      console.error(error);
      alert("Error al cargar el formulario de registro");
    }
  }

  /**
   * Configura los eventos del modal de registro
   */
  function setupRegisterModalEvents() {
    // Botón para cerrar el modal
    const closeBtn = document.querySelector("[data-close]");
    if (closeBtn) {
      closeBtn.addEventListener("click", function() {
        modalContainer.innerHTML = "";
      });
    }

    // Enlace para cambiar al modal de login
    const linkComando = document.getElementById("linkComando");
    if (linkComando) {
      linkComando.addEventListener("click", function (e) {
        e.preventDefault();
        openLoginModal();
      });
    }

    // Manejar el envío del formulario de registro
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
      registerForm.addEventListener("submit", async function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById("registro-nombre").value;
        const correo = document.getElementById("registro-correo").value;
        const contrasena = document.getElementById("resistro-contrasena").value;
        const confirmarContrasena = document.getElementById("confirmar-contrasena").value;
        
   // Validación de campos vacíos
if (!nombre.trim() || !correo.trim() || !contrasena.trim() || !confirmarContrasena.trim()) {
  alert("Todos los campos son obligatorios.");
  return;
}

// Validar email con expresión regular
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(correo)) {
  alert("Por favor, ingrese un correo electrónico válido.");
  return;
}

// Validar longitud mínima de la contraseña
if (contrasena.length < 6) {
  alert("La contraseña debe tener al menos 6 caracteres.");
  return;
}

// Validar que las contraseñas coincidan
if (contrasena !== confirmarContrasena) {
  alert("Las contraseñas no coinciden.");
  return;
}

        
        try {
          // Enviar datos al backend
          const response = await fetch('http://localhost:8080/api/usuarios/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nombre: nombre,
              correo: correo,
              contrasena: contrasena
            })
          });
          
          // Procesar la respuesta
          const result = await response.json();
          
          if (response.ok) {
            alert(result.message);
            // Cerrar modal de registro y abrir el de login
            modalContainer.innerHTML = "";
            openLoginModal();
          } else {
            alert(result.message);
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Error al conectar con el servidor");
        }
      });
    }
  }

  // Configurar el evento para el enlace de registro en la página principal
  const registerLink = document.getElementById("registerLink");
  if (registerLink) {
    registerLink.addEventListener("click", function (e) {
      e.preventDefault();
      openRegisterModal();
    });
  }

  // Hacer la función accesible globalmente
  window.openRegisterModal = openRegisterModal;
});