package com.producto.productocatalogo.repository;

import com.producto.productocatalogo.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByCategoriaId(Long categoriaId);
    List<Producto> findByCategoriaGeneroId(Long generoId);
    List<Producto> findByCategoriaGeneroNombre(String nombreGenero);
    
    /**
     * Busca productos por nombre de categoría (búsqueda parcial, ignorando mayúsculas/minúsculas)
     * @param nombreCategoria Nombre o parte del nombre de la categoría
     * @return Lista de productos que coinciden con la categoría
     */
    List<Producto> findByCategoriaNombreContainingIgnoreCase(String nombreCategoria);
}
