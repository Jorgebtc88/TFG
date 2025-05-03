# Modelo de Datos - Sistema de Catálogo de Productos

## 1. Diagrama Entidad-Relación (E-R)

```
[Usuario] 1──┐
             │
             ├───N [Pedido] 1──N [DetallePedido] N──1 [Producto]
             │
             ├───1 [Carrito] 1──N [ItemCarrito] N──1 [Producto]
             │
             └───N [Resena] N──1 [Producto]

[Producto] N──1 [Categoria]
          N──1 [Proveedor]

[Categoria] 1──N [Categoria] (self-reference)
```

## 2. Especificación de Campos y Relaciones

### Tabla: usuarios
- **Campos**:
  - `id` (PK, BIGINT, AUTO_INCREMENT)
  - `nombre` (VARCHAR(100), NOT NULL)
  - `email` (VARCHAR(100), NOT NULL, UNIQUE)
  - `password` (VARCHAR(255), NOT NULL)
  - `rol` (ENUM('ADMIN', 'CLIENTE'), DEFAULT 'CLIENTE')
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

### Tabla: productos
- **Campos**:
  - `id` (PK, BIGINT, AUTO_INCREMENT)
  - `nombre` (VARCHAR(100), NOT NULL)
  - `descripcion` (TEXT)
  - `precio` (DECIMAL(10,2), NOT NULL)
  - `image_url` (VARCHAR(255))
  - `stock` (INT, DEFAULT 0)
  - `categoria_id` (FK, BIGINT)
  - `proveedor_id` (FK, BIGINT)
  - `estado` (ENUM('ACTIVO', 'INACTIVO', 'AGOTADO'), DEFAULT 'ACTIVO')
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

### Tabla: categorias
- **Campos**:
  - `id` (PK, BIGINT, AUTO_INCREMENT)
  - `nombre` (VARCHAR(100), NOT NULL)
  - `descripcion` (TEXT)
  - `parent_id` (FK, BIGINT, self-reference)
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

### Tabla: proveedores
- **Campos**:
  - `id` (PK, BIGINT, AUTO_INCREMENT)
  - `nombre` (VARCHAR(100), NOT NULL)
  - `email` (VARCHAR(100))
  - `telefono` (VARCHAR(20))
  - `direccion` (TEXT)
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

### Tabla: pedidos
- **Campos**:
  - `id` (PK, BIGINT, AUTO_INCREMENT)
  - `usuario_id` (FK, BIGINT, NOT NULL)
  - `estado` (ENUM('PENDIENTE', 'CONFIRMADO', 'ENVIADO', 'ENTREGADO', 'CANCELADO'), DEFAULT 'PENDIENTE')
  - `total` (DECIMAL(10,2), NOT NULL)
  - `direccion_envio` (TEXT, NOT NULL)
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

### Tabla: detalles_pedido
- **Campos**:
  - `id` (PK, BIGINT, AUTO_INCREMENT)
  - `pedido_id` (FK, BIGINT, NOT NULL)
  - `producto_id` (FK, BIGINT, NOT NULL)
  - `cantidad` (INT, NOT NULL)
  - `precio_unitario` (DECIMAL(10,2), NOT NULL)
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)

### Tabla: resenas
- **Campos**:
  - `id` (PK, BIGINT, AUTO_INCREMENT)
  - `usuario_id` (FK, BIGINT, NOT NULL)
  - `producto_id` (FK, BIGINT, NOT NULL)
  - `puntuacion` (INT, NOT NULL, CHECK (puntuacion BETWEEN 1 AND 5))
  - `comentario` (TEXT)
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

### Tabla: carritos
- **Campos**:
  - `id` (PK, BIGINT, AUTO_INCREMENT)
  - `usuario_id` (FK, BIGINT, NOT NULL)
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

### Tabla: items_carrito
- **Campos**:
  - `id` (PK, BIGINT, AUTO_INCREMENT)
  - `carrito_id` (FK, BIGINT, NOT NULL)
  - `producto_id` (FK, BIGINT, NOT NULL)
  - `cantidad` (INT, NOT NULL)
  - `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
  - `updated_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)

## 3. Relaciones entre Entidades

1. **Usuario - Pedido**: 1:N
   - Un usuario puede tener múltiples pedidos
   - Cada pedido pertenece a un único usuario

2. **Pedido - DetallePedido**: 1:N
   - Un pedido puede tener múltiples detalles
   - Cada detalle pertenece a un único pedido

3. **Producto - DetallePedido**: 1:N
   - Un producto puede aparecer en múltiples detalles de pedido
   - Cada detalle de pedido referencia a un único producto

4. **Usuario - Carrito**: 1:1
   - Un usuario tiene un único carrito
   - Cada carrito pertenece a un único usuario

5. **Carrito - ItemCarrito**: 1:N
   - Un carrito puede tener múltiples items
   - Cada item pertenece a un único carrito

6. **Producto - ItemCarrito**: 1:N
   - Un producto puede aparecer en múltiples items de carrito
   - Cada item de carrito referencia a un único producto

7. **Usuario - Resena**: 1:N
   - Un usuario puede hacer múltiples reseñas
   - Cada reseña pertenece a un único usuario

8. **Producto - Resena**: 1:N
   - Un producto puede tener múltiples reseñas
   - Cada reseña pertenece a un único producto

9. **Categoria - Producto**: 1:N
   - Una categoría puede tener múltiples productos
   - Cada producto pertenece a una única categoría

10. **Proveedor - Producto**: 1:N
    - Un proveedor puede suministrar múltiples productos
    - Cada producto es suministrado por un único proveedor

11. **Categoria - Categoria**: 1:N (self-reference)
    - Una categoría puede tener múltiples subcategorías
    - Cada subcategoría pertenece a una única categoría padre

## 4. Motor de Base de Datos

Se ha elegido **MySQL 8.0** como motor de base de datos por las siguientes razones:

1. **Robustez y Confiabilidad**:
   - Soporte para transacciones ACID
   - Alto rendimiento en operaciones de lectura/escritura
   - Mecanismos de recuperación robustos

2. **Características Avanzadas**:
   - Soporte para JSON
   - Índices espaciales
   - Particionamiento
   - Replicación

3. **Integración con Spring Boot**:
   - Excelente soporte a través de Spring Data JPA
   - Configuración sencilla
   - Pool de conexiones eficiente

4. **Escalabilidad**:
   - Capacidad para manejar grandes volúmenes de datos
   - Soporte para clustering
   - Optimización de consultas

5. **Seguridad**:
   - Autenticación robusta
   - Control de acceso granular
   - Encriptación de datos

## 5. Implementación de la Base de Datos

La implementación se realiza mediante scripts SQL que incluyen:

1. **Creación de la Base de Datos**:
```sql
CREATE DATABASE IF NOT EXISTS productocatalogo;
USE productocatalogo;
```

2. **Creación de Tablas**:
```sql
CREATE TABLE IF NOT EXISTS usuarios (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol ENUM('ADMIN', 'CLIENTE') DEFAULT 'CLIENTE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

3. **Definición de Restricciones**:
```sql
FOREIGN KEY (categoria_id) REFERENCES categorias(id),
FOREIGN KEY (proveedor_id) REFERENCES proveedores(id)
```

4. **Datos Iniciales**:
```sql
INSERT INTO usuarios (nombre, email, password, rol) VALUES
('Admin', 'admin@example.com', '$2a$10$xn3LI/AjqicFYZFruSwve.681477XaVNaUQbr1gioaWPn4t1KsnmG', 'ADMIN');
```


