package com.producto.productocatalogo.controller;

import com.producto.productocatalogo.model.Valoracion;
import com.producto.productocatalogo.Service.ValoracionService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ValoracionController.class)
public class ValoracionControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ValoracionService valoracionService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testCreateValoracion() throws Exception {
        Valoracion valoracion = new Valoracion();
        valoracion.setId(1L);
        valoracion.setPuntuacion(5);
        valoracion.setComentario("Excelente producto");
        valoracion.setFechaValoracion(LocalDateTime.now());

        when(valoracionService.createValoracion(any(Valoracion.class))).thenReturn(valoracion);

        mockMvc.perform(post("/api/valoraciones")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(valoracion)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.puntuacion").value(5))
                .andExpect(jsonPath("$.comentario").value("Excelente producto"));
    }

    @Test
    public void testGetValoracionById() throws Exception {
        Valoracion valoracion = new Valoracion();
        valoracion.setId(1L);
        valoracion.setPuntuacion(5);
        valoracion.setComentario("Excelente producto");

        when(valoracionService.getValoracionById(1L)).thenReturn(Optional.of(valoracion));

        mockMvc.perform(get("/api/valoraciones/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.puntuacion").value(5))
                .andExpect(jsonPath("$.comentario").value("Excelente producto"));
    }

    @Test
    public void testGetValoracionesByProducto() throws Exception {
        Valoracion valoracion1 = new Valoracion();
        valoracion1.setId(1L);
        valoracion1.setPuntuacion(5);
        valoracion1.setComentario("Excelente producto");

        Valoracion valoracion2 = new Valoracion();
        valoracion2.setId(2L);
        valoracion2.setPuntuacion(4);
        valoracion2.setComentario("Buen producto");

        when(valoracionService.getValoracionesByProducto(1L)).thenReturn(Arrays.asList(valoracion1, valoracion2));

        mockMvc.perform(get("/api/valoraciones/producto/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[1].id").value(2));
    }

    @Test
    public void testGetPromedioValoracionesByProducto() throws Exception {
        when(valoracionService.getPromedioValoracionesByProducto(1L)).thenReturn(4.5);

        mockMvc.perform(get("/api/valoraciones/producto/1/promedio"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").value(4.5));
    }

    @Test
    public void testUpdateValoracion() throws Exception {
        Valoracion valoracion = new Valoracion();
        valoracion.setId(1L);
        valoracion.setPuntuacion(4);
        valoracion.setComentario("Producto actualizado");

        when(valoracionService.updateValoracion(any(Long.class), any(Valoracion.class))).thenReturn(valoracion);

        mockMvc.perform(put("/api/valoraciones/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(valoracion)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.puntuacion").value(4))
                .andExpect(jsonPath("$.comentario").value("Producto actualizado"));
    }

    @Test
    public void testDeleteValoracion() throws Exception {
        mockMvc.perform(delete("/api/valoraciones/1"))
                .andExpect(status().isOk());
    }
} 