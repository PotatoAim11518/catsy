import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getCats } from "../../store/cats";
import { getAges, getSizes, getCoats, getBreeds, getGenders } from '../../store/categories';

import CategorySection from "./CategorySection";
import CategoryNav from "./CategoryNav";
import styles from "./CategorySection.module.css";

export default function Category() {
  const { category } = useParams();
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories)
  const cats = useSelector((state) => Object.values(state.cats));
  // const category_names = categories[category];
  const category_singular = category.slice(0, category.length - 1);
  const category_names_all = cats.map((cat) => cat[category_singular]?.name)
  const category_names_set = new Set(category_names_all);
  const category_names = Array.from(category_names_set);


  useEffect(()=> {
    dispatch(getCats());
    dispatch(getAges());
    dispatch(getSizes());
    dispatch(getCoats());
    dispatch(getBreeds());
    dispatch(getGenders());
  },[dispatch])

  return (
    <>
      <CategoryNav category_names={category_names}/>
      <div className={styles.pageContainer}>
        {category_names?.map((category_name) =>
          <CategorySection key={category_name} category={category} category_name={category_name}/>
        )}
      </div>
    </>
  )
}
