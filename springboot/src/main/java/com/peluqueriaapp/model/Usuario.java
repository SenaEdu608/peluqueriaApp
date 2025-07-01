package com.peluqueriaapp.model;

import jakarta.persistence.*;

/**
 * Entidad que representa un usuario en la base de datos.
 * Esta clase se mapea directamente con la tabla "usuarios".
 */
@Entity
@Table(name = "usuarios")
public class Usuario {

    /**
     * Identificador único del usuario (clave primaria).
     * Se genera automáticamente usando auto-incremento.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Nombre completo del usuario.
     */
    private String nombre;

    /**
     * Correo electrónico del usuario.
     * Debe ser único en la base de datos.
     */
    @Column(unique = true)
    private String correo;

    /**
     * Contraseña del usuario.
     * (Nota: en proyectos reales debería estar cifrada)
     */
    private String contrasena;

    // -------------------- MÉTODOS GET Y SET --------------------

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }
}
