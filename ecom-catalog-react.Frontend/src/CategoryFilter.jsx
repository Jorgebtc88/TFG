const CategoryFilter = ({ Categoria, onSelect }) => { 
    return (
    <>
       <select id="category-select" className="form-control" onChange={(e) => onSelect(e.target.value)}>
         <option value="">Todas las categorías</option>
         {Categoria.map(categoria => (
            <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
         ))}
       </select>
    </>
    )
}
export default CategoryFilter; 