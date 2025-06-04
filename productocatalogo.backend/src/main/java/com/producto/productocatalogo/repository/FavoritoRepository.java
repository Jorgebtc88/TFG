package com.producto.productocatalogo.repository;

import com.producto.productocatalogo.model.Favorito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoritoRepository extends JpaRepository<Favorito, Long> {
    List<Favorito> findByUsuarioId(Long usuarioId);
    void deleteByUsuarioIdAndProductoId(Long usuarioId, Long productoId);
    boolean existsByUsuarioIdAndProductoId(Long usuarioId, Long productoId);
} 