# peluqueriaApp

Backend para los módulos de **registro e inicio de sesión** de una aplicación web de peluquería, desarrollado como parte de la evidencia GA7-220501096-AA3-EV01.

## Desarrollador
**John Jairo Zamudio Agudelo**

## Tecnologías utilizadas
- Java 17 (jdk-17.0.15)
- Spring Boot 3.2.0
- Maven 3.8.6
- MySQL
- JPA / Hibernate

## ¿Qué incluye este backend?
- Registro de usuarios (`POST /api/usuarios/register`)
- Inicio de sesión (`POST /api/usuarios/login`)
- Validación contra base de datos `peluqueria_db`

## Estructura del proyecto
- `controller/` – Controladores REST
- `service/` – Lógica de negocio
- `repository/` – Acceso a datos con JPA
- `model/` – Entidades JPA
- `dto/` – Clases de transferencia de datos

## Conexión a base de datos
Configurada en `application.properties` con el siguiente acceso:
```
URL: jdbc:mysql://localhost:3306/peluqueria_db
Usuario: root
Contraseña: (vacía)
```

## Ejecución del Módulo Backend

Para ejecutar el backend desarrollado en Spring Boot, se recomienda utilizar Maven 
desde la raíz del proyecto. Asegúrese de que el servicio de base de datos MySQL esté 
activo y que exista la base de datos `peluqueria_db`.

```bash
mvn clean install
mvn spring-boot:run
```

## 🔗 Repositorio del proyecto
[https://github.com/Spiner007/peluqueriaApp.git](https://github.com/Spiner007/peluqueriaApp.git)

### Ejecución del Módulo Frontend

Para facilitar la visualización del módulo frontend desarrollado en HTML, CSS y JavaScript, se presentan dos métodos de ejecución local, considerando tanto entornos con herramientas de desarrollo modernas como alternativas multiplataforma.

#### 🧪 Método recomendado: Live Server (Visual Studio Code)

1. Abrir la carpeta del proyecto `peluqueriaApp` con Visual Studio Code.
2. Navegar a `frontend/html/index.html`.
3. Hacer clic derecho sobre `index.html` y seleccionar la opción **"Open with Live Server"**.
4. El archivo se visualizará automáticamente en el navegador, generalmente en la siguiente dirección:
   ```
   http://127.0.0.1:5500/frontend/html/index.html
   ```

> Este método simula un entorno web real, con recarga automática, ideal para pruebas durante el desarrollo.

---

#### 💡 Método alternativo: Servidor local utilizando Python

En ausencia de Visual Studio Code o Live Server, se puede iniciar un servidor HTTP local con Python 3 desde la raíz del proyecto.

1. Verificar que Python esté instalado:
   ```bash
   python --version
   ```
2. Desde la terminal o PowerShell, ubicarse en la carpeta raíz del proyecto `peluqueriaApp`:
   ```bash
   cd C:\Users\John\Desktop\peluqueriaApp
   ```
3. Ejecutar el siguiente comando:
   ```bash
   python -m http.server 5500
   ```
4. Acceder desde el navegador a la siguiente dirección:
   ```
   http://localhost:5500/frontend/html/index.html
   ```

> Este método permite servir los archivos estáticos de forma local, emulando un entorno de despliegue básico.

---

**Nota**: Las rutas a los recursos estáticos (CSS y JS) deben estar configuradas de forma **relativa**, para asegurar su correcta carga sin importar el método de ejecución.
