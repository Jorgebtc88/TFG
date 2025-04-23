import { useEffect, useState } from 'react'
import './App.css'
import ProductList from './ProductList';

function App() {
const [Producto, setProducto] = useState([]);

useEffect(() => {
  fetch ('http://localhost:8080/api/products')
  .then((response) => response.json())
  .then(data => setProducto(data));
  },[]);  
return (
<div className="container">
<div>
{Producto.length ? (
 //Display the products
 <ProductList Producto={Producto} />

 
): (
  <p>No Products Found</p>
)}
</div>
</div>  
)
}
export default App
