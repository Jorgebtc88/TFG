const ProductList = ({ Producto }) => { 
    return (
        <div className="products-grid">
            {Producto.map(Producto => (
                <div className="product-card" key={Producto.id}>
                    <div className="card">
                        <div className="card-image-container">
                            <img 
                                src={Producto.imageUrl || 'https://placehold.co/600x400'}
                                className="card-img-top"
                                alt={Producto.nombre}
                            />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{Producto.nombre}</h5>
                            <p className="card-description">{Producto.descripcion}</p>
                            <div className="card-footer">
                                <p className="card-price">${Producto.precio}</p>
                                <button className="card-button">Ver detalles</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductList;