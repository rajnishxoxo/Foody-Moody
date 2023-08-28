import restaurantList from "./MockData.js";
import Card from "./Card.js";
import Search from "./Search.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus.js";

const Body = () => {
  const [filterList, setFilterList] = useState(restaurantList);
  const [listOfRestro, setListOfRestro] = useState(restaurantList);
  const [value, setvalue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const json = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.10296183168158&lng=79.0430336818099&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await json.json();
    setFilterList(
      data.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setListOfRestro(
      data.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  };

  const handleInputChange = (e) => {
    setvalue(e.target.value);
  };

  const handleClick = () => {
    let filterData = listOfRestro.filter((data) => {
      return data.info.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilterList(filterData);
  };

  const handleFilter = () => {
    const newList = listOfRestro.filter((data) => {
      return data.info.avgRating > 4.0;
    });

    setFilterList(newList);
  };

  const handleFilterDelivery = () => {
    const newList = listOfRestro.filter((data) => {
      return data.info.sla.deliveryTime < 10;
    });

    setFilterList(newList);
  };

  const onlineMode = useOnlineStatus();

  if (onlineMode === false) {
    return (
      <h1>
        Looks Like You are Offline,Please Check Your Internet Connection!📴
      </h1>
    );
  }

  if (filterList == null) return <Shimmer />;

  return (
    <>
      <Search
        handleInputChange={handleInputChange}
        value={value}
        handleClick={handleClick}
      />
      {/*filter Top rated */}

      <div className="w-1/2 flex flex-row justify-around  mx-auto my-3.5">
        <button
          onClick={handleFilter}
          className="w-auto rounded-2xl cursor-pointer text-sm px-3 py-3 bg-amber-400"
        >
          Rating 4.0+
        </button>

        <button
          onClick={handleFilterDelivery}
          className="w-auto rounded-2xl cursor-pointer text-sm px-3 py-3 bg-amber-400"
        >
          Faster Delivery
        </button>
      </div>

      <div className="body-container">
        {filterList.map((data) => {
          return (
            <Link key={data.info.id} to={"/restro/" + data.info.id}>
              <Card resList={data} handleClick={handleClick} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
