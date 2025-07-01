package com.peluqueriaapp.dto;

/**
 * Clase DTO (Data Transfer Object) para encapsular
 * los datos del formulario de inicio de sesión.
 */
public class LoginRequest {

    // Campo para el correo electrónico del usuario
    private String correo;

    // Campo para la contraseña del usuario
    private String contrasena;

    // Getter para obtener el correo
    public String getCorreo() {
        return correo;
    }

    // Setter para establecer el correo
    public void setCorreo(String correo) {
        this.correo = correo;
    }

    // Getter para obtener la contraseña
    public String getContrasena() {
        return contrasena;
    }

    // Setter para establecer la contraseña
    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
}
