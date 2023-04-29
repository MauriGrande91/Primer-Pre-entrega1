import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
    const imgCarrito = "../src/assets/carrito3.png";
  return (
    <div>
      <img className="carrito" src={imgCarrito} alt="carrito de compras" />
    <p>10</p>
    </div>
  )
}

export default CartWidget
