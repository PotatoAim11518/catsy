// src/components/Cart
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, addCart, removeCart } from "../../store/cart";
import { getItems, addItem, removeItem } from "../../store/cartItem";
import CartItemList from "./CartItemList";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cart_items = useSelector((state) => Object.values(state.cart_items));

  useEffect(() => {
    dispatch(getCart());
    dispatch(getItems());
  }, [dispatch]);

  return (
    <>
      <h1>My Cardboard Box</h1>
      <CartItemList cart_items={cart_items} />
      <div>
        <button>Clear Cart</button>
        <button>Adopt!</button>
      </div>
    </>
  );
}