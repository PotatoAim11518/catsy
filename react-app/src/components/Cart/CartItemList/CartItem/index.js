// src/components/Cart/CartItem
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './cartitem.module.css';
import { getItems, removeItem } from '../../../../store/cartItem';
import Button from '../../../Button';

export default function CartItem({item}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRemoveCartItem = (e) => {
    e.stopPropagation();
    dispatch(removeItem(item.id));
    return
  }

  const handleGoToCatPage = (e) => {
    history.push(`/cats/${item.cat.id}`)
    return
  }

  return (
      <div onClick={handleGoToCatPage} className={styles.itemCard}>
        <div className={styles.imageContainer} style={{"backgroundImage":`url(${item.cat.image_url})`}}>
          {item?.cat?.adopted && (
                <img
                  className={styles.adoptedStamp}
                  src="/assets/cat_adopted.png"
                  alt="cat adopted"
                />
              )}
        </div>
        <div className={styles.cardText}>
          <h2 className={styles.catName}>{item.cat.name}</h2>
          <h3 className={styles.catBreed}>{item.cat.breed.name}</h3>
          <p className={styles.catDescription}>{item.cat.description}</p>
        </div>
        <div className={styles.removeButton}>
          <Button text={"X"} action={handleRemoveCartItem} color={"lightslategrey"} width={40}/>
          {/* <button onClick={handleRemoveCartItem}>X</button> */}
        </div>
      </div>
  )
}
