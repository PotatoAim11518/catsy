// src/components/Cart/CartItemList
import React from "react";
import CartItem from "./CartItem";

export default function CartItemList({ cart_items }) {
  return (
    <>
      {cart_items && cart_items.map((item) => {
        return <CartItem key={item.id} item={item} />
      })}
    </>
  );
}
