import restaurantList from "./MockData.js";
import Card from "./Card.js";
import Search from "./Search.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
const Body = () => {
  const [listOfRestro, setListOfRestro] = useState(restaurantList);

  const [filterList, setFilterList] = useState(restaurantList);

  const [value, setvalue] = useState("");

  const fetchData = async () => {
    const json = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.10296183168158&lng=79.0430336818099&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await json.json();
    console.log(
      data.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestro(
      data.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(data.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setvalue(e.target.value);
  };

  const handleClick = () => {
    let filterData = listOfRestro.filter((data)=>{
      return data.info.name.toLowerCase().includes(value.toLowerCase());
    
    })
    setFilterList(filterData)
  };

  if(filterList==null) return <Shimmer/>

  console.log(value);

  return (
    <>
      <Search
        handleInputChange={handleInputChange}
        value={value}
        handleClick={handleClick}
      />
      <div className="body-container">
        {filterList.map((data, index) => {
          return <Card key={index} resList={data} handleClick={handleClick} />;
        })}
      </div>
    </>
  );
};

export default Body;
