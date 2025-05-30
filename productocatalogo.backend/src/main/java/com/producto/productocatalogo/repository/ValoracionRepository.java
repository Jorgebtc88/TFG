package com.producto.productocatalogo.repository;

import com.producto.productocatalogo.model.Valoracion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ValoracionRepository extends JpaRepository<Valoracion, Long> {
    List<Valoracion> findByProductoId(Long productoId);
    List<Valoracion> findByUsuarioId(Long usuarioId);
    Double findAveragePuntuacionByProductoId(Long productoId);
} 