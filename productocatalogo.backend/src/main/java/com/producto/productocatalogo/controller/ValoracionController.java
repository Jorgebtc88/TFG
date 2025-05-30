package com.producto.productocatalogo.controller;

import com.producto.productocatalogo.Service.ValoracionService;
import com.producto.productocatalogo.model.Valoracion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/valoraciones")
@CrossOrigin(origins = "*")
public class ValoracionController {

    @Autowired
    private ValoracionService valoracionService;

    @GetMapping
    public List<Valoracion> getAllValoraciones() {
        return valoracionService.getAllValoraciones();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Valoracion> getValoracionById(@PathVariable Long id) {
        return valoracionService.getValoracionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/producto/{productoId}")
    public List<Valoracion> getValoracionesByProducto(@PathVariable Long productoId) {
        return valoracionService.getValoracionesByProducto(productoId);
    }

    @GetMapping("/usuario/{usuarioId}")
    public List<Valoracion> getValoracionesByUsuario(@PathVariable Long usuarioId) {
        return valoracionService.getValoracionesByUsuario(usuarioId);
    }

    @GetMapping("/producto/{productoId}/promedio")
    public ResponseEntity<Double> getPromedioValoracionesByProducto(@PathVariable Long productoId) {
        Double promedio = valoracionService.getPromedioValoracionesByProducto(productoId);
        return promedio != null ? ResponseEntity.ok(promedio) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Valoracion> createValoracion(@RequestBody Valoracion valoracion) {
        try {
            Valoracion nuevaValoracion = valoracionService.createValoracion(valoracion);
            return ResponseEntity.ok(nuevaValoracion);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Valoracion> updateValoracion(@PathVariable Long id, @RequestBody Valoracion valoracion) {
        try {
            Valoracion valoracionActualizada = valoracionService.updateValoracion(id, valoracion);
            return ResponseEntity.ok(valoracionActualizada);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteValoracion(@PathVariable Long id) {
        try {
            valoracionService.deleteValoracion(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
} 