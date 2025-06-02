package com.producto.productocatalogo.repository;

import com.producto.productocatalogo.model.Talla;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TallaRepository extends JpaRepository<Talla, Long> {
    Talla findByNombre(String nombre);
} 