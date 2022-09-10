import React from 'react'
import useShop from '../contextApi/context'

const CartItem = ({item}) => {
  const {remove} = useShop()
  return (
    <div className='cart-item'>
      <div className="cart-img">
        <img src={item.images[0]} alt={item.title} />
      </div>
      <div className="cart-item-title">{item.title}</div>
      <div className="cart-item-price">$ {item.price}</div>
      <div className="cart-item-remove" onClick={()=>remove(item.id)} >remove</div>
    </div>
  )
}

export default CartItem