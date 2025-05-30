package com.producto.productocatalogo.controller;

import com.producto.productocatalogo.Service.PedidoService;
import com.producto.productocatalogo.model.Pedido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pedidos")
@CrossOrigin(origins = "*")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @GetMapping
    public List<Pedido> getAllPedidos() {
        return pedidoService.getAllPedidos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pedido> getPedidoById(@PathVariable Long id) {
        return pedidoService.getPedidoById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/usuario/{usuarioId}")
    public List<Pedido> getPedidosByUsuario(@PathVariable Long usuarioId) {
        return pedidoService.getPedidosByUsuario(usuarioId);
    }

    @GetMapping("/estado/{estado}")
    public List<Pedido> getPedidosByEstado(@PathVariable Pedido.EstadoPedido estado) {
        return pedidoService.getPedidosByEstado(estado);
    }

    @PostMapping
    public ResponseEntity<Pedido> createPedido(@RequestBody Pedido pedido) {
        try {
            Pedido nuevoPedido = pedidoService.createPedido(pedido);
            return ResponseEntity.ok(nuevoPedido);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pedido> updatePedido(@PathVariable Long id, @RequestBody Pedido pedido) {
        try {
            Pedido pedidoActualizado = pedidoService.updatePedido(id, pedido);
            return ResponseEntity.ok(pedidoActualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}/estado")
    public ResponseEntity<Pedido> actualizarEstado(
            @PathVariable Long id,
            @RequestParam Pedido.EstadoPedido nuevoEstado) {
        try {
            Pedido pedidoActualizado = pedidoService.actualizarEstado(id, nuevoEstado);
            return ResponseEntity.ok(pedidoActualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePedido(@PathVariable Long id) {
        try {
            pedidoService.deletePedido(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
} 