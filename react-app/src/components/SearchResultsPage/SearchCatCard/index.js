// src/components/AdoptionPage/AdoptedList/AdoptedCatCard
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./SearchCatCard.module.css";

export default function SearchCatCard({ cat }) {
  const history = useHistory();

  const handleGoToCatPage = (e) => {
    history.push(`/cats/${cat.id}`);
    return;
  };

  return (
    <div onClick={handleGoToCatPage} className={styles.catCard}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${cat.image_url})` }}
      ></div>
      <div className={styles.textContainer}>
        <h2 className={styles.catName}>{cat.name}</h2>
        <h3 className={styles.catBreed}>{cat?.breed?.name}</h3>
        <p className={styles.catQuickInfo}>
            {cat?.age.name} | {cat?.gender.name} | {cat?.size.name}
          </p>
      </div>
    </div>
  );
}
