package com.producto.productocatalogo.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "genero_id", nullable = false)
    private Genero genero;

    @OneToMany(mappedBy = "categoria",
    cascade = CascadeType.ALL,
    fetch = FetchType.LAZY)
    private Set<Producto> productos;

    // Constructor sin ID (para crear nuevas categorías)
    public Categoria(String nombre, Genero genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
}
