package com.producto.productocatalogo.Service;

import com.producto.productocatalogo.model.Genero;
import com.producto.productocatalogo.repository.GeneroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GeneroService {

    @Autowired
    private GeneroRepository generoRepository;

    public List<Genero> getAllGeneros() {
        return generoRepository.findAll();
    }

    public Optional<Genero> getGeneroById(Long id) {
        return generoRepository.findById(id);
    }

    public Genero getGeneroByNombre(String nombre) {
        return generoRepository.findByNombre(nombre);
    }

    public Genero saveGenero(Genero genero) {
        return generoRepository.save(genero);
    }

    public void deleteGenero(Long id) {
        generoRepository.deleteById(id);
    }
} 