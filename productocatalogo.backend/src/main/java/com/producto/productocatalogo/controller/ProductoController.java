package com.producto.productocatalogo.controller;

import com.producto.productocatalogo.Service.ProductoService;
import com.producto.productocatalogo.model.Producto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductoController{
    private final ProductoService productoService;


    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }
    @GetMapping
    public List<Producto> getAllProducts() {
        return productoService.getAllProducts();
    }
    @GetMapping("/categoria/{categoriaId}")
    public List<Producto> getAllProductsByCategoria(@PathVariable Long categoriaId) {
        return productoService.getProductoByCategoria(categoriaId);
    }
}
