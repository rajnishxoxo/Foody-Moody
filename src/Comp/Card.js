const Card = (props) => {
  const resList = props.resList;
  const { name, avgRating, address, cuisines, cloudinaryImageId } =
    resList.info;

  console.log(name, avgRating, address, cuisines, cloudinaryImageId);

  return (
    <div className="card-container">
      <div className="card-img">
        <img
          className="card-logo"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
      </div>
      <div className="card-info">
        <h3 className="restroName">{name}</h3>
        <h4 className="rating">{avgRating}⭐</h4>
        <p className="card-para">{cuisines}</p>
        <p className="card-para">{address}</p>
      </div>
    </div>
  );
};

export default Card;
