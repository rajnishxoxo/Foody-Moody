import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";

import UserContext from "../util/UserContext";

import { useContext } from "react";
import { useSelector } from 'react-redux'


const Header = () => {
  const [text, setText] = useState("Login");

  const cartItem = useSelector((store)=>store.cart.item)

  console.log(cartItem);


  const onlineStatus = useOnlineStatus();

  const handleTextChange = () => {
    if (text == "Login") {
      setText("Logout");
    }
    if (text == "Logout") {
      setText("Login");
    }
  };

 

  const { currentUser } = useContext(UserContext);

  return (
    <div className="flex  flex-row justify-between  items-center shadow-lg  h-30 max-w-1200px mx-auto h-80px bg-#fff item-center   min-w-1200px ">
      <div className="w-1/5">
        <Link to="/">
          <img
            className="w-full cursor-pointer h-20 object-contain"
            src="data:image/png;base64,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"
          />
        </Link>
      </div>
      <div className="flex w-2/4 p-0.625">
        <ul className="flex flex-row list-none w-full justify-evenly items-center	text-xl font-medium	 cursor-pointer">
          <li>{onlineStatus ? "Online:✅" : "Offline:🔴"}</li>
          <Link>
            {" "}
            <li className="border-b-2 border-transparent transition border-color-300 text-decoration-none hover:border-orange-500 text-decoration-none text-current">
              Home
            </li>
          </Link>
          <Link to="/about">
            {" "}
            <li className="border-b-2 border-transparent transition border-color-300 text-decoration-none  hover:border-orange-500 text-decoration-none text-current">
              About US
            </li>
          </Link>
          <Link to="/contact">
            <li className="border-b-2 border-transparent transition border-color-300 text-decoration-none hover:border-orange-500 text-decoration-none text-current">
              Contact US
            </li>
          </Link>
          <Link to="/cart">
            <li className="border-b-2 border-transparent transition border-color-300 text-decoration-none hover:border-orange-500 text-decoration-none text-current">
              Cart 🛒 -{cartItem.length}
            </li>
          </Link>
          <li>
            <button
              className="bg-gradient-to-r from-orange-400 to-red-600 rounded-md shadow-md text-white cursor-pointer inline-block font-inter h-10 leading-10 px-5 py-0 outline-none transition duration-200 border-none hover:shadow-lg"
              onClick={handleTextChange}
            >
              {text}
            </button>
          </li>
          <li>{currentUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
