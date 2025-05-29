-- Categorías
INSERT INTO categoria (nombre) VALUES ('Camisetas');
INSERT INTO categoria (nombre) VALUES ('Pantalones');
INSERT INTO categoria (nombre) VALUES ('Zapatillas');

-- Géneros
INSERT INTO genero (nombre) VALUES ('Hombre');
INSERT INTO genero (nombre) VALUES ('Mujer');
INSERT INTO genero (nombre) VALUES ('Unisex');

-- Productos
INSERT INTO producto (nombre, descripcion, precio, stock, categoria_id, genero_id) VALUES ('Camiseta Básica', 'Camiseta de algodón 100%', 19.99, 100, 1, 1);
INSERT INTO producto (nombre, descripcion, precio, stock, categoria_id, genero_id) VALUES ('Pantalón Vaquero', 'Pantalón vaquero clásico', 49.99, 50, 2, 1);
INSERT INTO producto (nombre, descripcion, precio, stock, categoria_id, genero_id) VALUES ('Zapatillas Running', 'Zapatillas para running', 79.99, 30, 3, 3); 