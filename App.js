import React from "react";
import ReactDOM from "react-dom/client";
import Header from './src/Comp/Header.js'

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <div>
      <Header/>
    </div>
  );
};

root.render(<App/>)
