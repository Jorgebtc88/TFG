package com.producto.productocatalogo.config;

import com.producto.productocatalogo.model.Categoria;
import com.producto.productocatalogo.model.Genero;
import com.producto.productocatalogo.model.Producto;
import com.producto.productocatalogo.repository.CategoriaRepository;
import com.producto.productocatalogo.repository.GeneroRepository;
import com.producto.productocatalogo.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private GeneroRepository generoRepository;

    @Override
    public void run(String... args) throws Exception {
        // Verificar si ya existen datos
        if (productoRepository.count() > 0) {
            System.out.println("La base de datos ya contiene datos. No se realizará la carga inicial.");
            return;
        }

        //Clear all existing data
        productoRepository.deleteAll();
        categoriaRepository.deleteAll();

        // Crear géneros
        Genero generoMujeres = new Genero();
        generoMujeres.setNombre("Mujeres");
        generoRepository.save(generoMujeres);

        Genero generoHombres = new Genero();
        generoHombres.setNombre("Hombres");
        generoRepository.save(generoHombres);

        // Crear categorías para mujeres
        Categoria vestidosMujer = new Categoria();
        vestidosMujer.setNombre("Vestidos");
        vestidosMujer.setGenero(generoMujeres);
        categoriaRepository.save(vestidosMujer);

        Categoria camisetasMujer = new Categoria();
        camisetasMujer.setNombre("Camisetas");
        camisetasMujer.setGenero(generoMujeres);
        categoriaRepository.save(camisetasMujer);

        Categoria pantalonesMujer = new Categoria();
        pantalonesMujer.setNombre("Pantalones");
        pantalonesMujer.setGenero(generoMujeres);
        categoriaRepository.save(pantalonesMujer);

        Categoria zapatosMujer = new Categoria();
        zapatosMujer.setNombre("Zapatos");
        zapatosMujer.setGenero(generoMujeres);
        categoriaRepository.save(zapatosMujer);

        // Crear categorías para hombres
        Categoria camisetasHombre = new Categoria();
        camisetasHombre.setNombre("Camisetas");
        camisetasHombre.setGenero(generoHombres);
        categoriaRepository.save(camisetasHombre);

        Categoria pantalonesHombre = new Categoria();
        pantalonesHombre.setNombre("Pantalones");
        pantalonesHombre.setGenero(generoHombres);
        categoriaRepository.save(pantalonesHombre);

        Categoria chaquetasHombre = new Categoria();
        chaquetasHombre.setNombre("Chaquetas");
        chaquetasHombre.setGenero(generoHombres);
        categoriaRepository.save(chaquetasHombre);

        Categoria zapatosHombre = new Categoria();
        zapatosHombre.setNombre("Zapatos");
        zapatosHombre.setGenero(generoHombres);
        categoriaRepository.save(zapatosHombre);

        //Create products for Camisetas
        Producto camiseta1 = new Producto();
        camiseta1.setNombre("Camiseta Básica");
        camiseta1.setDescripcion("Camiseta de algodón 100% con corte regular");
        camiseta1.setImagenUrl("https://images.unsplash.com/photo-1521572163474-6864f9cf17ab");
        camiseta1.setPrecio(19.99);
        camiseta1.setCategoria(camisetasMujer);

        Producto camiseta2 = new Producto();
        camiseta2.setNombre("Camiseta Oversize");
        camiseta2.setDescripcion("Camiseta oversize con estampado moderno");
        camiseta2.setImagenUrl("https://images.unsplash.com/photo-1576566588028-4147f3842f27");
        camiseta2.setPrecio(24.99);
        camiseta2.setCategoria(camisetasMujer);

        Producto camiseta3 = new Producto();
        camiseta3.setNombre("Camiseta de Manga Larga");
        camiseta3.setDescripcion("Camiseta de manga larga con estampado");
        camiseta3.setImagenUrl("https://images.unsplash.com/photo-1576566588028-4147f3842f27");
        camiseta3.setPrecio(29.99);
        camiseta3.setCategoria(camisetasMujer); 

        Producto camiseta4 = new Producto();
        camiseta4.setNombre("Camiseta de Manga Corta");
        camiseta4.setDescripcion("Camiseta de manga corta con estampado");
        camiseta4.setImagenUrl("https://images.unsplash.com/photo-1576566588028-4147f3842f27");
        camiseta4.setPrecio(24.99);
        camiseta4.setCategoria(camisetasMujer);

        Producto camiseta5 = new Producto();
        camiseta5.setNombre("Camiseta de Manga Larga");
        camiseta5.setDescripcion("Camiseta de manga larga con estampado");
        camiseta5.setImagenUrl("https://images.unsplash.com/photo-1576566588028-4147f3842f27");
        camiseta5.setPrecio(29.99);
        camiseta5.setCategoria(camisetasMujer);

        //Create products for Pantalones
        Producto pantalon1 = new Producto();
        pantalon1.setNombre("Pantalón Vaquero");
        pantalon1.setDescripcion("Vaquero clásico de talle alto");
        pantalon1.setImagenUrl("https://images.unsplash.com/photo-1541099649105-f69ad21f3246");
        pantalon1.setPrecio(49.99);
        pantalon1.setCategoria(pantalonesMujer);

        Producto pantalon2 = new Producto();
        pantalon2.setNombre("Pantalón Chino");
        pantalon2.setDescripcion("Pantalón chino de corte recto");
        pantalon2.setImagenUrl("https://images.unsplash.com/photo-1624378439575-d8705ad7ae80");
        pantalon2.setPrecio(39.99);
        pantalon2.setCategoria(pantalonesMujer);

        Producto pantalon3 = new Producto();
        pantalon3.setNombre("Pantalón de Chino");
        pantalon3.setDescripcion("Pantalón de chino de corte recto");
        pantalon3.setImagenUrl("https://capitandenim.com/cdn/shop/files/pantalones-cargo-de-mujer-made-in-spain.jpg?v=1701099010&width=3000");
        pantalon3.setPrecio(19.99);
        pantalon3.setCategoria(pantalonesMujer);

        Producto pantalon4 = new Producto();
        pantalon4.setNombre("Pantalón de Chino");
        pantalon4.setDescripcion("Pantalón de chino de corte recto");
        pantalon4.setImagenUrl("https://images.unsplash.com/photo-1624378439575-d8705ad7ae80");
        pantalon4.setPrecio(39.99);
        pantalon4.setCategoria(pantalonesMujer);

        Producto pantalon5 = new Producto();
        pantalon5.setNombre("Pantalón de Chino");
        pantalon5.setDescripcion("Pantalón de chino de corte recto");
        pantalon5.setImagenUrl("https://images.unsplash.com/photo-1624378439575-d8705ad7ae80");
        pantalon5.setPrecio(39.99);
        pantalon5.setCategoria(pantalonesMujer);    

        //Create products for Vestidos
        Producto vestido1 = new Producto();
        vestido1.setNombre("Vestido Floral");
        vestido1.setDescripcion("Vestido floral perfecto para el verano");
        vestido1.setPrecio(49.99);
        vestido1.setImagenUrl("/images/vestido-floral.jpg");
        vestido1.setCategoria(vestidosMujer);

        Producto vestido2 = new Producto();
        vestido2.setNombre("Vestido Negro");
        vestido2.setDescripcion("Vestido negro de fiesta");
        vestido2.setImagenUrl("https://images.unsplash.com/photo-1595777457583-95e059d581b8");
        vestido2.setPrecio(79.99);
        vestido2.setCategoria(vestidosMujer);

        Producto vestido3 = new Producto();
        vestido3.setNombre("Vestido Floral");
        vestido3.setDescripcion("Vestido floral perfecto para el verano");
        vestido3.setPrecio(49.99);
        vestido3.setImagenUrl("/images/vestido-floral.jpg");
        vestido3.setCategoria(vestidosMujer);

        Producto vestido4 = new Producto();
        vestido4.setNombre("Vestido Floral");
        vestido4.setDescripcion("Vestido floral perfecto para el verano");
        vestido4.setPrecio(49.99);
        vestido4.setImagenUrl("/images/vestido-floral.jpg");
        vestido4.setCategoria(vestidosMujer);

        Producto vestido5 = new Producto();
        vestido5.setNombre("Vestido Floral");
        vestido5.setDescripcion("Vestido floral perfecto para el verano");
        vestido5.setPrecio(49.99);
        vestido5.setImagenUrl("/images/vestido-floral.jpg");
        vestido5.setCategoria(vestidosMujer);

        //Create productos de Zapatos
        Producto zapato1 = new Producto();
        zapato1.setNombre("Zapato de Mujer");
        zapato1.setDescripcion("Zapato de mujer de color negro");
        zapato1.setPrecio(49.99);
        zapato1.setImagenUrl("/images/zapato-mujer.jpg");
        zapato1.setCategoria(zapatosMujer);

        Producto zapato2 = new Producto();
        zapato2.setNombre("Zapato de Mujer");
        zapato2.setDescripcion("Zapato de mujer de color negro");
        zapato2.setPrecio(49.99);
        zapato2.setImagenUrl("/images/zapato-mujer.jpg");
        zapato2.setCategoria(zapatosMujer);

        Producto zapato3 = new Producto();
        zapato3.setNombre("Zapato de Mujer");
        zapato3.setDescripcion("Zapato de mujer de color negro");
        zapato3.setPrecio(49.99);
        zapato3.setImagenUrl("/images/zapato-mujer.jpg");
        zapato3.setCategoria(zapatosMujer); 

        Producto zapato4 = new Producto();
        zapato4.setNombre("Zapato de Mujer");
        zapato4.setDescripcion("Zapato de mujer de color negro");
        zapato4.setPrecio(49.99);
        zapato4.setImagenUrl("/images/zapato-mujer.jpg");
        zapato4.setCategoria(zapatosMujer);

        Producto zapato5 = new Producto();
        zapato5.setNombre("Zapato de Mujer");
        zapato5.setDescripcion("Zapato de mujer de color negro");
        zapato5.setPrecio(49.99);
        zapato5.setImagenUrl("/images/zapato-mujer.jpg");
        zapato5.setCategoria(zapatosMujer);
        

        // Crear productos de ejemplo para hombres
        Producto camisetaHombre1 = new Producto();
        camisetaHombre1.setNombre("Camiseta Básica Hombre");
        camisetaHombre1.setDescripcion("Camiseta básica de algodón");
        camisetaHombre1.setPrecio(19.99);
        camisetaHombre1.setImagenUrl("/images/camiseta-hombre.jpg");
        camisetaHombre1.setCategoria(camisetasHombre);

        Producto camisetaHombre2 = new Producto();
        camisetaHombre2.setNombre("Camiseta Básica Hombre");
        camisetaHombre2.setDescripcion("Camiseta básica de algodón");
        camisetaHombre2.setPrecio(19.99);
        camisetaHombre2.setImagenUrl("/images/camiseta-hombre.jpg");
        camisetaHombre2.setCategoria(camisetasHombre);

        Producto camisetaHombre3 = new Producto();
        camisetaHombre3.setNombre("Camiseta Básica Hombre");
        camisetaHombre3.setDescripcion("Camiseta básica de algodón");
        camisetaHombre3.setPrecio(19.99);
        camisetaHombre3.setImagenUrl("/images/camiseta-hombre.jpg");
        camisetaHombre3.setCategoria(camisetasHombre);

        Producto camisetaHombre4 = new Producto();
        camisetaHombre4.setNombre("Camiseta Básica Hombre");
        camisetaHombre4.setDescripcion("Camiseta básica de algodón");
        camisetaHombre4.setPrecio(19.99);
        camisetaHombre4.setImagenUrl("/images/camiseta-hombre.jpg");
        camisetaHombre4.setCategoria(camisetasHombre);

        Producto camisetaHombre5 = new Producto();  
        camisetaHombre5.setNombre("Camiseta Básica Hombre");
        camisetaHombre5.setDescripcion("Camiseta básica de algodón");
        camisetaHombre5.setPrecio(19.99);
        camisetaHombre5.setImagenUrl("/images/camiseta-hombre.jpg");
        camisetaHombre5.setCategoria(camisetasHombre);  
        
        //Crear productos de Pantalones
        Producto pantalonHombre1 = new Producto();
        pantalonHombre1.setNombre("Pantalón Vaquero Hombre");
        pantalonHombre1.setDescripcion("Pantalón vaquero clásico");
        pantalonHombre1.setPrecio(39.99);
        pantalonHombre1.setImagenUrl("/images/pantalon-hombre.jpg");
        pantalonHombre1.setCategoria(pantalonesHombre);

        Producto pantalonHombre2 = new Producto();
        pantalonHombre2.setNombre("Pantalón Vaquero Hombre");
        pantalonHombre2.setDescripcion("Pantalón vaquero clásico");
        pantalonHombre2.setPrecio(39.99);
        pantalonHombre2.setImagenUrl("/images/pantalon-hombre.jpg");
        pantalonHombre2.setCategoria(pantalonesHombre); 

        Producto pantalonHombre3 = new Producto();
        pantalonHombre3.setNombre("Pantalón Vaquero Hombre");
        pantalonHombre3.setDescripcion("Pantalón vaquero clásico");
        pantalonHombre3.setPrecio(39.99);
        pantalonHombre3.setImagenUrl("/images/pantalon-hombre.jpg");
            pantalonHombre3.setCategoria(pantalonesHombre);

        Producto pantalonHombre4 = new Producto();
        pantalonHombre4.setNombre("Pantalón Vaquero Hombre");
        pantalonHombre4.setDescripcion("Pantalón vaquero clásico");
        pantalonHombre4.setPrecio(39.99);
        pantalonHombre4.setImagenUrl("/images/pantalon-hombre.jpg");
            pantalonHombre4.setCategoria(pantalonesHombre);

        Producto pantalonHombre5 = new Producto();
        pantalonHombre5.setNombre("Pantalón Vaquero Hombre");
        pantalonHombre5.setDescripcion("Pantalón vaquero clásico");
        pantalonHombre5.setPrecio(39.99);
        pantalonHombre5.setImagenUrl("/images/pantalon-hombre.jpg");
        pantalonHombre5.setCategoria(pantalonesHombre);

        //Crear productos de Chaquetas
        Producto chaquetaHombre1 = new Producto();
        chaquetaHombre1.setNombre("Chaqueta de Hombre");
        chaquetaHombre1.setDescripcion("Chaqueta de hombre de color negro");
        chaquetaHombre1.setPrecio(49.99);
        chaquetaHombre1.setImagenUrl("/images/chaqueta-hombre.jpg");
        chaquetaHombre1.setCategoria(chaquetasHombre);      

        Producto chaquetaHombre2 = new Producto();
        chaquetaHombre2.setNombre("Chaqueta de Hombre");
        chaquetaHombre2.setDescripcion("Chaqueta de hombre de color negro");
        chaquetaHombre2.setPrecio(49.99);
        chaquetaHombre2.setImagenUrl("/images/chaqueta-hombre.jpg");
        chaquetaHombre2.setCategoria(chaquetasHombre);  

        Producto chaquetaHombre3 = new Producto();
        chaquetaHombre3.setNombre("Chaqueta de Hombre");
        chaquetaHombre3.setDescripcion("Chaqueta de hombre de color negro");
        chaquetaHombre3.setPrecio(49.99);
        chaquetaHombre3.setImagenUrl("/images/chaqueta-hombre.jpg");
        chaquetaHombre3.setCategoria(chaquetasHombre);

        Producto chaquetaHombre4 = new Producto();
        chaquetaHombre4.setNombre("Chaqueta de Hombre");
        chaquetaHombre4.setDescripcion("Chaqueta de hombre de color negro");
        chaquetaHombre4.setPrecio(49.99);
        chaquetaHombre4.setImagenUrl("/images/chaqueta-hombre.jpg");
        chaquetaHombre4.setCategoria(chaquetasHombre);  

        Producto chaquetaHombre5 = new Producto();
        chaquetaHombre5.setNombre("Chaqueta de Hombre");
        chaquetaHombre5.setDescripcion("Chaqueta de hombre de color negro");
        chaquetaHombre5.setPrecio(49.99);
        chaquetaHombre5.setImagenUrl("/images/chaqueta-hombre.jpg");    
        chaquetaHombre5.setCategoria(chaquetasHombre);

        //Crear productos de Zapatos
        Producto zapatoHombre1 = new Producto();
        zapatoHombre1.setNombre("Zapato de Hombre");
        zapatoHombre1.setDescripcion("Zapato de hombre de color negro");
        zapatoHombre1.setPrecio(49.99);
        zapatoHombre1.setImagenUrl("/images/zapato-hombre.jpg");
        zapatoHombre1.setCategoria(zapatosHombre);  

        Producto zapatoHombre2 = new Producto();
        zapatoHombre2.setNombre("Zapato de Hombre");
        zapatoHombre2.setDescripcion("Zapato de hombre de color negro");
        zapatoHombre2.setPrecio(49.99);
        zapatoHombre2.setImagenUrl("/images/zapato-hombre.jpg");    
        zapatoHombre2.setCategoria(zapatosHombre);

        Producto zapatoHombre3 = new Producto();
        zapatoHombre3.setNombre("Zapato de Hombre");
        zapatoHombre3.setDescripcion("Zapato de hombre de color negro");
        zapatoHombre3.setPrecio(49.99);
        zapatoHombre3.setImagenUrl("/images/zapato-hombre.jpg");
        zapatoHombre3.setCategoria(zapatosHombre);

        Producto zapatoHombre4 = new Producto();
        zapatoHombre4.setNombre("Zapato de Hombre");
        zapatoHombre4.setDescripcion("Zapato de hombre de color negro");    
        zapatoHombre4.setPrecio(49.99);
        zapatoHombre4.setImagenUrl("/images/zapato-hombre.jpg");
        zapatoHombre4.setCategoria(zapatosHombre);

        Producto zapatoHombre5 = new Producto();
        zapatoHombre5.setNombre("Zapato de Hombre");    
        zapatoHombre5.setDescripcion("Zapato de hombre de color negro");
        zapatoHombre5.setPrecio(49.99);
        zapatoHombre5.setImagenUrl("/images/zapato-hombre.jpg");
        zapatoHombre5.setCategoria(zapatosHombre);  
        
        
        

        productoRepository.saveAll(Arrays.asList(
            camiseta1, camiseta2, camiseta3, camiseta4, camiseta5,
            pantalon1, pantalon2, pantalon3, pantalon4, pantalon5,
            vestido1, vestido2, vestido3, vestido4, vestido5,
            zapato1, zapato2, zapato3, zapato4, zapato5,
            camisetaHombre1, camisetaHombre2, camisetaHombre3, camisetaHombre4, camisetaHombre5,
            pantalonHombre1, pantalonHombre2, pantalonHombre3, pantalonHombre4, pantalonHombre5,
            chaquetaHombre1, chaquetaHombre2, chaquetaHombre3, chaquetaHombre4, chaquetaHombre5,
            zapatoHombre1, zapatoHombre2, zapatoHombre3, zapatoHombre4, zapatoHombre5
        ));
    }
}



