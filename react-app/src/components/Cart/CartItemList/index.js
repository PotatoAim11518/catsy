// src/components/Cart/CartItemList
import React from "react";
import CartItem from "./CartItem";

export default function CartItemList({ cart_items }) {
  return (
    <>
    <div>
      {cart_items && cart_items.map((item) => {
        return <CartItem key={item.id} item={item} />
      })}
      {cart_items.length < 1 &&
        <div style={{ backgroundImage: `url(/schrödingers_cat.jpg)` }}>
          <img src="assets/schrödingers_cat.jpg" alt="unknown cat"/>
          <h1>Your cart is empty.</h1>
          <h2>(Probably)</h2>
        </div>
      }
    </div>
    </>
  );
}
