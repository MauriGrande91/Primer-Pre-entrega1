

import "./ItemDetail.css"

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className="contenedorItem">
            <h2> Nombre: {nombre}</h2>
            <h3> Precio: {precio}</h3>
            <h3>ID :{id}</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates, nam modi ad laborum ut praesentium cum sint quos dolorem tempora, sed doloremque itaque labore libero! Excepturi debitis dolorum possimus.</p>
            <img src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail