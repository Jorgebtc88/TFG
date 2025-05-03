import { useEffect, useState } from 'react'
import './App.css'
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';

const API_URL = '/api';

function App() {
const [Producto, setProducto] = useState([]);
const [categoria, setCategoria] = useState([]);
const [selectedCategory, setSelectedCategory] = useState(null);
const [searchTerm, setSearchTerm] = useState('');
const [sortOrder, setSortOrder] = useState('asc');

useEffect(() => {
  // Cargar productos
  fetch(`http://localhost:8080/api/products`)
    .then(response => response.json())
    .then(data => setProducto(data));
      
  // Cargar categorías
  fetch(`http://localhost:8080/api/categoria`)
    .then(response => response.json())
    .then(data => setCategoria(data));
}, []);

const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
};

const handleSortChange = (event) => {
  setSortOrder(event.target.value);
};

const handleCategorySelect = (categoryId) => {
   console.log('Selected Category ID:', categoryId);
   setSelectedCategory(categoryId ? Number(categoryId) : null);
};

const filteredProducts = Producto
.filter(product => {
  console.log('Product:', product);
  console.log('Selected Category:', selectedCategory);
  console.log('Product Category ID:', product.categoria.id);
  return (
     (selectedCategory ? product.categoria.id === selectedCategory : true)
      && 
      product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) 
  )   
})
.sort((a, b) => {
  console.log('Sorting:', a.precio, b.precio);
  if (sortOrder === 'asc') {
    return a.precio - b.precio;
  } 
  return b.precio - a.precio;
});


return (
  <div className="container">
    <h1 className='my-4'>Catalogo de Productos</h1>

    <div className='row align-items-center mb-4'>
      <div className='col-md-3 col-sm-12 mb-3'>
        <CategoryFilter Categoria={categoria} onSelect={handleCategorySelect} />
      
      </div>

      <div className='col-md-5 col-sm-12 mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Buscar por productos'
          onChange={handleSearchChange}
        />
      </div>

      <div className='col-md-4 col-sm-12 mb-3'>
        <select className="form-control" onChange={handleSortChange}>
          <option value='asc'>Sort by Price (Low to High)</option>
          <option value='desc'>Sort by Price (High to Low)</option>
        </select>
      </div>
    </div>

    <div>
      {filteredProducts.length ? (
        <ProductList Producto={filteredProducts} />
      ) : (
        <p>No Products Found</p>
      )}
    </div>
  </div>  
)
}
export default App
