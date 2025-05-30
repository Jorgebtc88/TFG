package com.producto.productocatalogo.controller;

import com.producto.productocatalogo.model.Pedido;
import com.producto.productocatalogo.Service.PedidoService;
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

@WebMvcTest(PedidoController.class)
public class PedidoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PedidoService pedidoService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testCreatePedido() throws Exception {
        Pedido pedido = new Pedido();
        pedido.setId(1L);
        pedido.setFechaPedido(LocalDateTime.now());
        pedido.setEstado(Pedido.EstadoPedido.PENDIENTE);
        pedido.setTotal(100.0);

        when(pedidoService.createPedido(any(Pedido.class))).thenReturn(pedido);

        mockMvc.perform(post("/api/pedidos")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(pedido)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.estado").value("PENDIENTE"))
                .andExpect(jsonPath("$.total").value(100.0));
    }

    @Test
    public void testGetPedidoById() throws Exception {
        Pedido pedido = new Pedido();
        pedido.setId(1L);
        pedido.setFechaPedido(LocalDateTime.now());
        pedido.setEstado(Pedido.EstadoPedido.PENDIENTE);
        pedido.setTotal(100.0);

        when(pedidoService.getPedidoById(1L)).thenReturn(Optional.of(pedido));

        mockMvc.perform(get("/api/pedidos/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.estado").value("PENDIENTE"))
                .andExpect(jsonPath("$.total").value(100.0));
    }

    @Test
    public void testGetPedidosByUsuario() throws Exception {
        Pedido pedido1 = new Pedido();
        pedido1.setId(1L);
        pedido1.setEstado(Pedido.EstadoPedido.PENDIENTE);
        pedido1.setTotal(100.0);

        Pedido pedido2 = new Pedido();
        pedido2.setId(2L);
        pedido2.setEstado(Pedido.EstadoPedido.CONFIRMADO);
        pedido2.setTotal(200.0);

        when(pedidoService.getPedidosByUsuario(1L)).thenReturn(Arrays.asList(pedido1, pedido2));

        mockMvc.perform(get("/api/pedidos/usuario/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[1].id").value(2));
    }

    @Test
    public void testUpdatePedido() throws Exception {
        Pedido pedido = new Pedido();
        pedido.setId(1L);
        pedido.setEstado(Pedido.EstadoPedido.CONFIRMADO);
        pedido.setTotal(150.0);

        when(pedidoService.updatePedido(any(Long.class), any(Pedido.class))).thenReturn(pedido);

        mockMvc.perform(put("/api/pedidos/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(pedido)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.estado").value("CONFIRMADO"))
                .andExpect(jsonPath("$.total").value(150.0));
    }

    @Test
    public void testActualizarEstado() throws Exception {
        Pedido pedido = new Pedido();
        pedido.setId(1L);
        pedido.setEstado(Pedido.EstadoPedido.ENVIADO);

        when(pedidoService.actualizarEstado(any(Long.class), any(Pedido.EstadoPedido.class))).thenReturn(pedido);

        mockMvc.perform(put("/api/pedidos/1/estado")
                .param("nuevoEstado", "ENVIADO"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.estado").value("ENVIADO"));
    }

    @Test
    public void testDeletePedido() throws Exception {
        mockMvc.perform(delete("/api/pedidos/1"))
                .andExpect(status().isOk());
    }
} 