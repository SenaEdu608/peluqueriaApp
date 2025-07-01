document.addEventListener("DOMContentLoaded", function () {
  const modalContainer = document.getElementById("modal-container");

  /**
   * Función para abrir el modal de login
   */
  async function openLoginModal() {
    try {
      // Cargar el HTML del modal de login
      const res = await fetch('./modal-login-register-html/modal-login.html');
      if (!res.ok) throw new Error(`Error al cargar ${res.url}: ${res.statusText}, ${res.status}`);
      const html = await res.text();
      modalContainer.innerHTML = html;
      setupLoginModalEvents();
    } catch (error) {
      console.error(error);
      alert("Error al cargar el formulario de login");
    }
  }

  /**
   * Configura los eventos del modal de login
   */
  function setupLoginModalEvents() {
    // Botón para cerrar el modal
    const closeBtn = document.querySelector("[data-close]");
    if (closeBtn) {
      closeBtn.addEventListener("click", function() {
        modalContainer.innerHTML = '';
      });
    }

    // Enlace para cambiar al modal de registro
    const urlRegister = document.getElementById("urlRegister");
    if (urlRegister) {
      urlRegister.addEventListener("click", function (e) {
        e.preventDefault();
        openRegisterModal();
      });
    }

    // Manejar el envío del formulario de login
    const loginForm = document.getElementById("loginregister");
    if (loginForm) {
      loginForm.addEventListener("submit", async function(e) {
        e.preventDefault();
        
        
  const correo = document.getElementById("login-correo").value.trim();
const contrasena = document.getElementById("login-contrasena").value.trim();
const mensajeDiv = document.getElementById("mensaje");

// Limpiar mensaje anterior
mensajeDiv.textContent = "";

// Validar campos vacíos
if (!correo || !contrasena) {
  mensajeDiv.textContent = "Por favor, complete todos los campos.";
  mensajeDiv.style.color = "red";
  return;
}

// Validar formato de correo electrónico
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(correo)) {
  mensajeDiv.textContent = "Ingrese un correo electrónico válido.";
  mensajeDiv.style.color = "red";
  return;
}

        
        try {
          // Enviar datos al backend
          const response = await fetch('http://localhost:8080/api/usuarios/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              correo: correo,
              contrasena: contrasena
            })
          });
          
          // Procesar la respuesta
          const result = await response.json();
          const mensajeDiv = document.getElementById("mensaje");
          
          if (response.ok) {
            mensajeDiv.textContent = result.message;
            mensajeDiv.style.color = "green";
            
            // Redirigir después de login exitoso
            setTimeout(() => {
              window.location.href = "/frontend/html/bienvenido.html";
            }, 1500);
          } else {
            mensajeDiv.textContent = result.message;
            mensajeDiv.style.color = "red";
          }
        } catch (error) {
          console.error("Error:", error);
          document.getElementById("mensaje").textContent = "Error al conectar con el servidor";
          document.getElementById("mensaje").style.color = "red";
        }
      });
    }
  }

  // Configurar el evento para el enlace de login en la página principal
  const loginLink = document.getElementById("loginLink");
  if (loginLink) {
    loginLink.addEventListener("click", function (e) {
      e.preventDefault();
      openLoginModal();
    });
  }

  // Hacer la función accesible globalmente
  window.openLoginModal = openLoginModal;
});