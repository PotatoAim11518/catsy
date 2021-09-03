import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getCats } from "../../store/cats";
import { getAges, getSizes, getCoats, getBreeds, getGenders } from '../../store/categories';

import CategorySection from "./CategorySection";
import styles from "./CategorySection.module.css";

export default function Category() {
  const { category } = useParams();
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories)
  const category_names = categories[category];

  useEffect(()=> {
    dispatch(getCats())
    dispatch(getAges());
    dispatch(getSizes());
    dispatch(getCoats());
    dispatch(getBreeds());
    dispatch(getGenders());
  },[dispatch])

  return (
    <div className={styles.pageContainer}>
      {category_names?.map((category_name) =>
        <CategorySection key={category_name} category={category} category_name={category_name}/>
      )}
    </div>

  )
}
