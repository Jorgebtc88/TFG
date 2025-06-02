package com.producto.productocatalogo.Service;

import com.producto.productocatalogo.model.Producto;
import com.producto.productocatalogo.model.Talla;
import com.producto.productocatalogo.repository.ProductoRepository;
import com.producto.productocatalogo.repository.TallaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

    @Service
    public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private TallaRepository tallaRepository;

    public List<Producto> getAllProductos() {
        return productoRepository.findAll();
    }

    public Optional<Producto> getProductoById(Long id) {
        return productoRepository.findById(id);
    }

    public List<Producto> getProductosByCategoria(Long categoriaId) {
        return productoRepository.findByCategoriaId(categoriaId);
    }

    public List<Producto> getProductosByGenero(Long generoId) {
        return productoRepository.findByCategoriaGeneroId(generoId);
    }

    public List<Producto> getProductosByNombreGenero(String nombreGenero) {
        return productoRepository.findByCategoriaGeneroNombre(nombreGenero);
    }

    /**
     * Busca productos por nombre de categoría (búsqueda parcial)
     * @param nombreCategoria Nombre o parte del nombre de la categoría
     * @return Lista de productos que coinciden con la categoría
     */
    public List<Producto> buscarProductosPorNombreCategoria(String nombreCategoria) {
        return productoRepository.findByCategoriaNombreContainingIgnoreCase(nombreCategoria);
    }

    public List<Producto> buscarProductosPorNombre(String nombre) {
        return productoRepository.findByNombreContainingIgnoreCase(nombre);
    }

    public List<Producto> getProductosByTalla(String talla) {
        return productoRepository.findByTallasNombre(talla);
    }

    public Producto saveProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    public void deleteProducto(Long id) {
        productoRepository.deleteById(id);
    }

    public Producto addTallaToProducto(Long productoId, String tallaNombre) {
        Producto producto = productoRepository.findById(productoId)
            .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
        
        Talla talla = tallaRepository.findByNombre(tallaNombre);
        if (talla == null) {
            talla = new Talla();
            talla.setNombre(tallaNombre);
            talla = tallaRepository.save(talla);
        }
        
        producto.getTallas().add(talla);
        return productoRepository.save(producto);
    }

    public Producto removeTallaFromProducto(Long productoId, String tallaNombre) {
        Producto producto = productoRepository.findById(productoId)
            .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
        
        Talla talla = tallaRepository.findByNombre(tallaNombre);
        if (talla != null) {
            producto.getTallas().remove(talla);
        }
        
        return productoRepository.save(producto);
    }
}