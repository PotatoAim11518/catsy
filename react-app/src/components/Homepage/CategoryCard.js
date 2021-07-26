import { useHistory } from "react-router-dom";
import styles from "./CategoryCard.module.css";

const CategoryCard = ({ category, randomCatImage }) => {
  const history = useHistory();

  const handleCategorySearch = () => {
    history.push(`/${category}`)
    return
  }

  return (
    <>
      <div onClick={handleCategorySearch} className={styles.cardContainer}>
        <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url(${randomCatImage})` }}
        >
        </div>
        <div className={styles.categoryTextContainer}>
          <h2 className={styles.categoryText}>
            {[
              category.split("")[0].toUpperCase(),
              category.split("").slice(1).join(""),
            ].join("")}
          </h2>
          <span className={styles.arrow}>➜</span>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
