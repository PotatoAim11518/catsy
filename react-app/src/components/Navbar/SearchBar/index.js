import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const handleEnterKeyPress = e => {
    if(e.key === 'Enter') {
      handleSearch();
    }
  }

  const handleSearch = () => {
    history.push(`/search/${searchTerm}`);
  }

  return (
    <div className="searchbar-container">
      <input type="text" className="search-input" placeholder="Search for any cat" onChange={e => setSearchTerm(e.target.value)} onKeyPress={handleEnterKeyPress}></input>
      <button>
        <i className="fas fa-search" onClick={handleSearch}></i>
      </button>
    </div>
  )
}

export default SearchBar