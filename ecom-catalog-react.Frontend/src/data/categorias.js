/**
 * Datos de las categorías de la tienda
 * Estructura organizada por secciones principales y subcategorías
 */

export const categorias = {
  hombres: {
    nombre: "Hombres",
    slug: "hombres",
    subcategorias: [
      {
        nombre: "Camisetas",
        slug: "camisetas",
        descripcion: "Camisetas casuales y formales para hombre"
      },
      {
        nombre: "Pantalones",
        slug: "pantalones",
        descripcion: "Pantalones vaqueros, chinos y formales"
      },
      {
        nombre: "Zapatos",
        slug: "zapatos",
        descripcion: "Zapatos casuales, deportivos y formales"
      },
      {
        nombre: "Accesorios",
        slug: "accesorios-hombres",
        descripcion: "Cinturones, relojes, carteras y más"
      }
    ]
  },
  mujeres: {
    nombre: "Mujeres",
    slug: "mujeres",
    subcategorias: [
      {
        nombre: "Vestidos",
        slug: "vestidos",
        descripcion: "Vestidos casuales, de fiesta y de noche"
      },
      {
        nombre: "Blusas",
        slug: "blusas",
        descripcion: "Blusas y tops para todas las ocasiones"
      },
      {
        nombre: "Faldas",
        slug: "faldas",
        descripcion: "Faldas de diferentes estilos y longitudes"
      },
      {
        nombre: "Accesorios",
        slug: "accesorios-mujeres",
        descripcion: "Bolsos, joyería, bufandas y más"
      }
    ]
  },
  accesorios: {
    nombre: "Accesorios",
    slug: "accesorios",
    subcategorias: [
      {
        nombre: "Bolsos",
        slug: "bolsos",
        descripcion: "Bolsos y mochilas para todos los estilos"
      },
      {
        nombre: "Joyería",
        slug: "joyeria",
        descripcion: "Collares, pulseras, anillos y más"
      },
      {
        nombre: "Relojes",
        slug: "relojes",
        descripcion: "Relojes de pulsera para hombre y mujer"
      },
      {
        nombre: "Gafas",
        slug: "gafas",
        descripcion: "Gafas de sol y graduadas"
      }
    ]
  },
  calzado: {
    nombre: "Calzado",
    slug: "calzado",
    subcategorias: [
      {
        nombre: "Deportivo",
        slug: "deportivo",
        descripcion: "Zapatillas deportivas y running"
      },
      {
        nombre: "Casual",
        slug: "casual",
        descripcion: "Zapatos casuales para el día a día"
      },
      {
        nombre: "Formal",
        slug: "formal",
        descripcion: "Zapatos formales y de vestir"
      },
      {
        nombre: "Sandalias",
        slug: "sandalias",
        descripcion: "Sandalias y chanclas"
      }
    ]
  },
  ofertas: {
    nombre: "Ofertas",
    slug: "ofertas",
    subcategorias: [
      {
        nombre: "Rebajas",
        slug: "rebajas",
        descripcion: "Productos con descuentos especiales"
      },
      {
        nombre: "Liquidación",
        slug: "liquidacion",
        descripcion: "Últimas unidades con grandes descuentos"
      },
      {
        nombre: "Pack Especiales",
        slug: "packs",
        descripcion: "Conjuntos y packs con descuento"
      }
    ]
  }
};

/**
 * Función para obtener una categoría específica por su slug
 * @param {string} slug - El slug de la categoría a buscar
 * @returns {Object|null} La categoría encontrada o null si no existe
 */
export const getCategoriaBySlug = (slug) => {
  return Object.values(categorias).find(cat => cat.slug === slug) || null;
};

/**
 * Función para obtener una subcategoría específica
 * @param {string} categoriaSlug - El slug de la categoría principal
 * @param {string} subcategoriaSlug - El slug de la subcategoría
 * @returns {Object|null} La subcategoría encontrada o null si no existe
 */
export const getSubcategoria = (categoriaSlug, subcategoriaSlug) => {
  const categoria = getCategoriaBySlug(categoriaSlug);
  if (!categoria) return null;
  
  return categoria.subcategorias.find(sub => sub.slug === subcategoriaSlug) || null;
}; 