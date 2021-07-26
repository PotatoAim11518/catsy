import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const handleEnterKeyPress = e => {
    if(e.key === 'Enter') {
      handleSearch();
      setSearchTerm("");
    }
  }

  const handleSearch = () => {
    history.push(`/search/${searchTerm.toLowerCase()}`);
    setSearchTerm("");
  }

  return (
    <div className="searchbar-container">
      <input 
        type="text" 
        className="search-input" 
        value={searchTerm} 
        placeholder="Search for any cat" 
        onChange={e => setSearchTerm(e.target.value)} 
        onKeyPress={handleEnterKeyPress}>
        </input>
      <button>
        <i className="fas fa-search" onClick={handleSearch}></i>
      </button>
    </div>
  )
}

export default SearchBar