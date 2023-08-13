

const Search = ({value,handleInputChange,handleClick}) => {
 


  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for restaurants and food"
        value={value}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleClick}>🔍</button>
    </div>
  );
};

export default Search;
