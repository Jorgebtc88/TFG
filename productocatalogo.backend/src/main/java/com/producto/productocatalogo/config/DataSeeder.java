package com.producto.productocatalogo.config;

import com.producto.productocatalogo.model.Producto;
import com.producto.productocatalogo.model.Talla;
import com.producto.productocatalogo.repository.ProductoRepository;
import com.producto.productocatalogo.repository.TallaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private TallaRepository tallaRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        // Solo insertar datos si NO hay productos
        if (productoRepository.count() > 0) {
            System.out.println("La base de datos ya contiene productos. No se realizará la carga inicial.");
            return;
        }

        try {
            // Inicializar tallas si no existen
            if (tallaRepository.count() == 0) {
                initializeTallas();
            }

            // Obtener todas las tallas
            Talla tallaXS = tallaRepository.findByNombre("XS");
            Talla tallaS = tallaRepository.findByNombre("S");
            Talla tallaM = tallaRepository.findByNombre("M");
            Talla tallaL = tallaRepository.findByNombre("L");
            Talla tallaXL = tallaRepository.findByNombre("XL");
            Talla talla38 = tallaRepository.findByNombre("38");
            Talla talla39 = tallaRepository.findByNombre("39");
            Talla talla40 = tallaRepository.findByNombre("40");
            Talla talla41 = tallaRepository.findByNombre("41");
            Talla talla42 = tallaRepository.findByNombre("42");
            Talla talla43 = tallaRepository.findByNombre("43");
            Talla talla44 = tallaRepository.findByNombre("44");
            Talla talla45 = tallaRepository.findByNombre("45");

            // Actualizar productos existentes con tallas
            List<Producto> productos = productoRepository.findAll();
            for (Producto producto : productos) {
                if (producto.getTallas() == null) {
                    producto.setTallas(new HashSet<>());
                }

                String categoriaNombre = producto.getCategoria().getNombre();
                if (categoriaNombre.equals("Camisetas") || 
                    categoriaNombre.equals("Pantalones") || 
                    categoriaNombre.equals("Chaquetas")) {
                    List<Talla> tallasRopa = Arrays.asList(tallaXS, tallaS, tallaM, tallaL, tallaXL);
                    for (Talla talla : tallasRopa) {
                        if (!producto.getTallas().contains(talla)) {
                            producto.getTallas().add(talla);
                        }
                    }
                } else if (categoriaNombre.equals("Zapatos")) {
                    List<Talla> tallasZapato = Arrays.asList(talla38, talla39, talla40, talla41, talla42, talla43, talla44, talla45);
                    for (Talla talla : tallasZapato) {
                        if (!producto.getTallas().contains(talla)) {
                            producto.getTallas().add(talla);
                        }
                    }
                }
                productoRepository.save(producto);
            }
        } catch (Exception e) {
            System.err.println("Error en DataSeeder: " + e.getMessage());
            e.printStackTrace();
        }
    }

    @Transactional
    private void initializeTallas() {
        try {
            // Crear tallas de letra
            Talla tallaXS = new Talla();
            tallaXS.setNombre("XS");
            tallaRepository.save(tallaXS);

            Talla tallaS = new Talla();
            tallaS.setNombre("S");
            tallaRepository.save(tallaS);

            Talla tallaM = new Talla();
            tallaM.setNombre("M");
            tallaRepository.save(tallaM);

            Talla tallaL = new Talla();
            tallaL.setNombre("L");
            tallaRepository.save(tallaL);

            Talla tallaXL = new Talla();
            tallaXL.setNombre("XL");
            tallaRepository.save(tallaXL);

            // Crear tallas numéricas
            Talla talla38 = new Talla();
            talla38.setNombre("38");
            tallaRepository.save(talla38);

            Talla talla39 = new Talla();
            talla39.setNombre("39");
            tallaRepository.save(talla39);

            Talla talla40 = new Talla();
            talla40.setNombre("40");
            tallaRepository.save(talla40);

            Talla talla41 = new Talla();
            talla41.setNombre("41");
            tallaRepository.save(talla41);

            Talla talla42 = new Talla();
            talla42.setNombre("42");
            tallaRepository.save(talla42);

            Talla talla43 = new Talla();
            talla43.setNombre("43");
            tallaRepository.save(talla43);

            Talla talla44 = new Talla();
            talla44.setNombre("44");
            tallaRepository.save(talla44);

            Talla talla45 = new Talla();
            talla45.setNombre("45");
            tallaRepository.save(talla45);
        } catch (Exception e) {
            System.err.println("Error al inicializar tallas: " + e.getMessage());
            e.printStackTrace();
            throw e;
        }
    }
}



