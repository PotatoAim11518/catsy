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
      {cart_items.length < 1 &&
        <div className={styles.emptyCartContainer}>
          <img className={styles.unknownCat} src="assets/schrodingers_cat.jpg" alt="unknown cat"/>
          <h1 className={styles.empty}>Your box is empty.</h1>
          <h2 className={styles.probably}>(probably)</h2>
          <div>
          </div>
        </div>
      }
    </div>
  );
}
