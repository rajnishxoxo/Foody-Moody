import restaurantList from "./MockData.js";
import Card from "./Card.js";
import Search from "./Search.js";
import { useState } from "react";
const Body = () => {

  const [listOfRestro , setListOfRestro] = useState(restaurantList);

  const [filterList , setFilterList]= useState(restaurantList)

  const [value, setvalue] = useState("");

  

  const handleInputChange = (e) => {
    setvalue(e.target.value)
  };

  const handleClick=()=>{
    filterList.map((data)=>{
      if(data.info.name.includes(value)){
        return data;
      }
      setListOfRestro(data)
    })

    
  }

  console.log(value)

  return (
   <>
    <Search handleInputChange={handleInputChange} value={value} handleClick={handleClick}/>
    <div className="body-container">
      
      {listOfRestro.map((data,index ) => {
       
       return <Card key={index} resList={data} handleClick={handleClick}/>
      })}
    </div>
    </>
  );
};

export default Body;
