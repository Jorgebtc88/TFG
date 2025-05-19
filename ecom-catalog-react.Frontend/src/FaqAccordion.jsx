/**
 * Vista principal de la sección de Preguntas Frecuentes (FAQ)
 * Muestra las categorías como tarjetas con íconos temáticos, nombre y cantidad de artículos.
 * Al hacer clic en una tarjeta, navega a la vista de preguntas de esa categoría.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaShoppingCart, FaTruck, FaTshirt, FaExchangeAlt, FaGift, FaEnvelope
} from 'react-icons/fa';
import './FaqAccordion.css';

// Definición de las categorías FAQ, cada una con slug, ícono y preguntas
export const categorias = [
  {
    nombre: 'Pedidos y Pagos',
    slug: 'pedidos-pagos',
    icono: <FaShoppingCart size={56} />, // Ícono temático
    preguntas: [
      {
        pregunta: '¿Qué métodos de pago aceptan en Fashion?',
        respuesta: 'Aceptamos pagos con Visa, MasterCard y PayPal. Todos los pagos se procesan de forma segura para proteger tu información.'
      },
      {
        pregunta: '¿Necesito crear una cuenta para comprar?',
        respuesta: 'No es obligatorio, pero si te registras podrás hacer seguimiento de tus pedidos, guardar productos favoritos y recibir promociones exclusivas.'
      },
      {
        pregunta: '¿Puedo modificar o cancelar un pedido ya realizado?',
        respuesta: 'Solo es posible modificar o cancelar un pedido dentro de las primeras 2 horas después de realizarlo. Contáctanos lo antes posible si necesitas hacerlo.'
      }
    ]
  },
  {
    nombre: 'Envíos y Entregas',
    slug: 'envios-entregas',
    icono: <FaTruck size={56} />,
    preguntas: [
      {
        pregunta: '¿Realizan envíos internacionales?',
        respuesta: 'Sí, hacemos envíos tanto nacionales como internacionales. Los costos y tiempos varían según el destino y se calculan al finalizar la compra.'
      },
      {
        pregunta: '¿Cuánto tarda en llegar mi pedido?',
        respuesta: 'Envíos nacionales: entre 2 y 5 días hábiles. Envíos internacionales: entre 7 y 15 días hábiles, dependiendo del país.'
      },
      {
        pregunta: '¿Cómo puedo hacer el seguimiento de mi pedido?',
        respuesta: 'Una vez enviado, recibirás un correo con el número de seguimiento y el enlace para rastrear tu paquete en tiempo real.'
      }
    ]
  },
  {
    nombre: 'Productos y Tallas',
    slug: 'productos-tallas',
    icono: <FaTshirt size={56} />,
    preguntas: [
      {
        pregunta: '¿Cómo elijo la talla correcta?',
        respuesta: 'Cada producto incluye una guía de tallas. Si tienes dudas, te recomendamos medir una prenda similar que ya tengas y compararla con nuestra tabla.'
      },
      {
        pregunta: '¿Los productos se ven exactamente como en las fotos?',
        respuesta: 'Sí, pero ten en cuenta que puede haber una ligera variación de color dependiendo del dispositivo desde el que veas las imágenes.'
      }
    ]
  },
  {
    nombre: 'Cambios y Devoluciones',
    slug: 'cambios-devoluciones',
    icono: <FaExchangeAlt size={56} />,
    preguntas: [
      {
        pregunta: '¿Puedo devolver o cambiar un producto si no me queda?',
        respuesta: 'Sí, aceptamos devoluciones y cambios dentro de los 14 días posteriores a la recepción, siempre que el producto esté sin usar y con su etiqueta original.'
      },
      {
        pregunta: '¿Cómo solicito una devolución?',
        respuesta: 'Escríbenos a devoluciones@fashion.com con tu número de pedido y te guiaremos en el proceso.'
      }
    ]
  },
  {
    nombre: 'Promociones y Descuentos',
    slug: 'promociones-descuentos',
    icono: <FaGift size={56} />,
    preguntas: [
      {
        pregunta: '¿Tienen algún descuento por registrarse?',
        respuesta: '¡Sí! Si te suscribes a nuestro boletín, recibirás un 10% de descuento en tu primera compra.'
      },
      {
        pregunta: '¿Cómo uso un código de descuento?',
        respuesta: 'Al finalizar la compra, introduce el código en el campo "Cupón de descuento" y se aplicará automáticamente al total.'
      }
    ]
  },
  {
    nombre: 'Atención al Cliente',
    slug: 'atencion-cliente',
    icono: <FaEnvelope size={56} />,
    preguntas: [
      {
        pregunta: '¿Cómo puedo comunicarme con ustedes?',
        respuesta: 'Puedes escribirnos por correo a contacto@fashion.com o por WhatsApp/Chat en Vivo, disponible de lunes a viernes, de 9:00 a 18:00 h (hora local).'
      }
    ]
  }
];

/**
 * Componente principal de FAQ: muestra las tarjetas de categorías
 */
const FaqAccordion = () => {
  const navigate = useNavigate();
  return (
    <div className="faq-cards-container">
      {/* Título principal de la sección FAQ */}
      <h2 className="faq-cards-title">Obtener información</h2>
      {/* Grid de tarjetas de categorías */}
      <div className="faq-cards-grid">
        {categorias.map((cat, idx) => (
          <div
            key={cat.slug}
            className="faq-card"
            onClick={() => navigate(`/faq/${cat.slug}`)}
            /* Al hacer clic, navega a la vista de la categoría */
          >
            <div className="faq-card-icon">{cat.icono}</div>
            <div className="faq-card-info">
              <div className="faq-card-title">{cat.nombre}</div>
              {/* Cantidad de artículos/preguntas */}
              <div className="faq-card-count">{cat.preguntas.length} artículo{cat.preguntas.length > 1 ? 's' : ''}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion; 