package com.producto.productocatalogo.Service;

import com.producto.productocatalogo.model.Pedido;
import com.producto.productocatalogo.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public List<Pedido> getAllPedidos() {
        return pedidoRepository.findAll();
    }

    public Optional<Pedido> getPedidoById(Long id) {
        return pedidoRepository.findById(id);
    }

    public List<Pedido> getPedidosByUsuario(Long usuarioId) {
        return pedidoRepository.findByUsuarioId(usuarioId);
    }

    public List<Pedido> getPedidosByEstado(Pedido.EstadoPedido estado) {
        return pedidoRepository.findByEstado(estado);
    }

    public Pedido createPedido(Pedido pedido) {
        pedido.setFechaPedido(LocalDateTime.now());
        pedido.setEstado(Pedido.EstadoPedido.PENDIENTE);
        return pedidoRepository.save(pedido);
    }

    public Pedido updatePedido(Long id, Pedido pedidoDetails) {
        return pedidoRepository.findById(id)
                .map(pedido -> {
                    pedido.setEstado(pedidoDetails.getEstado());
                    return pedidoRepository.save(pedido);
                })
                .orElseThrow(() -> new RuntimeException("Pedido no encontrado"));
    }

    public void deletePedido(Long id) {
        pedidoRepository.deleteById(id);
    }

    public Pedido actualizarEstado(Long id, Pedido.EstadoPedido nuevoEstado) {
        return pedidoRepository.findById(id)
                .map(pedido -> {
                    pedido.setEstado(nuevoEstado);
                    return pedidoRepository.save(pedido);
                })
                .orElseThrow(() -> new RuntimeException("Pedido no encontrado"));
    }
} 