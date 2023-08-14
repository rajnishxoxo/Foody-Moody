import React from "react";
import ReactDOM from "react-dom/client";
import Header from './src/Comp/Header.js'
import Body from "./src/Comp/Body.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <div className="main-div">
      <Header/>
      <Body/>
    </div>
  );
};

const appRoute =createBrowserRouter([
  {
    path:"/",
    element:<App/>
  }
])


root.render(<RouterProvider router={appRoute}/>)
