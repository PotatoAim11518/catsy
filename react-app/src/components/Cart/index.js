// src/components/Cart
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../store/cart';
import CartItemList from './CartItemList';


export default function Cart() {
  const dispatch = useDispatch
  const cart = useSelector((state) => state.cart)
  // const cartItems = useSelector((state) => state.cart)

  // useEffect(() => {
  //   dispatch(getCart())
  // },[dispatch])


  return (
    <>
      <h1>My Cardboard Box</h1>
      {/* <p>{cart}</p> */}
      <CartItemList />
      <button>Clear Cart</button>
      <button>Adopt!</button>
    </>
  )
}
