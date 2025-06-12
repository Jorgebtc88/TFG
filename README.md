# Tienda de Comercio Electrónico 

## Descripción
Aplicación web moderna para la gestión y visualización de productos de moda, desarrollada con tecnologías actuales y siguiendo las mejores prácticas de desarrollo. El sistema permite a los usuarios explorar productos, gestionar favoritos, realizar compras y administrar su perfil, mientras que los administradores tienen acceso a un panel completo para la gestión de productos, pedidos y usuarios.

## Características Principales

### Frontend
- Interfaz de usuario moderna y responsiva desarrollada con React
- Navegación intuitiva con React Router
- Gestión de estado global con Context API
- Diseño adaptable a diferentes dispositivos
- Sistema de filtrado avanzado de productos
- Carrito de compras en tiempo real
- Gestión de favoritos
- Panel de administración completo
- Autenticación y autorización de usuarios
- Búsqueda en tiempo real
- Notificaciones interactivas

### Backend
- API RESTful desarrollada con Spring Boot
- Seguridad implementada con Spring Security y JWT
- Persistencia de datos con JPA y MySQL
- Gestión de usuarios y roles
- Sistema de autenticación robusto
- Manejo de productos y categorías
- Gestión de pedidos
- Validación de datos
- Documentación de API

## Tecnologías Utilizadas

### Frontend
- React 19
- React Router DOM
- Axios
- Bootstrap 5
- TailwindCSS
- Vite
- ESLint
- PostCSS

### Backend
- Java 17
- Spring Boot 3.2.3
- Spring Security
- Spring Data JPA
- MySQL
- JWT
- Lombok
- Maven

## Requisitos del Sistema

### Frontend
- Node.js (versión 18 o superior)
- npm o yarn
- Navegador web moderno

### Backend
- Java 17 o superior
- Maven
- MySQL 8.0 o superior

## Instalación

### Frontend
```bash
cd ecom-catalog-react.Frontend
npm install
npm run dev
```

### Backend
```bash
cd productocatalogo.backend
mvn clean install
mvn spring-boot:run
```

## Configuración

### Base de Datos
1. Crear una base de datos MySQL
2. Configurar las credenciales en `application.properties`
3. Ejecutar el script SQL inicial

### Variables de Entorno
Configurar las siguientes variables en el backend:
- `JWT_SECRET`
- `DB_URL`
- `DB_USERNAME`
- `DB_PASSWORD`

## Estructura del Proyecto
```
├── ecom-catalog-react.Frontend/
│   ├── src/
│   │   ├── assets/           # Imágenes, íconos, etc.
│   │   ├── components/       # Componentes reutilizables (botones, tarjetas, etc.)
│   │   ├── context/          # Contextos de React
│   │   ├── contexts/         # (Posible duplicado, revisar)
│   │   ├── pages/            # Páginas del sitio
│   │   │   └── admin/        # Panel de administración
│   │   ├── services/         # Llamadas a la API
│   │   ├── App.jsx           # Componente raíz
│   │   ├── Header.jsx        # Encabezado de navegación
│   │   ├── Cart.jsx          # Vista del carrito
│   │   ├── config.js         # Configuración global (URL API, etc.)
│   │   └── main.jsx          # Punto de entrada
│   └── public/               # Archivos estáticos públicos (favicon, index.html, etc.)
│
└── productocatalogo.backend/
    ├── src/
    │   └── main/
    │       ├── java/com/producto/productocatalogo/
    │       │   ├── config/         # Configuraciones de CORS, Swagger, etc.
    │       │   ├── controller/     # Endpoints REST
    │       │   ├── exception/      # Clases para manejar errores personalizados
    │       │   ├── model/          # Entidades JPA (Producto, Categoría, Usuario, etc.)
    │       │   ├── repository/     # Interfaces JpaRepository
    │       │   ├── security/       # Filtros JWT, configuración de seguridad
    │       │   └── service/        # Servicios con lógica de negocio
    │       └── resources/
    │           └── application.properties
    └── pom.xml
```

## Características de Seguridad
- Autenticación basada en JWT
- Protección contra CSRF
- Validación de datos
- Sanitización de entradas
- Control de acceso basado en roles
- Encriptación de contraseñas
- Headers de seguridad



