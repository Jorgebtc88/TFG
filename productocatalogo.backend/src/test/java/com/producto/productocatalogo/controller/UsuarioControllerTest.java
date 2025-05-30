package com.producto.productocatalogo.controller;

import com.producto.productocatalogo.model.Usuario;
import com.producto.productocatalogo.Service.UsuarioService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(UsuarioController.class)
public class UsuarioControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UsuarioService usuarioService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testCreateUsuario() throws Exception {
        Usuario usuario = new Usuario();
        usuario.setNombre("Test User");
        usuario.setEmail("test@example.com");
        usuario.setPassword("password123");

        when(usuarioService.createUsuario(any(Usuario.class))).thenReturn(usuario);

        mockMvc.perform(post("/api/usuarios")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(usuario)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.nombre").value("Test User"))
                .andExpect(jsonPath("$.email").value("test@example.com"));
    }

    @Test
    public void testGetUsuarioById() throws Exception {
        Usuario usuario = new Usuario();
        usuario.setId(1L);
        usuario.setNombre("Test User");
        usuario.setEmail("test@example.com");

        when(usuarioService.getUsuarioById(1L)).thenReturn(Optional.of(usuario));

        mockMvc.perform(get("/api/usuarios/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.nombre").value("Test User"))
                .andExpect(jsonPath("$.email").value("test@example.com"));
    }

    @Test
    public void testGetUsuarioByEmail() throws Exception {
        Usuario usuario = new Usuario();
        usuario.setId(1L);
        usuario.setNombre("Test User");
        usuario.setEmail("test@example.com");

        when(usuarioService.getUsuarioByEmail("test@example.com")).thenReturn(Optional.of(usuario));

        mockMvc.perform(get("/api/usuarios/email/test@example.com"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.nombre").value("Test User"))
                .andExpect(jsonPath("$.email").value("test@example.com"));
    }

    @Test
    public void testUpdateUsuario() throws Exception {
        Usuario usuario = new Usuario();
        usuario.setId(1L);
        usuario.setNombre("Updated User");
        usuario.setEmail("updated@example.com");

        when(usuarioService.updateUsuario(any(Long.class), any(Usuario.class))).thenReturn(usuario);

        mockMvc.perform(put("/api/usuarios/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(usuario)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.nombre").value("Updated User"))
                .andExpect(jsonPath("$.email").value("updated@example.com"));
    }

    @Test
    public void testDeleteUsuario() throws Exception {
        mockMvc.perform(delete("/api/usuarios/1"))
                .andExpect(status().isOk());
    }
} 