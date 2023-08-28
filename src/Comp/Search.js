

const Search = ({value,handleInputChange,handleClick}) => {
 


  return (
    <div className="flex flex-row items-center justify-center   ">
      <input className="text-lg w-1/2 h-1/2 px-2 py-2 mt-2 font-medium  leading-6 rounded-md border-2 mx-3 my-3 outline-none"
        type="text"
        placeholder="Search for restaurants and food"
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={handleClick} className="w-14 h-10  mx-4 bg-green-500 text-base flex items-center justify-center ">Search</button>
    </div>
  );
};

export default Search;
