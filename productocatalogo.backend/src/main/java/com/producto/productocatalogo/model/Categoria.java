package com.producto.productocatalogo.model;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;

    @OneToMany(mappedBy = "categoria",
    cascade = CascadeType.ALL,
    fetch = FetchType.LAZY)
    private Set<Producto> productos;
}
