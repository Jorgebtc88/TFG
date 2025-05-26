package com.producto.productocatalogo.controller;

import com.producto.productocatalogo.Service.GeneroService;
import com.producto.productocatalogo.model.Genero;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/generos")
@CrossOrigin(origins = "*")
public class GeneroController {

    @Autowired
    private GeneroService generoService;

    @GetMapping
    public List<Genero> getAllGeneros() {
        return generoService.getAllGeneros();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Genero> getGeneroById(@PathVariable Long id) {
        return generoService.getGeneroById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/nombre/{nombre}")
    public ResponseEntity<Genero> getGeneroByNombre(@PathVariable String nombre) {
        Genero genero = generoService.getGeneroByNombre(nombre);
        return genero != null ? ResponseEntity.ok(genero) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Genero createGenero(@RequestBody Genero genero) {
        return generoService.saveGenero(genero);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Genero> updateGenero(@PathVariable Long id, @RequestBody Genero genero) {
        return generoService.getGeneroById(id)
                .map(existingGenero -> {
                    genero.setId(id);
                    return ResponseEntity.ok(generoService.saveGenero(genero));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGenero(@PathVariable Long id) {
        return generoService.getGeneroById(id)
                .map(genero -> {
                    generoService.deleteGenero(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
} 