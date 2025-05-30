package com.producto.productocatalogo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    // Este método captura cualquier excepción no controlada y devuelve una respuesta JSON con el error.
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> manejarTodasLasExcepciones(Exception ex) {
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("error", "Error en el servidor: " + ex.getMessage()));
    }
} 