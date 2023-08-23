import { useEffect, useState } from "react";
import Shimmer from "../Comp/Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../Constants";

const RestroMenu = () => {
  const [restroMenu, setRestroMenu] = useState(null);

  const { resID } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(Menu_API + resID);
    const newData = await data.json();
    console.log(newData)

    setRestroMenu(newData.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (restroMenu === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    totalRatingsString,
  } = restroMenu?.cards[0]?.card.card.info;
  const { itemCards } =
    restroMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <div className="menu-container">
        <div className="basic_info_div">
          <p className="restro-Name">{name}</p>
          <p className="restro-cuisine">{cuisines.join(",")}</p>
          <p className="restro-area">{areaName}</p>
        </div>

        <div className="rating-box">
          <p className="rating">{avgRating}☆</p>
          <p className="total-rating">{totalRatingsString}</p>
        </div>
      </div>

      <div className="basic-info">
        <p>{costForTwoMessage}</p>
      </div>

      <>
        <ul>
          {itemCards.map((data) => {
            return <li>{data.card.info.name}</li>;
          })}
        </ul>
      </>
    </div>
  );
};

export default RestroMenu;
