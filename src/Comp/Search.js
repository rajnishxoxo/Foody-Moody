import { useState } from "react";

const Search = () => {
  const [value, setvalue] = useState("");

  const handleInputChange = (e) => {
    setvalue(e.target.value)
  };

  console.log(value)

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for restaurants and food"
        value={value}
        onChange={handleInputChange}
      />
      <button className="search-button">🔍</button>
    </div>
  );
};

export default Search;
