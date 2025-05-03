package com.producto.productocatalogo.controller;

import com.producto.productocatalogo.Service.CategoriaService;
import com.producto.productocatalogo.model.Categoria;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.util.List;

@RestController
@RequestMapping("/api/categoria")
@CrossOrigin(origins = "http://localhost:5173")
public class CategoriaController {

    private final CategoriaService categoriaService;

    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @GetMapping
    public ResponseEntity<List<Categoria>> getAllCategories() {
        try {
            List<Categoria> categorias = categoriaService.getAllCategories();
            return ResponseEntity.ok(categorias);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
