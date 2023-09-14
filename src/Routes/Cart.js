import { useSelector, useDispatch } from "react-redux";
import RestroMenuCategory from "../Comp/RestroMenuCategory";
import { clearCart } from "../util/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => {
    return store.cart.item;
  });

  const dispatch = useDispatch();

  const handleclearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      {cartItem.map((data) => {
        const { name, description, price, imageId } = data.card.info;

        const shortDescription = description.slice(0,20);

        console.log(shortDescription)
        

        return (
          <div className="flex items-center justify-between border border-gray-300 p-4 mb-4">
            <div className="flex items-center w-2/3">
              <div>
                <h3 className="text-1.5xl text-left font-medium text-gray-700 break-words">
                  {name}
                </h3>
                <div>
                  <p className="text-left mt-2 font-medium text-gray-700">
                    Rs {price / 100}
                  </p>
                </div>
                <div className="mt-2 text-left leading-5 text-opacity-70 text-base text-gray-500">
                  {shortDescription+"..."}
                </div>
              </div>
              <div className="ml-4">
                {imageId ? (
                  <img
                    className="w-28 h-24 object-cover object-center rounded-6"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
                    alt={name}
                  />
                ) : (
                  <img
                    className="w-28 h-24 object-cover object-center rounded-6"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/z2wc6ywih0dtidtwhaoq"
                    alt="Default"
                  />
                )}
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-orange-700 w-12 h-12 rounded-xl text-2xl font-semibold mr-2">
                +
              </button>
              <button className="bg-orange-700 w-12 h-12 rounded-xl text-2xl font-semibold">
                -
              </button>
            </div>
          </div>
        );
      })}

      <button
        className="font-normal p-2 bg-orange-700 rounded m-2"
        onClick={handleclearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
