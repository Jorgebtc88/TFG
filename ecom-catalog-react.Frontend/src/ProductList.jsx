const ProductList = ({ Producto }) => { 
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {Producto.map(producto => (
                <div className="col" key={producto.id}>
                    <div className="card h-100">
                        <img 
                            src={producto.imagenUrl || 'https://placehold.co/600x400'}
                            className="card-img-top"
                            alt={producto.nombre}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">{producto.descripcion}</p>
                            <p className="card-text"><strong>${producto.precio}</strong></p>
                        </div>
                    </div>
                </div> 
            ))}
        </div>
    )
}
export default ProductList;