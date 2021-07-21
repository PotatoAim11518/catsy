const SearchBar = () => {

  return (
    <div className="searchbar-container">
      <input type="text" className="search-input" placeholder="Search for any cat"></input>
      <button>
        <i className="fas fa-search"></i>
      </button>
    </div>
  )
}

export default SearchBar