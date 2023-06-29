import "./CartWidget.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  const imgCarrito = "../src/assets/carrito3.png";

  return (
    <Link style={{ textDecoration: "none" }} to='/cart'>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
      {
        cantidadTotal > 0 && <strong className="nimCarrito"> {cantidadTotal} </strong>
      }
    </Link>
  )
}

export default CartWidget