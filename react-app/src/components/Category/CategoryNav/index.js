import React from "react";
import { NavHashLink } from "react-router-hash-link";
import styles from "./CategoryNav.module.css";

export default function CategoryNav({ category_names }) {
  return (
    <div className={styles.navWrapper}>
      {category_names?.map((category_name) =>
        <NavHashLink smooth to={"#" + `${category_name}`}
        activeClassName={styles.activeNav}
        activeStyle={{color: "white"}}>{category_name}</NavHashLink>
      )}
    </div>
  );
}
