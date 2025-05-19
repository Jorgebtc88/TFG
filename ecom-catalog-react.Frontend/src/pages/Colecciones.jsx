import React from 'react';
import { Link } from 'react-router-dom';
import './Colecciones.css';

const Colecciones = () => {
  const colecciones = [
    {
      id: 1,
      nombre: "Verano 2024",
      descripcion: "Descubre las últimas tendencias para el verano con nuestra colección de prendas ligeras y coloridas.",
      imagen: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3",
      slug: "verano-2024"
    },
    {
      id: 2,
      nombre: "Colección Minimalista",
      descripcion: "Piezas esenciales con un diseño limpio y atemporal para un guardarropa versátil.",
      imagen: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3",
      slug: "minimalista"
    },
    {
      id: 3,
      nombre: "Street Style",
      descripcion: "Inspirada en las calles de las grandes ciudades, esta colección combina comodidad y estilo urbano.",
      imagen: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3",
      slug: "street-style"
    },
    {
      id: 4,
      nombre: "Colección Sostenible",
      descripcion: "Moda consciente con materiales eco-friendly y procesos sostenibles.",
      imagen: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3",
      slug: "sostenible"
    },
    {
      id: 5,
      nombre: "Colección Formal",
      descripcion: "Elegancia y sofisticación para ocasiones especiales y eventos formales.",
      imagen: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-4.0.3",
      slug: "formal"
    },
    {
      id: 6,
      nombre: "Colección Deportiva",
      descripcion: "Ropa deportiva de alto rendimiento con estilo y funcionalidad.",
      imagen: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3",
      slug: "deportiva"
    }
  ];

  return (
    <div className="colecciones-container">
      <h1 className="colecciones-titulo">Nuestras Colecciones</h1>
    

      <section className="todas-colecciones">
        <div className="colecciones-grid">
          {colecciones.map(coleccion => (
            <Link 
              to={`/coleccion/${coleccion.slug}`} 
              key={coleccion.id} 
              className="coleccion-card"
            >
              <div className="coleccion-imagen">
                <img src={coleccion.imagen} alt={coleccion.nombre} />
              </div>
              <div className="coleccion-info">
                <h3>{coleccion.nombre}</h3>
                <p>{coleccion.descripcion}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Colecciones; 