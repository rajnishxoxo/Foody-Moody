import restaurantList from "./MockData.js";
import Card from "./Card.js";
import Search from "./Search.js";
const Body = () => {
  return (
   <>
    <Search/>
    <div className="body-container">
      
      {restaurantList.map((data,index ) => {
       
       return <Card key={index} resList={data}/>
      })}
    </div>
    </>
  );
};

export default Body;
