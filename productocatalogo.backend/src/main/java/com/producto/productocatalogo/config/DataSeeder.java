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
        Categoria camisetas = new Categoria();
        camisetas.setNombre("Camisetas");

        Categoria pantalones = new Categoria();
        pantalones.setNombre("Pantalones");

        Categoria vestidos = new Categoria();
        vestidos.setNombre("Vestidos");

        categoriaRepository.saveAll(Arrays.asList(camisetas, pantalones, vestidos));

        //Create products for Camisetas
        Producto camiseta1 = new Producto();
        camiseta1.setNombre("Camiseta Básica");
        camiseta1.setDescripcion("Camiseta de algodón 100% con corte regular");
        camiseta1.setImagenUrl("https://images.unsplash.com/photo-1521572163474-6864f9cf17ab");
        camiseta1.setPrecio(19.99);
        camiseta1.setCategoria(camisetas);

        Producto camiseta2 = new Producto();
        camiseta2.setNombre("Camiseta Oversize");
        camiseta2.setDescripcion("Camiseta oversize con estampado moderno");
        camiseta2.setImagenUrl("https://images.unsplash.com/photo-1576566588028-4147f3842f27");
        camiseta2.setPrecio(24.99);
        camiseta2.setCategoria(camisetas);

        //Create products for Pantalones
        Producto pantalon1 = new Producto();
        pantalon1.setNombre("Pantalón Vaquero");
        pantalon1.setDescripcion("Vaquero clásico de talle alto");
        pantalon1.setImagenUrl("https://images.unsplash.com/photo-1541099649105-f69ad21f3246");
        pantalon1.setPrecio(49.99);
        pantalon1.setCategoria(pantalones);

        Producto pantalon2 = new Producto();
        pantalon2.setNombre("Pantalón Chino");
        pantalon2.setDescripcion("Pantalón chino de corte recto");
        pantalon2.setImagenUrl("https://images.unsplash.com/photo-1624378439575-d8705ad7ae80");
        pantalon2.setPrecio(39.99);
        pantalon2.setCategoria(pantalones);

        //Create products for Vestidos
        Producto vestido1 = new Producto();
        vestido1.setNombre("Vestido Floral");
        vestido1.setDescripcion("Vestido floral con corte midi");
        vestido1.setImagenUrl("https://images.unsplash.com/photo-1515372039744-b8f02a3ae446");
        vestido1.setPrecio(59.99);
        vestido1.setCategoria(vestidos);

        Producto vestido2 = new Producto();
        vestido2.setNombre("Vestido Negro");
        vestido2.setDescripcion("Vestido negro de fiesta");
        vestido2.setImagenUrl("https://images.unsplash.com/photo-1595777457583-95e059d581b8");
        vestido2.setPrecio(79.99);
        vestido2.setCategoria(vestidos);

        productoRepository.saveAll(Arrays.asList(
            camiseta1, camiseta2,
            pantalon1, pantalon2,
            vestido1, vestido2
        ));
    }
}



