// src/components/Cart/CartItemList
import React from "react";
import CartItem from "./CartItem";
import styles from './cartitemlist.module.css'

export default function CartItemList({ cart_items }) {
  return (
    <div className={styles.cartContainer}>
      {cart_items && cart_items.map((item) => {
        return <CartItem key={item.id} item={item} />
      }).reverse()}
      
    </div>
  );
}
