import React from 'react'
import Home from '../component/Home'

const Cart = (props) => {
  return (
    <div>
      <h1>{<Home todo={props.Cart}/>}</h1>
    </div>
  )
}

export default Cart
