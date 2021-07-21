// src/components/Cart/CartItem
import React from 'react';
import styles from './cartitem.module.css'

export default function CartItem({item}) {

  return (
    <div className={styles.itemCard}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={item.cat.image_url} alt="cute cat"/>
      </div>
      <div className={styles.cardText}>
        <h2 className={styles.catName}>{item.cat.name}</h2>
        <p className={styles.catDescription}>{item.cat.description}</p>
      </div>
      <div>
        <button>X</button>
      </div>
    </div>
  )
}
