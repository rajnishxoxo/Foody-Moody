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

  // const extraMenu =
  //   restroMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card;

  // const { card } = extraMenu;

  // console.log(card.categories)

  if (itemCards == null) return <Shimmer />;

  const deliverytime =
    restroMenu?.cards[0]?.card?.card?.info?.sla?.deliveryTime;

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
                  {data.card.info.name} {"Rs-"} {data.card.info.price / 100}
                  <div className="image-div">
                    <img
                      className="food-image"
                      src={
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                        data.card.info.imageId
                      }
                    />
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
