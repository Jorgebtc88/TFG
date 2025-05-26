package com.producto.productocatalogo.repository;

import com.producto.productocatalogo.model.Genero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GeneroRepository extends JpaRepository<Genero, Long> {
    Genero findByNombre(String nombre);
} 