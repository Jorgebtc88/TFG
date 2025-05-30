package com.producto.productocatalogo.controller;

import com.producto.productocatalogo.Service.ProductoService;
import com.producto.productocatalogo.model.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controlador REST para gestionar los productos del catálogo
 * Todas las rutas comienzan con /api/productos
 */
@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "*") // Permite peticiones desde cualquier origen (CORS)
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    /**
     * Obtiene todos los productos del catálogo
     * GET /api/productos
     */
    @GetMapping
    public List<Producto> getAllProductos() {
        return productoService.getAllProductos();
    }

    /**
     * Obtiene un producto específico por su ID
     * GET /api/productos/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<Producto> getProductoById(@PathVariable Long id) {
        return productoService.getProductoById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Obtiene todos los productos de una categoría específica
     * GET /api/productos/categoria/{categoriaId}
     */
    @GetMapping("/categoria/{categoriaId}")
    public List<Producto> getProductosByCategoria(@PathVariable Long categoriaId) {
        return productoService.getProductosByCategoria(categoriaId);
    }

    /**
     * Obtiene todos los productos de un género específico por su ID
     * GET /api/productos/genero/{generoId}
     */
    @GetMapping("/genero/{generoId}")
    public List<Producto> getProductosByGenero(@PathVariable Long generoId) {
        return productoService.getProductosByGenero(generoId);
    }

    /**
     * Obtiene todos los productos de un género específico por su nombre
     * GET /api/productos/genero/nombre/{nombreGenero}
     * Ejemplo: /api/productos/genero/nombre/Mujeres
     */
    @GetMapping("/genero/nombre/{nombreGenero}")
    public List<Producto> getProductosByNombreGenero(@PathVariable String nombreGenero) {
        return productoService.getProductosByNombreGenero(nombreGenero);
    }

    /**
     * Busca productos por nombre de categoría (búsqueda parcial)
     * GET /api/productos/buscar/categoria/{nombreCategoria}
     * Ejemplo: /api/productos/buscar/categoria/Pantal
     */
    @GetMapping("/buscar/categoria/{nombreCategoria}")
    public List<Producto> buscarProductosPorNombreCategoria(@PathVariable String nombreCategoria) {
        return productoService.buscarProductosPorNombreCategoria(nombreCategoria);
    }

    /**
     * Busca productos por nombre de producto
     * GET /api/productos/buscar
     */
    @GetMapping("/buscar")
    public List<Producto> buscarProductos(@RequestParam String query) {
        return productoService.buscarProductosPorNombre(query);
    }

    /**
     * Crea un nuevo producto
     * POST /api/productos
     */
    @PostMapping
    public Producto createProducto(@RequestBody Producto producto) {
        return productoService.saveProducto(producto);
    }

    /**
     * Actualiza un producto existente
     * PUT /api/productos/{id}
     */
    @PutMapping("/{id}")
    public ResponseEntity<Producto> updateProducto(@PathVariable Long id, @RequestBody Producto producto) {
        return productoService.getProductoById(id)
                .map(existingProducto -> {
                    producto.setId(id);
                    return ResponseEntity.ok(productoService.saveProducto(producto));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Elimina un producto
     * DELETE /api/productos/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProducto(@PathVariable Long id) {
        return productoService.getProductoById(id)
                .map(producto -> {
                    productoService.deleteProducto(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
