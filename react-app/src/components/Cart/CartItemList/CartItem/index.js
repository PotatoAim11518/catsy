// src/components/Cart/CartItem
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './cartitem.module.css'
import { getItems, removeItem } from '../../../../store/cartItem'

export default function CartItem({item}) {
  const dispatch = useDispatch();

  const handleRemoveCartItem = () => {
    dispatch(removeItem(item.id))
  }

  useEffect(() => {
    dispatch(getItems)
  },[dispatch])


  return (
    <div className={styles.itemCard}>
      <div className={styles.imageContainer} style={{"backgroundImage":`url(${item.cat.image_url})`}}></div>
      {/* <div className={styles.imageContainer}>
        <img className={styles.image} src={item.cat.image_url} alt="cute cat"/>
      </div> */}
      <div className={styles.cardText}>
        <h2 className={styles.catName}>{item.cat.name}</h2>
        <h3 className={styles.catName}>{item.cat.breed.name}</h3>
        <p className={styles.catDescription}>{item.cat.description}</p>
      </div>
      <div>
        <button onClick={handleRemoveCartItem}>X</button>
      </div>
    </div>
  )
}
