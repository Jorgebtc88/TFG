package com.producto.productocatalogo.Service;

import com.producto.productocatalogo.model.Producto;
import com.producto.productocatalogo.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

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

    public Producto saveProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    public void deleteProducto(Long id) {
        productoRepository.deleteById(id);
    }
}