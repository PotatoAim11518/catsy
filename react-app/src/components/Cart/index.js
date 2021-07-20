// src/components/Cart
import React from 'react';
import CartItems from '../Cart/CartItems'

export default function Cart() {

  return (
    <>
      <h1>My Cardboard Box</h1>
      <CartItems />
      <button>Clear Cart</button>
      <button>Adopt!</button>
    </>
  )
}
