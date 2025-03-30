package com.producto.productocatalogo.controller;
import com.producto.productocatalogo.Service.CategoriaService;
import com.producto.productocatalogo.model.Categoria;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categoria")
public class CategoriaController {

    private final CategoriaService categoriaService;

    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @GetMapping
    public List<Categoria> getAllCategories() {
        return categoriaService.getAllCategories();

    }
}
