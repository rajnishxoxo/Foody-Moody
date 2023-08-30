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
          {listItem.map((data) => {
            console.log(data);
          })}
        </div>
      }
    </div>
  );
};

export default RestroMenuCategory;
