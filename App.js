import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Comp/Header.js";
import Body from "./src/Comp/Body.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import About from "./src/Routes/About.js";
import Contact from "./src/Routes/Contact.js";
import Cart from "./src/Routes/Cart.js";
import Error from "./src/Routes/Error.js";
import RestroMenu from "./src/Routes/RestroMenu.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <div className="main-div">
      <Header />
      <Outlet />
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'/',
        element:<Body/>,
    
      },
      {
        path: "/about",
        element: <About />,
      
      },
      {
        path: "/contact",
        element: <Contact />,
      
      },
      {
        path: "/cart",
        element: <Cart/>,
     
      },
      {
        path: "/cart",
        element: <Cart/>,
     
      },
      {
        path:'/restro/:resID',
        element:<RestroMenu/>

      }
    ],
    errorElement:<Error/>
  },
]);

root.render(<RouterProvider router={appRoute} />);
