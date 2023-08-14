import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Comp/Header.js";
import Body from "./src/Comp/Body.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import Home from "./src/Routes/Home.js";
import About from "./src/Routes/About.js";
import Contact from "./src/Routes/Contact.js";
import Cart from "./src/Routes/Cart.js";
import Error from "./src/Routes/Error.js";


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
        path: "/home",
        element: <Home />,
        
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
     
      }
    ],
    errorElement:<Error/>
  },
]);

root.render(<RouterProvider router={appRoute} />);
