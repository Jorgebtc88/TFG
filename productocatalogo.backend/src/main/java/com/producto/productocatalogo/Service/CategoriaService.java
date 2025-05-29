package com.producto.productocatalogo.Service;


import com.producto.productocatalogo.model.Categoria;
import com.producto.productocatalogo.repository.CategoriaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {
    private final CategoriaRepository categoriaRepository;

    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    public List<Categoria> getAllCategories() {
        return categoriaRepository.findAll();
    }
}
