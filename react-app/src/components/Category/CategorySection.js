import React from "react";
import { useSelector } from "react-redux";

import SearchCatCard from "../SearchResultsPage/SearchCatCard";
import styles from "../SearchResultsPage/SearchCatCard/SearchCatCard.module.css"

export default function CategorySection({ category, category_name }) {
  const cats = useSelector((state) => Object.values(state.cats));
  const category_key = category.slice(0, category.length - 1);
  const category_cats = cats.filter(
    (cat) => category_name === cat[`${category_key}`]["name"]
  );

  return (
    <div>
      <h1>{category_name}</h1>
      {category_cats.map((cat)=>
        <SearchCatCard key={cat?.id} cat={cat}/>
      )}
    </div>
  )

}
