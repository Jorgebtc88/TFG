const ProductList = ({ Producto }) => { 
    return (
        <div className="row">
            {Producto.map(Producto => (
                <div className= "col-lg-4 col-md-6 col-sm-12 mb-4" key={Producto.id}>
                <div className="card h-100">
                   <img 
                    src={Producto.imageUrl || 'https://placehold.co/600x400'}
                    className= "card-img-top"
                    alt={Producto.name}/>
                <div className="card-body">
                    <h5 className="card-title">{Producto.nombre}</h5>
                    <p className="card-text">{Producto.descripcion}</p>
                    <p className="card-text"><strong>${Producto.precio}</strong></p>
                </div>
            </div>
        </div> 
  ))}
  </div>
    )
}
export default ProductList;