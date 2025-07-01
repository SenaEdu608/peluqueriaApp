package com.peluqueriaapp.controller;

// Importaciones necesarias para manejar peticiones HTTP y objetos
import com.peluqueriaapp.model.Usuario;
import com.peluqueriaapp.dto.LoginRequest;
import com.peluqueriaapp.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// Indica que esta clase es un controlador REST (retorna JSON)
@RestController

// Define la ruta base para este controlador
@RequestMapping("/api/usuarios")

// Permite peticiones desde cualquier origen (necesario para frontend en otro puerto)
@CrossOrigin(origins = "*")
public class UsuarioController {

    // Inyección automática del servicio de usuarios
    @Autowired
    private UsuarioService usuarioService;

    /**
     * Endpoint para registrar un nuevo usuario.
     * @param usuario objeto que contiene los datos del nuevo usuario (nombre, correo, contraseña)
     * @return mensaje de éxito o error en formato JSON
     */
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Usuario usuario) {
        try {
            // Intenta registrar al usuario usando el servicio
            usuarioService.registrarUsuario(usuario);

            // Devuelve mensaje de éxito en formato JSON
            return ResponseEntity.ok().body("{\"message\": \"Usuario registrado con éxito\"}");
        } catch (Exception e) {
            // Si hay error (por ejemplo, correo ya registrado), devuelve mensaje de error
            return ResponseEntity
                    .badRequest()
                    .body("{\"message\": \"" + e.getMessage().replace("\"", "'") + "\"}");
        }
    }

    /**
     * Endpoint para iniciar sesión de un usuario.
     * @param loginRequest objeto con correo y contraseña ingresados
     * @return mensaje de éxito o error en formato JSON
     */
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            // Verifica si el login es válido
            usuarioService.validarLogin(loginRequest.getCorreo(), loginRequest.getContrasena());

            // Devuelve mensaje de login exitoso
            return ResponseEntity.ok().body("{\"message\": \"Inicio de sesión exitoso\"}");
        } catch (Exception e) {
            // Si las credenciales son inválidas, devuelve mensaje de error
            return ResponseEntity
                    .badRequest()
                    .body("{\"message\": \"" + e.getMessage().replace("\"", "'") + "\"}");
        }
    }
}
