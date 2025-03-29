package com.producto.productocatalogo.Service;


import com.producto.productocatalogo.model.Producto;
import com.producto.productocatalogo.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {
    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }
public List<Producto> getAllProducts() {
    return productoRepository.findAll();
}
public List<Producto> getProductoByCategoria(Long CategoriaId) {
    return productoRepository.findByCategoriaId(CategoriaId);
}
}