import { useState, useEffect } from "react";

const useRestaurant = (url) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantinfo();
  }, []);
  async function getRestaurantinfo() {
    const data = await fetch(url);

    const json = await data.json();

    const restaurantData = await json?.data?.cards[0]?.card?.card?.info;
    const restaurantData1 = await json?.data?.cards[3]?.gridElements
      ?.infoWithStyle?.restaurants?.info;
    setRestaurant(restaurantData);
  }
  return restaurant;
};
export const useRestaurantMenu = (url) => {
  const [restaurantMenu, setResMenu] = useState("");
  useEffect(() => {
    getRestaurantinfo();
  }, []);
  async function getRestaurantinfo() {
    const data = await fetch(url);
    const json = await data.json();
    const diggingInJSON =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    const diggingInJSON1 = "asd";
    const resMenuList = diggingInJSON.map((item) => (
      <li key={item.card.info.id}>
        {item.card.info.name}:
        <span>{item.card.info.price.toString().slice(0, -2) + ".00"}</span>
      </li>
    ));
    setResMenu(resMenuList);
  }
  return restaurantMenu;
};

export default useRestaurant;
