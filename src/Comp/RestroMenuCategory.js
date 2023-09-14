import { useState } from "react";

import { useDispatch , useSelector } from "react-redux";

import { addItem } from "../util/cartSlice";

const RestroMenuCategory = ({ data }) => {
  const { title, itemCards } = data;

  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    if (showItem == true) {
      setShowItem(false);
    } else {
      setShowItem(true);
    }
  };

  const dispatch = useDispatch();

  const handleAddItem = (data) => {
    dispatch(addItem(data));
  };

  const cart = useSelector((store)=>store.cart.item)

  const listItem = itemCards;

  return (
    <div className="w-1/2 bg-gray-50 text-center  shadow-lg p-4 mx-auto my-4">
      <div
        className="flex flex-row justify-between cursor-pointer "
        onClick={handleClick}
      >
        <span>
          {title} -({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {showItem && (
  <div>
    <div>
      {listItem.map((data) => {
        const { name, description, price, imageId } = data.card.info;

        return (
          <div
            className="flex flex-row justify-between items-center border-b-2 p-2 m-2"
            key={data.card.info.id}
          >
            <div className="flex flex-col">
              <h3 className="text-2xl text-gray-700 font-medium break-words">
                {name}
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                {price ? `Rs ${price / 100}` : "Rs 200"}
              </p>
              <div className="text-base text-gray-500 mt-2">
                {description ? description : "New to try"}
              </div>
            </div>

            <div className="relative">
              {imageId ? (
                <img
                  className="w-32 h-32 object-cover object-center rounded-6"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                    imageId
                  }
                  alt={name}
                />
              ) : (
                <img
                  className="w-32 h-32 object-cover object-center rounded-6"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/z2wc6ywih0dtidtwhaoq"
                  alt="Default"
                />
              )}
              <button
                className="absolute inset-0 w-full h-full bg-gray-100 opacity-0 hover:opacity-100 flex justify-center items-center cursor-pointer rounded transition-opacity duration-300"
                onClick={() => {
                  handleAddItem(data);
                }}
              >
                Add+
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
)}


    </div>
  );
};

export default RestroMenuCategory;
