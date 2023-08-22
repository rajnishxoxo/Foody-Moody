import { useEffect, useState } from "react";
import Shimmer from "../Comp/Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../Constants";

const RestroMenu = () => {
  const [restroMenu, setRestroMenu] = useState(null);

  const { resID } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(Menu_API+resID);
    const newData = await data.json();
    console.log(newData);
    // let restroMenu =
    //   newData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    //     .itemCards;

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
    restroMenu?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{avgRating}</h3>

      <>
        <ul>
          {itemCards.map((data) => {
            console.log(data.card.info.name);
            return <li>{data.card.info.name}</li>;
          })}
        </ul>
      </>
    </div>
  );
};

export default RestroMenu;
