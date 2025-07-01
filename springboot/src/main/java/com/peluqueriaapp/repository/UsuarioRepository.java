package com.peluqueriaapp.repository;

import com.peluqueriaapp.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Repositorio de acceso a datos para la entidad Usuario.
 * Extiende JpaRepository, lo que permite realizar operaciones CRUD sin escribir SQL.
 */
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    /**
     * Busca un usuario por su correo electrónico.
     * Spring implementa automáticamente esta consulta a partir del nombre del método.
     * 
     * @param correo el correo electrónico del usuario a buscar
     * @return un Optional que contiene al usuario si se encuentra, o vacío si no
     */
    Optional<Usuario> findByCorreo(String correo);
}
