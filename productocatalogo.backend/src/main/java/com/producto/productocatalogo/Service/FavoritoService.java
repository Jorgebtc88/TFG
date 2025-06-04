package com.producto.productocatalogo.Service;

import com.producto.productocatalogo.model.Favorito;
import com.producto.productocatalogo.model.Producto;
import com.producto.productocatalogo.model.Usuario;
import com.producto.productocatalogo.repository.FavoritoRepository;
import com.producto.productocatalogo.repository.UsuarioRepository;
import com.producto.productocatalogo.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class FavoritoService {

    @Autowired
    private FavoritoRepository favoritoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ProductoRepository productoRepository;

    public List<Favorito> getFavoritosByUsuario(String email) {
        Usuario usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        return favoritoRepository.findByUsuarioId(usuario.getId());
    }

    @Transactional
    public Favorito agregarFavorito(String email, Long productoId) {
        Usuario usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        Producto producto = productoRepository.findById(productoId)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));

        if (favoritoRepository.existsByUsuarioIdAndProductoId(usuario.getId(), productoId)) {
            throw new RuntimeException("El producto ya está en favoritos");
        }

        Favorito favorito = new Favorito();
        favorito.setUsuario(usuario);
        favorito.setProducto(producto);
        
        return favoritoRepository.save(favorito);
    }

    @Transactional
    public void eliminarFavorito(String email, Long productoId) {
        Usuario usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (!favoritoRepository.existsByUsuarioIdAndProductoId(usuario.getId(), productoId)) {
            throw new RuntimeException("El producto no está en favoritos");
        }

        favoritoRepository.deleteByUsuarioIdAndProductoId(usuario.getId(), productoId);
    }
} 