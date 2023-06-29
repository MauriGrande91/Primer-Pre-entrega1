import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'


import { CarritoContext } from '../../context/CarritoContext';

import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);



  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p className="descrip"> Tela:	Algodón|Polyester|Lino</p>
      <p className="descrip">Composición:	92% poliéster - 8% elastano</p>
      <p className="descrip">Color:	Negro</p>
      <p className="descrip">Detalles:	Estampa</p>
      <p className="descrip">Código Artículo:	AT661AT96ZTFAR</p>
      <img src={img} alt={nombre} />
      {

      }
      {
        agregarCantidad > 0 ? (<Link className='miButn' to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail