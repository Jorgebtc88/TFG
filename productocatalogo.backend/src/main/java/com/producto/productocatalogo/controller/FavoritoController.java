package com.producto.productocatalogo.controller;

import com.producto.productocatalogo.Service.FavoritoService;
import com.producto.productocatalogo.model.Favorito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favoritos")
@CrossOrigin(origins = "*")
public class FavoritoController {

    @Autowired
    private FavoritoService favoritoService;

    @GetMapping
    public ResponseEntity<List<Favorito>> getFavoritos() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        List<Favorito> favoritos = favoritoService.getFavoritosByUsuario(email);
        return ResponseEntity.ok(favoritos);
    }

    @PostMapping("/{productoId}")
    public ResponseEntity<Favorito> agregarFavorito(@PathVariable Long productoId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        Favorito favorito = favoritoService.agregarFavorito(email, productoId);
        if (favorito != null) {
            return ResponseEntity.ok(favorito);
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/{productoId}")
    public ResponseEntity<Void> eliminarFavorito(@PathVariable Long productoId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String email = auth.getName();
        favoritoService.eliminarFavorito(email, productoId);
        return ResponseEntity.ok().build();
    }
} 