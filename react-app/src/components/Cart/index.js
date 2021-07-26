// src/components/Cart
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getCart, removeCart } from "../../store/cart";
import { getItems, clearCart, clearAdopted } from "../../store/cartItem";
import { changeCat } from "../../store/cats";

import CartItemList from "./CartItemList";
import Button from "../Button";

import styles from "./cart.module.css";
import catInBox from '../../assets/cat_in_box.png'
import schrodingersCat from '../../assets/schrodingers_cat.jpg'

export default function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const user_id = user?.id
  const cart_items = useSelector((state) => Object.values(state.cart_items));


  const handleEmptyCart = (e) => {
    dispatch(removeCart());
    dispatch(clearCart());
  };

  const handleAdopt = (e) => {
    const contains_adopted = cart_items.some(
      (item) => item?.cat?.owner_id !== user?.id && item?.cat?.adopted === true
      );
      if (contains_adopted) {
        window.alert("Some cats have already been adopted. We've removed them from your cart for now!");
        dispatch(clearAdopted());
        return;
    }

    cart_items.forEach((item) =>
      dispatch(changeCat(item?.cat?.id, { owner_id: user?.id, adopted: true }))
    );
    dispatch(removeCart());
    dispatch(clearCart());
    history.push("/adopted", {
      state: cart_items.map((item) => item?.cat?.id),
    });
  };

  useEffect(() => {
    if (user_id) {
      dispatch(getCart());
      dispatch(getItems());
    }
  }, [dispatch, user_id]);

  return (
    <>
      <h1 className={styles.header}>
        {cart_items.length === 1 ? `1 Cat` : `${cart_items.length} Cats`} in
        your Cardboard box
      </h1>
      {cart_items.length < 1 && (
        <div className={styles.emptyCartArea}>
          <div className={styles.emptyCartContainer}>
            <img
              className={styles.unknownCat}
              src={schrodingersCat}
              alt="unknown cat"
            />
            <h1 className={styles.empty}>Your box is empty.</h1>
            <h2 className={styles.probably}>(probably)</h2>
            <div></div>
          </div>
        </div>
      )}
      {cart_items.length > 0 && (
        <div className={styles.cartArea}>
          <CartItemList cart_items={cart_items} />
          <div className={styles.buttonArea}>
            <img
              className={styles.catInBox}
              src={catInBox}
              alt="box cat"
            />
            <Button
              text={"Clear Cart"}
              action={handleEmptyCart}
              color={"lightslategray"}
            />
            <Button text={"Adopt!"} action={handleAdopt} color={"pink"} />
          </div>
        </div>
      )}
    </>
  );
}
