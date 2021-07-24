// src/components/AdoptionPage/AdoptedList/AdoptedCatCard
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './AdoptedCatCard.module.css';

export default function AdoptedCatCard({cat}) {
  const history = useHistory();

  const handleGoToCatPage = (e) => {
    history.push(`/cats/${cat.id}`)
    return
  }

  return (
      <div onClick={handleGoToCatPage} className={styles.catCard}>
        <div className={styles.imageContainer} style={{"backgroundImage":`url(${cat.image_url})`}}></div>
        <div className={styles.text}>
          <h2 className={styles.name}>{cat.name}</h2>
          <p className={styles.description}>{cat.description ? cat.description : "No description provided"}</p>
          <h3 className={styles.adoptionDate}>Adopted {new Date(cat.updated_at)
            .toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})}</h3>
        </div>
        {((new Date() - new Date(cat.updated_at)) / 3600000) < 24 && (<div className={styles.adoptionStatus}>
          "Recently adopted"
        </div>)}
      </div>
  )
}
