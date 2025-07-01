package com.peluqueriaapp.service;

import com.peluqueriaapp.model.Usuario;
import com.peluqueriaapp.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Servicio encargado de la lógica de negocio relacionada con los usuarios.
 * Contiene métodos para registrar y autenticar usuarios.
 */
@Service
public class UsuarioService {

    // Inyección del repositorio que accede a la base de datos
    @Autowired
    private UsuarioRepository usuarioRepository;

    /**
     * Registra un nuevo usuario, validando que no exista previamente el correo.
     *
     * @param usuario Objeto con los datos a registrar (nombre, correo, contraseña)
     * @return El usuario guardado en la base de datos
     * @throws Exception si el correo ya está registrado
     */
    public Usuario registrarUsuario(Usuario usuario) throws Exception {
        // Verifica si el correo ya existe
        if (usuarioRepository.findByCorreo(usuario.getCorreo()).isPresent()) {
            throw new Exception("Correo ya registrado");
        }

        // Guarda el nuevo usuario
        return usuarioRepository.save(usuario);
    }

    /**
     * Valida el inicio de sesión del usuario comparando correo y contraseña.
     *
     * @param correo Correo ingresado
     * @param contrasena Contraseña ingresada
     * @return El objeto Usuario si las credenciales son correctas
     * @throws Exception si las credenciales son inválidas
     */
    public Usuario validarLogin(String correo, String contrasena) throws Exception {
        // Busca al usuario por correo
        Optional<Usuario> usuario = usuarioRepository.findByCorreo(correo);

        // Si existe y la contraseña coincide, retorna el usuario
        if (usuario.isPresent() && usuario.get().getContrasena().equals(contrasena)) {
            return usuario.get();
        } else {
            throw new Exception("Correo o contraseña incorrectos");
        }
    }
}
