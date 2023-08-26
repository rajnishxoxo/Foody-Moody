import { useEffect, useState } from "react";
import { Menu_API } from "../Constants";

const useRestrauntMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_API + resID);
    const newData = await data.json();

    setResInfo(newData.data);
  };

  return resInfo;
};

export default useRestrauntMenu;
