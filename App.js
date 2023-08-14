import React from "react";
import ReactDOM from "react-dom/client";
import Header from './src/Comp/Header.js'
import Body from "./src/Comp/Body.js";
import Card from "./src/Comp/Card.js";
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <div className="main-div">
      <Header/>
      <Body/>
    </div>
  );
};

root.render(<App/>)
