import { useState, useEffect } from "react";
import { useParams } from "react-router";
const SearchResultsPage = () => {
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   (async() => {
  //     const response = await fetch(`/api/search/${searchTerm}`);

  //     if(response.ok) {
  //       const searchData = await response.json();
  //       setSearchResults("PUT IN RESPONSE HERE");
  //     }
  //     console.log("useEffect works")
  //   })
  // }, [searchTerm])
  return (
    <>
      <h1>Search Term: {searchTerm}</h1>
    </>
  )
}

export default SearchResultsPage;