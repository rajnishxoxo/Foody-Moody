import restaurantList from "./MockData.js";
import Card from "./Card.js";
import Search from "./Search.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus.js";
import useListOfRestro from "../util/useListOfRestro.js";
const Body = () => {
  const listOfRestro = useListOfRestro(restaurantList);
  const filterList = useListOfRestro(restaurantList);
  const [value, setvalue] = useState("");

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
    console.log(listOfRestro);
    const newList = listOfRestro.filter((data) => {
      return data.info.sla.deliveryTime < 20;
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

      <div className="filtergrp">
        <button onClick={handleFilter} className="filter-btn">
          Rating 4.0+
        </button>

        <button onClick={handleFilterDelivery} className="filter-btn">
          Faster Delivery
        </button>
      </div>

      <div className="body-container">
        {filterList.map((data, index) => {
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
