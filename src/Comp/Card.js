import { useEffect, useState } from "react";

import restaurantList from "./MockData";

const Card = () => {

    const[resList , setResList]= useState(restaurantList)

  const fetchData = async () => {
    const json = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1045952162951&lng=79.00067690759897&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await json.json();

    const newList =
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

  };

  return (
    <div>
      {
       
      }
    </div>
  );
};

export default Card;
