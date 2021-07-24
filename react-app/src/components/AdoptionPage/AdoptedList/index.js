// src/components/AdoptionPage/AdoptedList
import React from "react";
import AdoptedCatCard from "./AdoptedCatCard";
import styles from './AdoptedList.module.css'

export default function AdoptedList({ your_cats }) {
  return (
    <div className={styles.catContainer}>
      {your_cats && your_cats.map((cat) =>
        <AdoptedCatCard key={cat.id} cat={cat} />
      ).reverse()}
      {your_cats.length < 1 &&
        <div className={styles.emptyContainer}>
          <img className={styles.unknownCat} src="assets/schrodingers_cat.jpg" alt="unknown cat"/>
          <h1 className={styles.empty}>You don't own any cats yet.</h1>

        </div>
      }
    </div>
  );
}
