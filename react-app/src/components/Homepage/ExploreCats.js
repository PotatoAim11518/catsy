import React from "react";
import styles from "./ExploreCats.module.css";
import CategoryCard from "./CategoryCard";
import Button from "../Button";
import { useHistory } from "react-router-dom";

const ExploreCats = ({ cats, category_names }) => {
  const history = useHistory();

  const getRandomCat = () => {
    const randomCat = Math.floor(Math.random() * cats.length);
    history.push(`/cats/${randomCat}`)
  }

  return (
    <>
      <div className={styles.exploreContainer}>
        <h1 className={styles.exploreHeader}>Because everyone deserves a cuddly feline friend</h1>
        <div className={styles.categoryCardContainer}>
          {category_names.map((category) => {
            const randomCatId = Math.floor(Math.random() * cats.length);
            const randomCatImage = cats[randomCatId]?.image_url;
            return (
              <CategoryCard
                key={category}
                category={category}
                randomCatImage={randomCatImage}
              />
            );
          })}
        </div>
        <div className={styles.randomCatButton}>
          <Button text={"Show me a random cat!"} action={getRandomCat} />
        </div>
      </div>
    </>
  );
};

export default ExploreCats;
