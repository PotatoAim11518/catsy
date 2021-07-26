import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getCats } from "../../store/cats";
import SearchCatCard from "./SearchCatCard";
import styles from "./SearchResultsPage.module.css";

const SearchResultsPage = () => {
  const { searchTerm } = useParams();
  const dispatch = useDispatch();
  // const [catNameResults, setCatNameResults] = useState([])
  const cats = useSelector(state => state.cats)
  let regexExpression = new RegExp(searchTerm)

  const catNameResults = Object.values(cats)?.filter(cat => regexExpression.test(cat.name.toLowerCase()));
  const ageResults = Object.values(cats)?.filter(cat => cat.age.name.toLowerCase() === searchTerm);
  const genderResults = Object.values(cats)?.filter(cat => cat.gender.name.toLowerCase() === searchTerm);
  const sizeResults = Object.values(cats)?.filter(cat => cat.size.name.toLowerCase() === searchTerm);
  const coatResults = Object.values(cats)?.filter(cat => cat.coat?.name.toLowerCase() === searchTerm);
  const breedResults = Object.values(cats)?.filter(cat => cat.breed.name.toLowerCase() === searchTerm);

  const allResults = [...catNameResults, ...ageResults,...genderResults, ...breedResults, ...sizeResults, ...coatResults];

  useEffect(() => {
    dispatch(getCats())
  },[dispatch])

  return (
    <>
      <h1>Search Term: {searchTerm}</h1>
      <div className={styles.catContainer}>
        {allResults?.map(cat => <SearchCatCard key={cat.id} cat={cat}/>)}
      </div>
    </>
  )
}

export default SearchResultsPage;