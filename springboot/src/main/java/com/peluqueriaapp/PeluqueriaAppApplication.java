package com.peluqueriaapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Clase principal de la aplicación.
 * Contiene el método main que lanza la aplicación Spring Boot.
 *
 * La anotación @SpringBootApplication indica que esta clase:
 * - Habilita la configuración automática
 * - Habilita el escaneo de componentes
 * - Define esta clase como punto de entrada
 */
@SpringBootApplication
public class PeluqueriaAppApplication {

    /**
     * Método principal que inicia la aplicación Spring Boot.
     * @param args argumentos de línea de comandos
     */
    public static void main(String[] args) {
        // Lanza la aplicación, configurando el contexto de Spring
        SpringApplication.run(PeluqueriaAppApplication.class, args);
    }
}
