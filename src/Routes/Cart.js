import { useSelector , useDispatch } from "react-redux";
import RestroMenuCategory from "../Comp/RestroMenuCategory";
import {clearCart} from '../util/cartSlice';
const Cart = () => {
  const cartItem = useSelector((store) => {
    return store.cart.item;
  });

  const dispatch = useDispatch();


  const handleclearCart = () =>{

    dispatch(clearCart())

  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      {cartItem.map((data) => {
        const { name, description, price, imageId } = data.card.info;

        console.log(name, description, price);
        return (
          <div className="flex flex-row  items-center">
            <div className="flex flex-row w-1/2 m-4">
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
              </div>
            </div>
            <div>
              <button>
                +
              </button>
            </div>
          </div>
        );
      })}

      <button className="font-normal p-2 bg-orange-700 rounded m-2" onClick={handleclearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
