const Card = (props) => {
 

 const resList = props.resList
 console.log(resList)
  // const{name,avgRating,address,cuisines} = resList[0].info

  // console.log(name,avgRating,address,cuisines)

  return (
    <div className="card-container">
      <div className="card-img">
        <img />
      </div>
      <div className="card-info">
        <h3>{resList.info.name}</h3>
        <h4>{resList.info.avgRating}</h4>
        <p>{resList.info.cuisines}</p>
        <p>{resList.info.address}</p>
      </div>
    </div>
  );
};

export default Card;
