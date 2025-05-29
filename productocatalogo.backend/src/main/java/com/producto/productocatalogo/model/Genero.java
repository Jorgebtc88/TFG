package com.producto.productocatalogo.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Set;

@Entity
@Data
public class Genero {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nombre; // "Hombres" o "Mujeres"

    @OneToMany(mappedBy = "genero",
    cascade = CascadeType.ALL,
    fetch = FetchType.LAZY)
    private Set<Categoria> categorias;
} 