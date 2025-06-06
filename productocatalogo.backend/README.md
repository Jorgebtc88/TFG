# Producto Catálogo Backend

Este es el backend de la aplicación Producto Catálogo, desarrollado con Spring Boot.

## Requisitos Previos

- Java 17 o superior
- MySQL 8.0 o superior
- Maven

## Configuración de la Base de Datos

1. Crear la base de datos:
```sql
CREATE DATABASE `producto-catalogo`;
```

2. Crear el usuario y asignar permisos:
```sql
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'Admin123!@#2024';
GRANT ALL PRIVILEGES ON `producto-catalogo`.* TO 'admin'@'localhost';
FLUSH PRIVILEGES;
```

3. Restaurar la base de datos desde el backup (opcional):
```bash
mysql -u admin -p producto-catalogo < producto-catalogo-backup-20250605.sql
```

## Configuración del Proyecto

### Variables de Entorno
Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:
```
DB_USERNAME=admin
DB_PASSWORD=Admin123!@#2024
DB_NAME=producto-catalogo
```

### Configuración de Spring Boot
El archivo `application.properties` está configurado con los siguientes parámetros:
```properties
spring.application.name=productocatalogo
server.port=8000

# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/producto-catalogo
spring.datasource.username=admin
spring.datasource.password=Admin123!@#2024
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

# Logging Configuration
logging.level.org.springframework=DEBUG
logging.level.com.producto=DEBUG
```

## Estructura del Proyecto

```
productocatalogo.backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── producto/
│   │   │           ├── controller/
│   │   │           ├── model/
│   │   │           ├── repository/
│   │   │           └── service/
│   │   └── resources/
│   │       └── application.properties
│   └── test/
├── .env
├── pom.xml
└── README.md
```

## Ejecución del Proyecto

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
```

2. Navegar al directorio del proyecto:
```bash
cd productocatalogo.backend
```

3. Dar permisos de ejecución al wrapper de Maven:
```bash
chmod +x mvnw
```

4. Iniciar la aplicación:
```bash
./mvnw spring-boot:run
```

La aplicación estará disponible en `http://localhost:8000`

## Endpoints de la API

### Productos
- `GET /api/productos` - Obtener todos los productos
- `GET /api/productos/{id}` - Obtener un producto por ID
- `POST /api/productos` - Crear un nuevo producto
- `PUT /api/productos/{id}` - Actualizar un producto existente
- `DELETE /api/productos/{id}` - Eliminar un producto

### Categorías
- `GET /api/categorias` - Obtener todas las categorías
- `GET /api/categorias/{id}` - Obtener una categoría por ID
- `POST /api/categorias` - Crear una nueva categoría
- `PUT /api/categorias/{id}` - Actualizar una categoría existente
- `DELETE /api/categorias/{id}` - Eliminar una categoría

## Seguridad

- Las credenciales de la base de datos están almacenadas en el archivo `.env`
- El archivo `.env` está incluido en `.gitignore` para evitar que se suba al repositorio
- Se recomienda cambiar las contraseñas en producción

## Solución de Problemas

### Error de Conexión a la Base de Datos
1. Verificar que MySQL esté corriendo:
```bash
sudo systemctl status mysql
```

2. Verificar que el usuario tenga los permisos correctos:
```sql
SHOW GRANTS FOR 'admin'@'localhost';
```

3. Verificar que la base de datos existe:
```sql
SHOW DATABASES LIKE 'producto-catalogo';
```

### Error al Iniciar la Aplicación
1. Verificar que Java 17 está instalado:
```bash
java -version
```

2. Verificar que Maven está instalado:
```bash
mvn -version
```

3. Limpiar y reconstruir el proyecto:
```bash
./mvnw clean install
```

## Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 