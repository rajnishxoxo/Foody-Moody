import { useState } from "react";
import CartContext from "../util/CartContext"
import { useContext } from "react"

const RestroMenuCategory = ({ data}) => {

  const { title, itemCards } = data;

  const[showItem , setShowItem] = useState(false)



  const handleClick = ()=>{
    if(showItem==true){
      setShowItem(false)
    }else{
      setShowItem(true)
    }
  }

  const listItem = itemCards;

  return (
    

    
    <div className="w-1/2 bg-gray-50 text-center  shadow-lg p-4 mx-auto my-4">
      <div className="flex flex-row justify-between cursor-pointer " onClick={handleClick}>
        <span>
          {title} -({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {(showItem&&
        <div>
          <div>
            {listItem.map((data) => {
              const { name, description, price, imageId } = data.card.info;

              // console.log(name,description,price,imageId)
              return (
                <div
                  className="flex flex-row justify-evenly items-center 	"
                  key={data.card.info.id}
                >
                  <div
                    key={data.card.info.id}
                    className="p-2 m-2 border-b-2 flex  justify-evenly w-full"
                  >
                    <div>
                      <h3 className=" mr-3 text-1.22 text-left font-medium text-gray-700 break-words">
                        {name}
                      </h3>
                      <div>
                        {price ? (
                          <p className=" text-left m-2 font-medium text-gray-700 break-words ">
                            Rs {price / 100}
                          </p>
                        ) : (
                          "Rs 200"
                        )}
                      </div>
                      <div className="mt-4  text-left mb-3 leading-5 text-opacity-45 tracking-tighter text-base text-gray-500 flex">
                        {description ? description : "New to try"}
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    {imageId ? (
                      <img
                        className="w-28 h-24 object-cover object-center rounded-6"
                        src={
                          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                          imageId
                        }
                      />
                    ) : (
                      <img
                        className="w-28 h-24 object-cover object-center rounded-6"
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/z2wc6ywih0dtidtwhaoq"
                      />
                    )}
                    <div className="absolute ">
                      <button className="w-14 left-1/2 bottom-8 transform -translate-x-3/2  -translate-y-7/2 z-10  p-2 bg-gray-100 shadow-lg  text-green-700 h-full cursor-pointer rounded ">
                        Add+
                      </button>
                    </div>
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
