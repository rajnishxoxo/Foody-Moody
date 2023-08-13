import restaurantList from "./MockData.js";
import Card from "./Card.js";
const Body = () => {
  return (
    <div className="body-container">
      {restaurantList.map((data) => {
       
       return <Card resList={data}/>
      })}
    </div>
  );
};

export default Body;
