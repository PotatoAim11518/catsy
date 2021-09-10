import React from "react";
import { useSelector } from "react-redux";

import SearchCatCard from "../SearchResultsPage/SearchCatCard";
import styles from "../Category/CategorySection.module.css";

export default function CategorySection({ category, category_name }) {
  const cats = useSelector((state) => Object.values(state.cats));
  const category_key = category.slice(0, category.length - 1);
  const category_cats = cats.filter(
    (cat) => category_name === cat[`${category_key}`]?.name
  );

  return (
    <div className={styles.sectionWrapper} id={category_name}>
      {category_cats.length > 0 && (
        <>
          <h1 className={styles.sectionHeader}>{category_name}</h1>
          <div className={styles.tileContainer}>
            {category_cats.map((cat) => (
              <SearchCatCard key={cat?.id} cat={cat} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
