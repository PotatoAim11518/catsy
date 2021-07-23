// src/components/Cart
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, addCart, removeCart } from "../../store/cart";
import { getItems, clearCart, addItem, removeItem } from "../../store/cartItem";
import CartItemList from "./CartItemList";
import styles from './cart.module.css'
import { changeCat } from "../../store/cats";

export default function Cart() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const cart_items = useSelector((state) => Object.values(state.cart_items));

  const handleEmptyCart = (e) => {
    dispatch(removeCart())
    dispatch(clearCart())
  }

  const handleAdopt = (e) => {
    cart_items.forEach((item) =>
      dispatch(changeCat(item?.cat?.id, {'owner_id': user?.id,'adopted': true}))
    );
    dispatch(removeCart())
    dispatch(clearCart())
  }

  useEffect(() => {
    dispatch(getCart())
    dispatch(getItems())
  },[dispatch]);

  return (
    <>
      <h1 className={styles.header}>My Cardboard Box</h1>
      <CartItemList cart_items={cart_items} />
      {cart_items.length > 0 &&
      <div>
        <button onClick={handleEmptyCart}>Clear Cart</button>
        <button onClick={handleAdopt}>Adopt!</button>
      </div>}
    </>
  );
}
