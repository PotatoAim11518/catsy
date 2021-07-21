// src/components/Cart/CartItemList
import React from "react";
import CartItem from "./CartItem";

export default function CartItemList({ cart_items }) {
  return (
    <>
      <h2>List of Cart Items</h2>
      {cart_items && cart_items.map((item) => {
        return <CartItem item={item} />
      })}
    </>
  );
}
