const Card = (props) => {
  const resList = props.resList;

  const { name, avgRating, locality, areaName, cuisines, cloudinaryImageId } =
    resList.info;


  return (
    <div className="flex flex-col  justify-between cursor-pointer w-72 shadow-md h-auto">
      <div className="w-full">
        <img
          className="w-full rounded-xl object-cover"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
      </div>
      <div className="w-70 flex flex-col justify-between h-auto ">
        <h3 className="text-lg font-bold	leading-6 w-full text-center text-slate-950">{name}</h3>
        <h4 className="text-xl font-normal leading-tight tracking-tighter text-opacity-75 text-center -mt-2">{avgRating}⭐</h4>
        <p className="text-sm font-light w-full text-center whitespace-nowrap truncate overflow-hidden ">{cuisines.join(',')}</p>
        <p className="text-sm font-light leading-tight tracking-tighter  w-full text-center">{areaName}-{locality}</p>
      </div>
    </div>
  );
};

//High order function that will tell if the restro is open or not.

export const restroIsOpen = (Card)=>{
  return (props)=>{
    return(
      <>
      <label className="absolute text-white bg-orange-600 w-14 text-center rounded  p-1">Open</label>
      <Card {...props}/>
      </>
    )
  }
}

export default Card;
