import { useState , useEffect } from "react";
import restaurantList from "../Comp/MockData";

const useListOfRestro = () => {
  const [filterList, setFilterList] = useState(restaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const json = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.10296183168158&lng=79.0430336818099&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await json.json();
    setFilterList(
      data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return filterList;
};

export default useListOfRestro;
