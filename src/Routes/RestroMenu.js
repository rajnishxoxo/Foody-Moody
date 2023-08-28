import Shimmer from "../Comp/Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../util/useRestrauntMenu";

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


  if (itemCards == null) return <Shimmer />;

  const deliverytime =
    restroMenu?.cards[0]?.card?.card?.info?.sla?.deliveryTime;

  return (
    <div>
      <div className="w-3/4 mt-20 flex flex-row justify-between border-b border-dashed border-gray-400 mx-auto my-auto items-center">
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-blue-800 mb-2">{name}</p>
          <p className="text-xs text-gray-600 h-[calc(0.93rem + 2px)] overflow-hidden whitespace-nowrap truncate mb-1">{cuisines.join(",")}</p>
          <p className="text-xs text-gray-600">{areaName}</p>
        </div>

        <div className="w-70 h-auto flex flex-col items-center mb-4">
          <p className="text-green-600 mt-20 border-b border-solid border-gray-300 font-medium">{avgRating}☆</p>
          <p className="text-xs text-gray-500 font-semibold">{totalRatingsString}</p>
        </div>
      </div>

      <div className="basic-info">
        <p className="deliveryTime">🌑{deliverytime} MINS</p>
        <p className="costMessage"> {costForTwoMessage}</p>
      </div>

      <>
        <h3 className="menu-Heading">Menu</h3>
        <ul className="menu">
          {itemCards.map((data) => {
            return (
              <div className="item-box">
                <li className="menu-item">
                  {data.card.info.name} {"Rs-"}{" "}
                  {data.card.info.price / 100 || 250}
                  <div className="image-div">
                    <img
                      className="food-image"
                      src={
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                        (data.card.info.imageId ||
                          "e6d14e5dc8253b8ec8b743f33299c01c")
                      }
                      alt="Food"
                    />

                    <button className="add-to-Cart">Add+</button>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </>
    </div>
  );
};

export default RestroMenu;
