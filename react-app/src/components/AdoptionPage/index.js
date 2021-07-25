import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCats } from '../../store/cats';
import AdoptedList from './AdoptedList'
import styles from './AdoptionPage.module.css'

export default function AdoptionPage() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const cats = useSelector((state) => Object.values(state.cats));
  const your_cats =
    cats
      .filter((cat) =>
        (cat.owner_id === user.id && cat.adopted === true)
        )

  useEffect(() => {
    dispatch(getCats())
  },[dispatch])

  return (
    <>
    <h1 className={styles.header}>Your Cat Collection</h1>
      <AdoptedList your_cats={your_cats}/>
    </>
  )
}
