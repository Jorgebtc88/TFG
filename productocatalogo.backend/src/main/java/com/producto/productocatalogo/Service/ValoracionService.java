package com.producto.productocatalogo.Service;

import com.producto.productocatalogo.model.Valoracion;
import com.producto.productocatalogo.repository.ValoracionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ValoracionService {

    @Autowired
    private ValoracionRepository valoracionRepository;

    public List<Valoracion> getAllValoraciones() {
        return valoracionRepository.findAll();
    }

    public Optional<Valoracion> getValoracionById(Long id) {
        return valoracionRepository.findById(id);
    }

    public List<Valoracion> getValoracionesByProducto(Long productoId) {
        return valoracionRepository.findByProductoId(productoId);
    }

    public List<Valoracion> getValoracionesByUsuario(Long usuarioId) {
        return valoracionRepository.findByUsuarioId(usuarioId);
    }

    public Double getPromedioValoracionesByProducto(Long productoId) {
        return valoracionRepository.findAveragePuntuacionByProductoId(productoId);
    }

    public Valoracion createValoracion(Valoracion valoracion) {
        valoracion.setFechaValoracion(LocalDateTime.now());
        return valoracionRepository.save(valoracion);
    }

    public Valoracion updateValoracion(Long id, Valoracion valoracionDetails) {
        return valoracionRepository.findById(id)
                .map(valoracion -> {
                    valoracion.setPuntuacion(valoracionDetails.getPuntuacion());
                    valoracion.setComentario(valoracionDetails.getComentario());
                    return valoracionRepository.save(valoracion);
                })
                .orElseThrow(() -> new RuntimeException("Valoración no encontrada"));
    }

    public void deleteValoracion(Long id) {
        valoracionRepository.deleteById(id);
    }
} 