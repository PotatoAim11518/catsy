// src/components/Cart
import React from 'react';
import { useSelector } from 'react-redux';
import CartItemList from './CartItemList'

export default function Cart() {
  const cart = useSelector((state) => state.cart)
  // const cartItems = useSelector((state) => state.cart)

  return (
    <>
      <h1>My Cardboard Box</h1>
      <CartItemList />
      <button>Clear Cart</button>
      <button>Adopt!</button>
    </>
  )
}
