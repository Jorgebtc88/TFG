package com.producto.productocatalogo.config;

import com.producto.productocatalogo.model.Categoria;
import com.producto.productocatalogo.model.Producto;
import com.producto.productocatalogo.repository.CategoriaRepository;
import com.producto.productocatalogo.repository.ProductoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;


@Component
public class DataSeeder implements CommandLineRunner {

    private final ProductoRepository productoRepository;
    private final CategoriaRepository categoriaRepository;

    public DataSeeder(ProductoRepository productoRepository, CategoriaRepository categoriaRepository) {
        this.productoRepository = productoRepository;
        this.categoriaRepository = categoriaRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        //Clear all existing data
        productoRepository.deleteAll();
        categoriaRepository.deleteAll();

        //Create categories
        Categoria electronicos = new Categoria();
        electronicos.setNombre("Electrónicos");

        Categoria ropa = new Categoria();
        ropa.setNombre("Ropa");

        Categoria hogar = new Categoria();
        hogar.setNombre("Hogar y Cocina");

        categoriaRepository.saveAll(Arrays.asList(electronicos, hogar, ropa));

        //Create products
        Producto telefono = new Producto();
        telefono.setNombre("SmartPhone");
        telefono.setDescripcion("El último modelo de smartphone con características increíbles");
        telefono.setImagenUrl("https://placehold.co/600x400");
        telefono.setPrecio(699.99);
        telefono.setCategoria(electronicos);

        Producto laptop = new Producto();
        laptop.setNombre("Laptop");
        laptop.setDescripcion("Portátil de alto rendimiento para trabajar y jugar");
        laptop.setImagenUrl("https://placehold.co/600x400");
        laptop.setPrecio(999.99);
        laptop.setCategoria(electronicos);

        Producto chaqueta = new Producto();
        chaqueta.setNombre("Chaqueta");
        chaqueta.setDescripcion("chaqueta cálida y acogedora para el invierno");
        chaqueta.setImagenUrl("https://placehold.co/600x400");
        chaqueta.setPrecio(129.99);
        chaqueta.setCategoria(ropa);


        Producto licuadora = new Producto();
        licuadora.setNombre("Licuadora");
        licuadora.setDescripcion("licuadora con alto contenido de semillas para batidos y más");
        licuadora.setImagenUrl("https://placehold.co/600x400");
        licuadora.setPrecio(59.99);
        licuadora.setCategoria(hogar);

        productoRepository.saveAll(Arrays.asList(telefono, laptop, chaqueta, licuadora));
    }
}



