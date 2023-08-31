import Shimmer from "../Comp/Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../util/useRestrauntMenu";

import RestroMenuCategory from '../Comp/RestroMenuCategory'

const RestroMenu = () => {
  const { resID } = useParams();

  const restroMenu = useRestrauntMenu(resID);

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

  // console.log(restroMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const menu = restroMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;



  const category = menu.filter((data) => {
    return data.card?.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  });

  


  if (itemCards == null) return <Shimmer />;

  const deliverytime =
    restroMenu?.cards[0]?.card?.card?.info?.sla?.deliveryTime;

  return (
    <div>
      <div className="w-3/4 mt-20 flex flex-row justify-between border-b border-dashed border-gray-400 mx-auto my-auto items-center">
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-blue-800 mb-2">{name}</p>
          <p className="text-xs text-gray-600 h-[calc(0.93rem + 2px)] overflow-hidden whitespace-nowrap truncate mb-1">
            {cuisines.join(",")}
          </p>
          <p className="text-xs text-gray-600">{areaName}</p>
        </div>

        <div className="w-70 h-auto flex flex-col items-center mb-4">
          <p className="text-green-600 mt-20 border-b border-solid border-gray-300 font-medium">
            {avgRating}☆
          </p>
          <p className="text-xs text-gray-500 font-semibold">
            {totalRatingsString}
          </p>
        </div>
      </div>

      <div className="w-1/5 mt-20 flex flex-row justify-evenly items-center border-b border-dashed border-gray-400 mx-auto">
        <p className="text-lg font-bold">🌑{deliverytime} MINS</p>
        <p className="text-lg font-bold"> {costForTwoMessage}</p>
      </div>

      <>
        <h3 className="w-20 mt-10 text-6xl mx-auto">Menu</h3>
        {/* for each category we have to build accordian */}
        {
          category.map((category)=>{
            return <RestroMenuCategory key={category.card.card.id} data={category.card.card}/>
          })
        }
      </>
    </div>
  );
};

export default RestroMenu;
