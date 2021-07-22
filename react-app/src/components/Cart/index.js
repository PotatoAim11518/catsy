// src/components/Cart
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, addCart, removeCart } from "../../store/cart";
import { getItems, addItem, removeItem } from "../../store/cartItem";
import CartItemList from "./CartItemList";
import styles from './cart.module.css'

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => Object.values(state.cart));
  const user = useSelector((state) => state.session.user);
  const cart_items = useSelector((state) => Object.values(state.cart_items));

  const handleEmptyCart = (e) => {
    e.preventDefault()
    dispatch(removeCart(user.id))
  }

  useEffect(() => {
    dispatch(getCart());
    dispatch(getItems());
  }, [dispatch]);

  return (
    <>
      <h1 className={styles.header}>My Cardboard Box</h1>
      <CartItemList cart_items={cart_items} />
      {cart_items.length > 0 &&
      <div>
        <button onClick={handleEmptyCart}>Clear Cart</button>
        <button>Adopt!</button>
      </div>}
    </>
  );
}
