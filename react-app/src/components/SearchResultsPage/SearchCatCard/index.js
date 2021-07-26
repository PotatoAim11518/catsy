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
        <h2 className={styles.name}>{cat.name}</h2>
        {/* <p className={styles.description}>
          {cat.description ? cat.description : "No description provided"}
        </p> */}
        <ul>
          <li>Age: {cat?.age?.name}</li>
          <li>Gender: {cat?.gender?.name}</li>
          <li>Size: {cat?.size?.name}</li>
          <li>Coat: {cat?.coat ? cat?.coat?.name : "Unavailable"}</li>
          <li>Breed: {cat?.breed?.name}</li>
        </ul>
      </div>
    </div>
  );
}
