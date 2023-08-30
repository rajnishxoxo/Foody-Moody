const RestroMenuCategory = (data) => {
  const { title, itemCards } = data.data;

  const listItem = itemCards;
  //   console.log(listItem)

  

  return (
    <div className="w-1/2 bg-gray-50 text-center  shadow-lg p-4 mx-auto my-4">
      <div className="flex flex-row justify-between">
        <span>
          {title} -({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {
        <div>
          <div>
          {listItem.map((data) => {
            // console.log(data)
            const {name,description,price,imageId} = data.card.info;
            console.log(name,description,price,imageId)
            return(
                <>
                <div key={data.card.info.id} className="p-2 m-2 border-b-2 flex">
                    <div className="flex flex-col">
                    <h3 className=" mr-3 text-1.22 font-medium text-gray-700 break-words">{name}</h3>
                    <div>
                    <span className="ml-1">Rs {price/100}</span>
                    </div>
                    </div>
                </div>
{/*                 
                // <div className="mt-4  mb-3 leading-5 text-opacity-45 tracking-tighter text-base text-gray-500 flex">
                //     {description ? description : "New to try"}
                //     </div>
                //     <div>
                //        {imageId? <img className="w-28 h-24 object-cover object-center rounded-6" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+imageId}/>: <img className="w-28 h-24 object-cover object-center rounded-6" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/z2wc6ywih0dtidtwhaoq"/>}
                // 
                
                    </div> */}

                    </>
            )
          })}
          </div>
        </div>
      }
    </div>
  );
};

export default RestroMenuCategory;
